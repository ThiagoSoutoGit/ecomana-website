import React from "react";

const Button = ({
  label,
  link,
  style,
  rel,
  showIcon = true
}: {
  label: string;
  link: string;
  style?: string;
  rel?: string;
  showIcon?: boolean;
}) => {
  const className = style;

  const bgHoverClass =
    className === "btn-primary"
      ? "bg-primary"
      : className === "btn-outline"
        ? "bg-white/50"
        : className === "btn-secondary"
          ? "bg-body"
          : "bg-body";

  const textHoverClass =
    className === "btn-primary"
      ? "group-hover:text-white"
      : className === "btn-outline"
        ? "group-hover:text-primary"
        : className === "btn-secondary"
          ? "group-hover:text-primary"
          : "group-hover:text-primary";

  return (
    <a
      href={link}
      target={link.startsWith("http") ? "_blank" : "_self"}
      rel={`noopener noreferrer ${rel ? (rel === "follow" ? "" : rel) : "nofollow"
        }`}
      className={`btn ${className} relative overflow-hidden inline-block group`}
    >
      <span className="absolute left-1/2 top-0 h-full w-0 -translate-x-1/2 transition-all duration-500 [transition-timing-function:cubic-bezier(1,0,1,1)] group-hover:w-[200%]">
        <span className={`block h-full w-full skew-x-[45deg] ${bgHoverClass}`} />
      </span>
      <span
        className={`relative z-10 transition-colors duration-500 inline ${textHoverClass}`}
      >
        {label}
        {showIcon && (
          <svg
            className="inline ml-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 28 28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        )}
      </span>
    </a>
  );
};

export default Button;
