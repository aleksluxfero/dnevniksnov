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
} from "@telegram-apps/sdk-react";

export const useBackButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isBackButtonSupported() && pathname !== "/") {
      const handleBackButtonClick = () => {
        router.push("/");
      };
      if (!isBackButtonMounted()) {
        mountBackButton();
      }

      showBackButton();
      onBackButtonClick(handleBackButtonClick);

      return () => {
        offBackButtonClick(handleBackButtonClick);
        hideBackButton();
      };
    }
  }, [pathname, router]);
};
