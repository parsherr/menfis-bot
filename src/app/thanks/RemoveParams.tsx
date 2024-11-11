"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RemoveParams() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/thanks", { scroll: false });
  }, [router]);

  return <></>;
}
