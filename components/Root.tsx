"use client";
import { PropsWithChildren, useEffect } from "react";
import { useDidMount } from "@/hooks/useDidMount";
import { useTelegramMock } from "@/hooks/useTelegramMock";
import {
  isBackButtonMounted,
  isMiniAppMounted,
  isSwipeBehaviorMounted,
  isViewportExpanded,
  isViewportMounted,
  isViewportStable,
  useLaunchParams,
  useSignal,
  init,
  mountMiniApp,
  miniAppReady,
  initData,
  setMiniAppHeaderColor,
  mountSwipeBehavior,
  mountViewport,
  expandViewport,
  disableVerticalSwipes,
  enableVerticalSwipes,
  mountBackButton,
  $debug,
  isBackButtonSupported,
} from "@telegram-apps/sdk-react";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ErrorPage } from "@/components/ErrorPage";
import { Loader } from "@/components/Loader/Loader";

function RootInner({ children }: PropsWithChildren) {
  init();

  const isDev = process.env.NODE_ENV === "development";
  // Mock Telegram environment in development mode if needed.
  if (isDev) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTelegramMock();
  }

  const lp = useLaunchParams();
  const debug = isDev || lp.startParam === "debug";

  $debug.set(debug);

  if (debug) {
    import("eruda").then((lib) => lib.default.init()).catch(console.error);
  }

  const expandedViewPort = useSignal(isViewportExpanded);
  const stableViewport = useSignal(isViewportStable);
  const viewportMounted = useSignal(isViewportMounted);
  const miniAppMounted = useSignal(isMiniAppMounted);
  const swipeBehaviorMounted = useSignal(isSwipeBehaviorMounted);
  const backButtonMounted = useSignal(isBackButtonMounted);

  useEffect(() => {
    if (!miniAppMounted) {
      mountMiniApp();
    } else {
      miniAppReady();
      initData.restore();
      setMiniAppHeaderColor("#121318");
    }
  }, [miniAppMounted]);

  // Монтирование поведения свайпов
  useEffect(() => {
    if (!swipeBehaviorMounted) {
      mountSwipeBehavior();
    }
  }, [swipeBehaviorMounted]);
  // Монтирование и расширение вьюпорта
  useEffect(() => {
    if (!viewportMounted) {
      mountViewport();
    } else {
      expandViewport();
    }
  }, [viewportMounted]);
  // Управление вертикальными свайпами в зависимости от состояния вьюпорта и свайпов
  useEffect(() => {
    if (expandedViewPort && stableViewport && swipeBehaviorMounted) {
      disableVerticalSwipes();
    } else {
      enableVerticalSwipes();
    }
  }, [expandedViewPort, stableViewport, swipeBehaviorMounted]);

  useEffect(() => {
    if (isBackButtonSupported() && !backButtonMounted) {
      mountBackButton();
    }
  }, [backButtonMounted]);

  return <>{children}</>;
}

export function Root(props: PropsWithChildren) {
  const didMount = useDidMount();

  return didMount ? (
    <ErrorBoundary fallback={ErrorPage}>
      <RootInner {...props} />
    </ErrorBoundary>
  ) : null;
}
