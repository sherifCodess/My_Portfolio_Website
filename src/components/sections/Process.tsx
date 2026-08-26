import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
const steps = [
  [
    "01",
    "Understand",
    "I start by understanding the problem, users, requirements and desired outcome.",
  ],
  [
    "02",
    "Design",
    "I translate product requirements or Figma designs into a clear responsive interface.",
  ],
  [
    "03",
    "Build",
    "I build with reusable components, clean state management and modern frontend practices.",
  ],
  [
    "04",
    "Refine",
    "I test, polish responsive behavior and improve the details that make the interface feel complete.",
  ],
];
export default function Process() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="How I work"
          title="From product idea to polished interface."
          description="A practical process that keeps user experience and implementation quality connected."
        />
        <div className="mt-16 divide-y divide-black/10 border-y border-black/10">
          {steps.map(([n, t, d]) => (
            <div
              key={n}
              className="grid gap-5 py-8 md:grid-cols-[80px_220px_1fr] md:items-start"
            >
              <span className="text-sm font-semibold text-black/35">{n}</span>
              <h3 className="text-xl font-semibold">{t}</h3>
              <p className="max-w-2xl text-sm leading-6 text-black/55">{d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
