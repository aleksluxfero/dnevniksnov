"use client";
import { PropsWithChildren } from "react";
import { useDidMount } from "@/hooks/useDidMount";
import { useTelegramMock } from "@/hooks/useTelegramMock";
import { init } from "@/core/init";
import { useLaunchParams } from "@telegram-apps/sdk-react";
import { useClientOnce } from "@/hooks/useClientOnce";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ErrorPage } from "@/components/ErrorPage";
import { Loader } from "@/components/loader/Loader";

function RootInner({ children }: PropsWithChildren) {
  const isDev = process.env.NODE_ENV === "development";
  // Mock Telegram environment in development mode if needed.
  if (isDev) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTelegramMock();
  }

  const lp = useLaunchParams();
  const debug = isDev || lp.startParam === "debug";

  useClientOnce(() => {
    init(debug);
  });

  return <>{children}</>;
}

export function Root(props: PropsWithChildren) {
  const didMount = useDidMount();

  return didMount ? (
    <ErrorBoundary fallback={ErrorPage}>
      <RootInner {...props} />
    </ErrorBoundary>
  ) : (
    <Loader />
  );
}
