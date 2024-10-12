"use client";
import { PropsWithChildren, useEffect } from "react";
import { useDidMount } from "@/hooks/useDidMount";
import {
  init,
  expandViewport,
  isViewportExpanded,
  disableVerticalSwipes,
  mountSwipeBehavior,
  isSwipeBehaviorSupported,
  isSwipeBehaviorMounted,
  isVerticalSwipesEnabled,
} from "@telegram-apps/sdk-react";
import { useTelegramMock } from "@/hooks/useTelegramMock";

function RootInner({ children }: PropsWithChildren) {
  // Mock Telegram environment in development mode if needed.
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTelegramMock();
  }

  useEffect(() => {
    console.log("Поодерживается ли свайп", isSwipeBehaviorSupported());
    init();
    if (!isViewportExpanded()) {
      expandViewport();
    }
    if (isSwipeBehaviorSupported()) {
      console.log("swipe behavior", isSwipeBehaviorMounted());
      mountSwipeBehavior();
      console.log("swipe behavior", isSwipeBehaviorMounted());
      if (isSwipeBehaviorMounted()) {
        console.log("swipe enable", isVerticalSwipesEnabled());
        disableVerticalSwipes();
        console.log("swipe enable", isVerticalSwipesEnabled());
      }
    }
  }, []);

  return <>{children}</>;
}

export function Root(props: PropsWithChildren) {
  // Unfortunately, Telegram Mini Apps does not allow us to use all features of the Server Side
  // Rendering. That's why we are showing loader on the server side.
  const didMount = useDidMount();

  return didMount ? (
    <RootInner {...props} />
  ) : (
    <div className="root__loading">Loading</div>
  );
}
