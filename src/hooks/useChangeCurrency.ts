"use client";

import { usePathname, useRouter } from "next/navigation";

export const useChangeCurrency = () => {
  const router = useRouter();
  const pathname = usePathname();

  const changeCurrency = (currency: string) => {
    router.replace(`${pathname}?currency=${currency}`);
  };
  return { changeCurrency };
};
