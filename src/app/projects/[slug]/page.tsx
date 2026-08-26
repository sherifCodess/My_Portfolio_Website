import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="pt-32">
      <Container>
        <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-black/50 transition hover:text-black"><ArrowLeft size={15} /> Back to work</Link>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_300px]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/40">{project.category} · {project.year}</p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.055em] sm:text-7xl">{project.title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-black/55">{project.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white">Live project <ArrowUpRight size={16} /></a>
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-5 py-3 text-sm font-medium">GitHub <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <aside className="h-fit rounded-3xl border border-black/10 bg-white/50 p-6 shadow-sm backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/40">Role</p><p className="mt-2 font-medium">{project.role}</p>
            {project.team && <><p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-black/40">Team</p><p className="mt-2 font-medium">{project.team}</p></>}
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-black/40">Stack</p>
            <div className="mt-3 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs">{tech}</span>)}</div>
          </aside>
        </div>

        <div className="mt-16 grid gap-6">
          {project.images.map((image, index) => (
            <figure key={image.src} className={`overflow-hidden rounded-[2rem] border border-black/10 bg-[#1b1b1b] p-4 shadow-[0_35px_80px_-45px_rgba(0,0,0,.5)] ${index === 1 ? "md:ml-[8%]" : ""}`}>
              <div className="mb-3 flex items-center gap-1.5 px-1"><span className="h-2.5 w-2.5 rounded-full bg-white/20" /><span className="h-2.5 w-2.5 rounded-full bg-white/20" /><span className="h-2.5 w-2.5 rounded-full bg-white/20" /><span className="ml-2 text-[10px] uppercase tracking-[0.16em] text-white/35">{image.label}</span></div>
              <div className="relative overflow-hidden rounded-xl bg-white">
                <Image src={image.src} alt={image.alt} width={1600} height={900} className="h-auto w-full object-cover object-top" sizes="(max-width: 1024px) 100vw, 90vw" />
              </div>
            </figure>
          ))}
        </div>

        <div className="grid gap-16 border-t border-black/10 py-16 mt-20 lg:grid-cols-2">
          <section><p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/40">The problem</p><p className="mt-5 text-xl leading-8 text-black/70">{project.problem}</p></section>
          <section><p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/40">The solution</p><p className="mt-5 text-xl leading-8 text-black/70">{project.solution}</p></section>
        </div>

        <div className="grid gap-16 border-t border-black/10 py-16 lg:grid-cols-2">
          <section><p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/40">My contribution</p><ul className="mt-6 space-y-4">{project.contribution.map((item) => <li key={item} className="border-b border-black/10 pb-4 text-base text-black/65">{item}</li>)}</ul></section>
          <section><p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/40">Key features</p><ul className="mt-6 space-y-4">{project.features.map((item) => <li key={item} className="border-b border-black/10 pb-4 text-base text-black/65">{item}</li>)}</ul></section>
        </div>
      </Container>
    </main>
  );
}
