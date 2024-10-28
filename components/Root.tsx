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
  isViewportExpanded,
  useSignal,
  enableVerticalSwipes,
  isViewportStable,
  isViewportMounted,
  isMiniAppMounted,
  miniAppReady,
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

  const expandedViewPort = useSignal(isViewportExpanded);
  const stableViewport = useSignal(isViewportStable);
  const viewportMounted = useSignal(isViewportMounted);
  const miniAppMounted = useSignal(isMiniAppMounted);
  const swipeBehavior = useSignal(isSwipeBehaviorMounted);

  useEffect(() => {
    console.log("Miniapp", miniAppMounted);
    if (!miniAppMounted) {
      mountMiniApp();
    } else {
      miniAppReady();
      setMiniAppHeaderColor("#121318");
    }
  }, [miniAppMounted]);

  useEffect(() => {
    console.log("swipe behavior", swipeBehavior);
    if (!swipeBehavior) {
      mountSwipeBehavior();
    }
  }, [swipeBehavior]);

  useEffect(() => {
    console.log("viewport", viewportMounted);
    if (!viewportMounted) {
      mountViewport();
    } else {
      expandViewport();
    }
  }, [viewportMounted]);

  useEffect(() => {
    console.log(
      "disableVerticalSwipes",
      swipeBehavior,
      stableViewport,
      expandedViewPort,
    );
    if (expandedViewPort && stableViewport && swipeBehavior) {
      disableVerticalSwipes();
    } else {
      enableVerticalSwipes();
    }
  }, [expandedViewPort, stableViewport, swipeBehavior]);

  useBackButton();

  if (!miniAppMounted && expandedViewPort) {
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
