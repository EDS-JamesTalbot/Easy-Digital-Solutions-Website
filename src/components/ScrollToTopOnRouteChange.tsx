"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Ensures the viewport starts at the top after client-side navigations so the
 * sticky header and page title are not clipped or offset.
 */
export function ScrollToTopOnRouteChange() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
