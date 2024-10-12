"use client";
import { PropsWithChildren, useEffect } from "react";
import { useDidMount } from "@/hooks/useDidMount";
import { init, expandViewport } from "@telegram-apps/sdk-react";
import { useTelegramMock } from "@/hooks/useTelegramMock";

function RootInner({ children }: PropsWithChildren) {
  // Mock Telegram environment in development mode if needed.
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTelegramMock();
  }

  useEffect(() => {
    init();
    expandViewport();
  }, []);

  return <div>{children}</div>;
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
