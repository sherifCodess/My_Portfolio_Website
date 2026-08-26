export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-black/55 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
