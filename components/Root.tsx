"use client";
import { PropsWithChildren, useEffect } from "react";
import { useDidMount } from "@/hooks/useDidMount";
import {
  init,
  disableVerticalSwipes,
  enableVerticalSwipes,
  mountSwipeBehavior,
  mountMiniApp,
  setMiniAppHeaderColor,
  expandViewport,
  mountViewport,
  isViewportExpanded,
  useSignal,
  isViewportStable,
  isViewportMounted,
  isMiniAppMounted,
  miniAppReady,
  isSwipeBehaviorMounted,
} from "@telegram-apps/sdk-react";
import { useTelegramMock } from "@/hooks/useTelegramMock";
import { useBackButton } from "@/hooks/useBackButton";

function RootInner({ children }: PropsWithChildren) {
  // Инициализация SDK и мока окружения в режиме разработки
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useTelegramMock();
    }
    init();
  }, []);

  const expandedViewPort = useSignal(isViewportExpanded);
  const stableViewport = useSignal(isViewportStable);
  const viewportMounted = useSignal(isViewportMounted);
  const miniAppMounted = useSignal(isMiniAppMounted);
  const swipeBehaviorMounted = useSignal(isSwipeBehaviorMounted);

  // Монтирование мини-приложения и установка цвета хедера
  useEffect(() => {
    if (!miniAppMounted) {
      mountMiniApp();
    } else {
      miniAppReady();
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

  useBackButton();

  return <>{children}</>;
}

export function Root({ children }: PropsWithChildren) {
  const didMount = useDidMount();

  return didMount ? <RootInner>{children}</RootInner> : null;
}
