import type { ElementType } from "react";

type Props = { text: string; as?: ElementType; className?: string };

/** Renders text as masked words so GSAP can lift each one into place. */
export function SplitText({ text, as: Tag = "h2", className }: Props) {
  return (
    <Tag data-split className={className} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="split-line" aria-hidden>
          <span className="split-word">{word}&nbsp;</span>
        </span>
      ))}
    </Tag>
  );
}
