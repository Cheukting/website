import { clsx } from "clsx";

export const ButtonLink = ({
  href,
  children,
  className,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
  className?: string;
}) => {
  const isExternal = href.startsWith("http");

  return (
    <a
      className={clsx(
        "font-bold text-lg px-4 py-4 bg-button rounded-[60px] inline-block leading-4",
        "hover:bg-button-hover not-prose",
        {
          // yes, this is inverted :'D
          "bg-primary text-white hover:bg-primary-hover": secondary,
          "text-text-inverted": !secondary,
          "text-text": secondary,
        },
        className
      )}
      href={href}
    >
      {children}

      {isExternal && (
        <span className="inline-block ml-1 font-system text-lg leading-4">
          ↗
        </span>
      )}
    </a>
  );
};
