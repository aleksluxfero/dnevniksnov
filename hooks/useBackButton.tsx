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
import { usePathname, useRouter } from "next/navigation";

export const useBackButton = () => {
  const backButtonMounted = useSignal(isBackButtonMounted);

  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    console.log(pathName);
    if (isBackButtonSupported() && pathName !== "/") {
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
  }, [backButtonMounted, pathName, router]);
};
