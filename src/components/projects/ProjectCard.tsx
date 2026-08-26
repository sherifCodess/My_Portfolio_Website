import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";

const accentStyles = {
  teal: "from-[#dbeeea] via-[#edf5f2] to-[#d9e9e4]",
  gold: "from-[#f1e4c9] via-[#f7f1e4] to-[#eadcc1]",
  blue: "from-[#dce8f1] via-[#eef4f8] to-[#d7e4ee]"
};

export default function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={featured ? "md:col-span-2" : ""}>
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className={`relative overflow-hidden rounded-[2rem] border border-black/10 bg-gradient-to-br ${accentStyles[project.accent]} p-5 shadow-[0_20px_60px_-35px_rgba(0,0,0,.35)] sm:p-8`}>
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/45 blur-3xl" />
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[1.15rem] border border-black/10 bg-[#181818] shadow-[0_30px_70px_-30px_rgba(0,0,0,.45)] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_40px_85px_-30px_rgba(0,0,0,.5)]">
            <div className="flex h-8 items-center gap-1.5 border-b border-white/10 bg-[#202020] px-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="ml-3 hidden h-4 flex-1 rounded bg-white/5 sm:block" />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden bg-white">
              <Image src={project.images[0].src} alt={project.images[0].alt} fill sizes="(max-width: 768px) 90vw, 1000px" className="object-cover object-top transition duration-700 group-hover:scale-[1.015]" priority={featured} />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-start justify-between gap-8">
          <div>
            <div className="mb-2 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-black/40">
              <span>{project.category}</span><span>·</span><span>{project.year}</span>
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">{project.title}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-black/55">{project.shortDescription}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => <span key={tech} className="rounded-full border border-black/10 bg-white/45 px-3 py-1 text-xs text-black/55">{tech}</span>)}
            </div>
          </div>
          <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/70 transition duration-300 group-hover:-translate-y-1 group-hover:bg-black group-hover:text-white">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </Link>
    </article>
  );
}
