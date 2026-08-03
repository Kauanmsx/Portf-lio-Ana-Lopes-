import { ArrowRight, CalendarDays } from "lucide-react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type SharedProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: "calendar" | "arrow" | "none";
  className?: string;
};

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  ghost: "btn btn-ghost",
};

function Icon({ icon }: { icon: SharedProps["icon"] }) {
  if (icon === "none") {
    return null;
  }

  const IconComponent = icon === "arrow" ? ArrowRight : CalendarDays;
  return <IconComponent aria-hidden="true" size={17} strokeWidth={1.8} />;
}

export function Button({
  children,
  variant = "primary",
  icon = "calendar",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${variantClasses[variant]} ${className}`.trim();

  if ("href" in props && props.href) {
    return (
      <a className={classes} {...props}>
        <Icon icon={icon} />
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      <Icon icon={icon} />
      <span>{children}</span>
    </button>
  );
}
