import { ReactNode } from "react";

type HeadingProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function Heading({
  title,
  subtitle,
  center = false,
}: HeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className="text-5xl font-bold">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-5 max-w-3xl text-xl leading-8 text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}