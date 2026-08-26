import Link from "next/link";
import type { ReactNode } from "react";
export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const s =
    variant === "primary"
      ? "bg-[#111] text-white hover:bg-[#2a2a2a]"
      : "border border-black/10 bg-white text-[#111] hover:border-black/30";
  const c = `inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5 ${s} ${className}`;
  return href ? (
    <Link href={href} className={c}>
      {children}
    </Link>
  ) : (
    <button className={c}>{children}</button>
  );
}
