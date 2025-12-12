interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <h2 className="text-4xl font-bold text-primary mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-secondary">{subtitle}</p>}
    </div>
  );
}