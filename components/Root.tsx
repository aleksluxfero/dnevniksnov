"use client";
import { PropsWithChildren, useEffect, useState } from "react";
import { useDidMount } from "@/hooks/useDidMount";
import {
  init,
  disableVerticalSwipes,
  mountSwipeBehavior,
  mountMiniApp,
  setMiniAppHeaderColor,
  expandViewport,
  mountViewport,
  isViewportExpanded,
} from "@telegram-apps/sdk-react";
import { useTelegramMock } from "@/hooks/useTelegramMock";
import { useBackButton } from "@/hooks/useBackButton";
import { Loader } from "@/components/loader/app-loader";

function RootInner({ children }: PropsWithChildren) {
  // Mock Telegram environment in development mode if needed.
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTelegramMock();
  }

  const [data, setData] = useState<string>("");
  const [isSendData, setIsSendData] = useState(false);

  useEffect(() => {
    init();
    mountMiniApp();
    mountViewport();
    mountSwipeBehavior();
    expandViewport();
    disableVerticalSwipes();
    setMiniAppHeaderColor("#121318");
  }, []);

  useEffect(() => {
    console.log(isViewportExpanded());
    setIsSendData(true);
    const timeoutId = setTimeout(() => {
      setData("ok");
      setIsSendData(false);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useBackButton();

  console.log(data);

  if (isSendData && isViewportExpanded()) {
    return <Loader />;
  }

  return <>{children}</>;
}

export function Root(props: PropsWithChildren) {
  // Unfortunately, Telegram Mini Apps does not allow us to use all features of the Server Side
  // Rendering. That's why we are showing loader on the server side.
  const didMount = useDidMount();

  return didMount ? <RootInner {...props} /> : null;
}
