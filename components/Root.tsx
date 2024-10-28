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

function RootInner({ children }: PropsWithChildren) {
  // Mock Telegram environment in development mode if needed.
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTelegramMock();
  }

  const expandedViewPort = isViewportExpanded();
  const [data, setData] = useState("");

  useEffect(() => {
    console.log("effect");
    init();
    mountMiniApp();
    mountViewport();
    mountSwipeBehavior();
    if (!expandedViewPort) {
      console.log("до", expandedViewPort);
      expandViewport();
      console.log(expandedViewPort);
    }

    if (expandedViewPort) {
      console.log("dads", expandedViewPort);
      disableVerticalSwipes();
      setData("123");
    }
    setMiniAppHeaderColor("#121318");
  }, [expandedViewPort]);

  useBackButton();

  if (data) {
    return <span>{data}</span>;
  }

  return <>{children}</>;
}

export function Root(props: PropsWithChildren) {
  // Unfortunately, Telegram Mini Apps does not allow us to use all features of the Server Side
  // Rendering. That's why we are showing loader on the server side.
  const didMount = useDidMount();

  return didMount ? <RootInner {...props} /> : null;
}
