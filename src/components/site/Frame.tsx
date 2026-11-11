type Props = { src: string; alt: string; className?: string; amount?: number; eager?: boolean; width?: number; height?: number };

/** Image with scroll parallax on the outer layer and hover zoom on the inner image. */
export function Frame({ src, alt, className = "", amount = 10, eager, width, height }: Props) {
  return (
    <div className={`frame ${className}`}>
      <div data-parallax={amount}>
        <img src={src} alt={alt} className="zoom" loading={eager ? "eager" : "lazy"} width={width} height={height} />
      </div>
    </div>
  );
}
