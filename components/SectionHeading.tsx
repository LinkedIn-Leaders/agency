import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  body?: string;
  align?: "center" | "left";
};

export default function SectionHeading({ eyebrow, title, body, align = "center" }: Props) {
  const center = align === "center";
  return (
    <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="h-section mt-5">{title}</h2>
      {body && <p className={`mt-5 text-lg leading-relaxed text-ink-soft ${center ? "mx-auto max-w-2xl" : ""}`}>{body}</p>}
    </Reveal>
  );
}
