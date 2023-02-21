import { useRouter } from "next/router";
import { useState } from "react";

export const useIsDarkMode = () => {
  const router = useRouter();
  return router.pathname == "/aboutus" || router.pathname == "/recommendedDaos"
    ? true
    : false;
};

export const useViewPage = () => {
  const router = useRouter();
  function onViewPage(page: string, callBack?: () => void) {
    router.push(`${page}`);
    callBack && callBack();
  }
  return { onViewPage };
};

export const useLoadingButton = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { onViewPage } = useViewPage();

  function onClick(page: string, callBack?: () => void) {
    setLoading(true);

    setTimeout(() => {
      onViewPage(page, () => {
        setLoading(false);
      });
    }, 1000);
  }
  return { isLoading, onClick };
};
