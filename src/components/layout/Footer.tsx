import Link from "next/link";
import { site } from "@/data/site";
export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-black/45 sm:px-8 md:flex-row md:justify-between lg:px-10">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex gap-5">
          <Link href="#work">Work</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
