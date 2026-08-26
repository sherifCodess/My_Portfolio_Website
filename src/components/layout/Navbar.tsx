"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Container from "../ui/Container";
import { site } from "@/data/site";
const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        <nav className="mt-4 flex items-center justify-between rounded-full border border-black/10 bg-[#f5f5f1]/85 px-4 py-3 shadow-sm backdrop-blur-xl sm:px-5">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold tracking-tight"
          >
            {site.name}
          </Link>
          <div className="hidden items-center gap-7 md:flex">
            {nav.map((n) => (
              <Link
                key={n.label}
                href={n.href}
                className="text-sm text-black/55 hover:text-black"
              >
                {n.label}
              </Link>
            ))}
          </div>
          <div className="hidden items-center gap-4 md:flex">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-black/55 hover:text-black"
            >
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-black/55 hover:text-black"
            >
              LinkedIn <ArrowUpRight size={14} />
            </a>
          </div>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-black hover:text-white md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-2 rounded-3xl border border-black/10 bg-[#f5f5f1]/95 p-5 shadow-lg backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col">
                {nav.map((n) => (
                  <Link
                    key={n.label}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-black/10 py-4 text-lg last:border-0"
                  >
                    {n.label}
                  </Link>
                ))}
                <div className="flex gap-5 pt-4 text-sm text-black/55">
                  <a href={site.github}>GitHub</a>
                  <a href={site.linkedin}>LinkedIn</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
