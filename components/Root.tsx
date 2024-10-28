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
  isViewportStable,
  isViewportMounted,
  isViewportExpanded,
  viewportHeight,
  viewportStableHeight,
  viewportState,
} from "@telegram-apps/sdk-react";
import { useTelegramMock } from "@/hooks/useTelegramMock";
import { useBackButton } from "@/hooks/useBackButton";

function RootInner({ children }: PropsWithChildren) {
  // Mock Telegram environment in development mode if needed.
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTelegramMock();
  }

  const stableViewPort = isViewportStable();
  const mountedViewPort = isViewportMounted();
  const expandedViewPort = isViewportExpanded();

  useEffect(() => {
    console.log("effect");
    init();
    mountMiniApp();
    mountViewport();
    mountSwipeBehavior();
    expandViewport();
    if (stableViewPort) {
      disableVerticalSwipes();
    }
    setMiniAppHeaderColor("#121318");
  }, [stableViewPort]);

  useEffect(() => {
    console.log("effect");
    console.log(stableViewPort);
    console.log(mountedViewPort);
    console.log(expandedViewPort);
  }, [expandedViewPort, mountedViewPort, stableViewPort]);

  useBackButton();

  return <>{children}</>;
}

export function Root(props: PropsWithChildren) {
  // Unfortunately, Telegram Mini Apps does not allow us to use all features of the Server Side
  // Rendering. That's why we are showing loader on the server side.
  const didMount = useDidMount();

  return didMount ? <RootInner {...props} /> : null;
}
