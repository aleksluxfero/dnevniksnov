"use client";
import { PropsWithChildren, useEffect } from "react";
import { useDidMount } from "@/hooks/useDidMount";
import { useTelegramMock } from "@/hooks/useTelegramMock";
import {
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
  $debug,
  miniApp,
} from "@telegram-apps/sdk-react";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ErrorPage } from "@/components/ErrorPage";
import { useBackButton } from "@/hooks/useBackButton";

function RootInner({ children }: PropsWithChildren) {
  const isWeb = true;
  const isDev = process.env.NODE_ENV === "development";
  // Mock Telegram environment in development mode if needed.
  if (isDev) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTelegramMock();
  }

  init();

  const lp = useLaunchParams();
  const debug = isDev || lp.startParam === "debug";
  const isDark = useSignal(miniApp.isDark);

  $debug.set(debug);

  if (debug) {
    import("eruda").then((lib) => lib.default.init()).catch(console.error);
  }

  const expandedViewPort = useSignal(isViewportExpanded);
  const stableViewport = useSignal(isViewportStable);
  const viewportMounted = useSignal(isViewportMounted);
  const miniAppMounted = useSignal(isMiniAppMounted);
  const swipeBehaviorMounted = useSignal(isSwipeBehaviorMounted);

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
    if (!isWeb) {
      if (!viewportMounted) {
        mountViewport();
      } else {
        expandViewport();
      }
    }
  }, [isWeb, viewportMounted]);
  // Управление вертикальными свайпами в зависимости от состояния вьюпорта и свайпов
  useEffect(() => {
    if (expandedViewPort && stableViewport && swipeBehaviorMounted) {
      disableVerticalSwipes();
    } else {
      enableVerticalSwipes();
    }
  }, [expandedViewPort, stableViewport, swipeBehaviorMounted]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [isDark]);

  useBackButton();

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
