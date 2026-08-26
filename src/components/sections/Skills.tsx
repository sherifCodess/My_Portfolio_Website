import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
const groups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Responsive UI"],
  },
  {
    title: "Product & UI",
    items: [
      "Figma to Code",
      "Reusable Components",
      "API Integration",
      "Navigation",
      "Accessibility",
    ],
  },
  {
    title: "Tools",
    items: ["Git & GitHub", "Vite", "Tailwind CSS", "Testing", "Vercel"],
  },
];
export default function Skills() {
  return (
    <section className="border-y border-black/10 bg-[#eeeee8] py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="A modern frontend toolkit, used with purpose."
          description="I focus on technologies and practices that help me turn product ideas and designs into polished, maintainable interfaces."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-[1.5rem] border border-black/10 bg-[#f7f7f2] p-7"
            >
              <p className="text-sm font-semibold">{g.title}</p>
              <ul className="mt-7 space-y-3">
                {g.items.map((x) => (
                  <li
                    key={x}
                    className="flex items-center justify-between border-b border-black/10 pb-3 text-sm text-black/60 last:border-0"
                  >
                    {x}
                    <span className="text-black/25">↗</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
