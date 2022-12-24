import { useRouter } from "next/router";

export const useIsDarkMode = () => {
  const router = useRouter();
  return router.pathname == "/aboutus" || router.pathname == "/recommendedDaos"
    ? true
    : false;
};

export const useViewPage = (page: string) => {
  const router = useRouter();
  router.push(`${page}`);
};
