import { useRouter } from "next/router";

export const useIsDarkMode = () => {
  const router = useRouter();
  return router.pathname == "/aboutus" || router.pathname == "/recommendedDaos"
    ? true
    : false;
};
