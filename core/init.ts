import {
  miniApp,
  $debug,
  init as initSDK,
  swipeBehavior,
  viewport,
  initData,
  useSignal,
  isViewportExpanded,
  isViewportStable,
  isViewportMounted,
  isMiniAppMounted,
  isSwipeBehaviorMounted,
  mountMiniApp,
  miniAppReady,
  setMiniAppHeaderColor,
  mountSwipeBehavior,
  mountViewport,
  expandViewport,
  disableVerticalSwipes,
  enableVerticalSwipes,
  backButton,
} from "@telegram-apps/sdk-react";
import { useEffect } from "react";

/**
 * Initializes the application and configures its dependencies.
 */
export function init(debug: boolean): void {
  const expandedViewPort = useSignal(isViewportExpanded);
  const stableViewport = useSignal(isViewportStable);
  const viewportMounted = useSignal(isViewportMounted);
  const miniAppMounted = useSignal(isMiniAppMounted);
  const swipeBehaviorMounted = useSignal(isSwipeBehaviorMounted);
  // Set @telegram-apps/sdk-react debug mode.
  $debug.set(debug);

  // Initialize special event handlers for Telegram Desktop, Android, iOS, etc.
  // Also, configure the package.
  initSDK();

  // Монтирование мини-приложения и установка цвета хедера
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
    if (backButton.isSupported()) {
      backButton.mount();
    }
  }, []);

  // Add Eruda if needed.
  if (debug) {
    import("eruda").then((lib) => lib.default.init()).catch(console.error);
  }
}
