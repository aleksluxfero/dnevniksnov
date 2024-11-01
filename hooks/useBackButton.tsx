import { useEffect } from "react";
import {
  backButton,
  isBackButtonMounted,
  isBackButtonSupported,
  mountBackButton,
  useSignal,
} from "@telegram-apps/sdk-react";
import { usePathname, useRouter } from "next/navigation";

export const useBackButton = () => {
  const backButtonMounted = useSignal(isBackButtonMounted);

  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (isBackButtonSupported() && !backButtonMounted) {
      mountBackButton();
    }
  }, [backButtonMounted]);

  useEffect(() => {
    if (backButtonMounted && pathName !== "/") {
      backButton.show();
    } else {
      backButton.hide();
    }
  }, [backButtonMounted, pathName]);

  useEffect(() => {
    return backButton.onClick(() => {
      console.log("unmount");
      router.back();
    });
  }, [router]);
};
