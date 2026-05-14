import Link from "next/link";
import type { ComponentProps } from "react";

type EdsTextLinkProps = ComponentProps<typeof Link>;

export function EdsTextLink({ className = "", ...props }: EdsTextLinkProps) {
  return (
    <Link
      className={`font-semibold text-eds-green underline-offset-4 hover:underline ${className}`.trim()}
      {...props}
    />
  );
}
