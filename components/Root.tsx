"use client";
import { PropsWithChildren, useEffect } from "react";
import { useDidMount } from "@/hooks/useDidMount";
import {
  init,
  disableVerticalSwipes,
  mountSwipeBehavior,
  mountMiniApp,
  setMiniAppHeaderColor,
  expandViewport,
  mountViewport,
  isViewportMounted,
  isSwipeBehaviorMounted,
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

  init();
  mountMiniApp();
  mountViewport();
  mountSwipeBehavior();

  useEffect(() => {
    expandViewport();
    if (isSwipeBehaviorMounted()) {
      disableVerticalSwipes();
    }
    setMiniAppHeaderColor("#121318");
  }, []);

  useBackButton();

  return <Loader spinner />;
}

export function Root(props: PropsWithChildren) {
  // Unfortunately, Telegram Mini Apps does not allow us to use all features of the Server Side
  // Rendering. That's why we are showing loader on the server side.
  const didMount = useDidMount();

  return didMount ? <RootInner {...props} /> : <Loader />;
}
