import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../projects/ProjectCard";
import { featuredProjects } from "@/data/projects";
export default function FeaturedWork() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Projects built to solve real problems."
          description="A selection of frontend applications and digital products I have built and contributed to."
        />
        <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-x-8 md:gap-y-20">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} featured={i === 0} />
          ))}
        </div>
      </Container>
    </section>
  );
}
