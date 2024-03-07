"use client";

import { usePathname, useRouter } from "next/navigation";

// Dette er et eksmpel på en custom hook.
// Les mer om custom hooks her: https://react.dev/learn/reusing-logic-with-custom-hooks

export const useChangeCurrency = () => {
  const router = useRouter();
  const pathname = usePathname();

  const changeCurrency = (currency: string) => {
    router.replace(`${pathname}?currency=${currency}`);
  };
  return { changeCurrency };
};
