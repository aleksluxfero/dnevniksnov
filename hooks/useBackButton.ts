import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  hideBackButton,
  isBackButtonMounted,
  isBackButtonSupported,
  mountBackButton,
  offBackButtonClick,
  onBackButtonClick,
  showBackButton,
  useSignal,
} from "@telegram-apps/sdk-react";

export const useBackButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const backButtonMounted = useSignal(isBackButtonMounted);

  useEffect(() => {
    if (isBackButtonSupported() && pathname !== "/") {
      const handleBackButtonClick = () => {
        router.push("/");
      };
      if (!backButtonMounted) {
        mountBackButton();
      }

      if (backButtonMounted) {
        showBackButton();
        onBackButtonClick(handleBackButtonClick);
      }

      return () => {
        offBackButtonClick(handleBackButtonClick);
        hideBackButton();
      };
    }
  }, [backButtonMounted, pathname, router]);
};
