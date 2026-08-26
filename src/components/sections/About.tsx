import Container from "../ui/Container";
import Button from "../ui/Button";
export default function About() {
  return (
    <section id="about" className="bg-[#111] py-24 text-white sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              About
            </p>
            <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              I care about the space where good product thinking meets good
              frontend engineering.
            </h2>
          </div>
          <div className="lg:pt-10">
            <p className="text-base leading-7 text-white/60">
              I am a frontend developer focused on building modern web
              applications with React, Next.js and TypeScript. I enjoy turning
              designs and product requirements into interfaces that are clear,
              responsive and useful.
            </p>
            <p className="mt-5 text-base leading-7 text-white/60">
              My experience includes independent builds and collaboration on
              products such as SafeNest and ApplyNow.
            </p>
            <div className="mt-8">
              <Button href="#contact" variant="secondary">
                Start a conversation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
