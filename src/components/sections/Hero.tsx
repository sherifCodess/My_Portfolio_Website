import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Container from "../ui/Container";
import Button from "../ui/Button";

const stack = ["React", "Next.js", "TypeScript", "JavaScript"];

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pb-20 pt-32 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[8%] top-[16%] h-72 w-72 rounded-full bg-[#dcebe5] blur-3xl" />
        <div className="absolute right-[5%] top-[30%] h-80 w-80 rounded-full bg-[#efe3c9] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(17,17,17,1)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,1)_1px,transparent_1px)] [background-size:42px_42px]" />
      </div>
      <Container>
        <div className="grid items-end gap-14 lg:grid-cols-[minmax(0,1fr)_310px] lg:gap-20">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-black/50 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#0f7567]" /> Available for frontend opportunities
            </div>
            <h1 className="max-w-5xl text-[3.25rem] font-semibold leading-[0.91] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[6.7rem]">
              I build digital experiences that feel <span className="text-black/35">simple, intentional, and useful.</span>
            </h1>
            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
              <Button href="#work">View selected work <ArrowUpRight size={16} className="ml-2" /></Button>
              <Link href="#contact" className="group inline-flex items-center gap-2 text-sm font-medium text-black/55 hover:text-black">Let&apos;s work together <ArrowUpRight size={15} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-black/10 bg-white/55 p-6 shadow-[0_30px_70px_-45px_rgba(0,0,0,.4)] backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/40">Frontend focus</p>
              <Sparkles size={16} className="text-black/35" />
            </div>
            <p className="mt-5 text-base leading-7 text-black/60">I turn product ideas and designs into responsive, maintainable web experiences with modern frontend tools.</p>
            <div className="mt-7 border-t border-black/10 pt-5">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-black/40">Core stack</p>
              <div className="flex flex-wrap gap-2">{stack.map((item) => <span key={item} className="rounded-full border border-black/10 bg-white/60 px-3 py-1.5 text-xs font-medium">{item}</span>)}</div>
            </div>
            <Link href="#work" className="mt-10 hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-black/40 lg:flex">Scroll to explore <ArrowDown size={14} /></Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
