import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "white" | "dark" | "outline-white";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  onClick,
  ariaLabel,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors duration-150 rounded-[2px] tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2",
    md: "text-sm px-5 py-2.5",
    lg: "text-base px-7 py-3.5",
  };

  const variantStyles = {
    primary:
      "bg-ocean text-white hover:bg-ocean-hover border border-ocean shadow-sm",
    secondary:
      "bg-transparent text-navy hover:bg-surface-light border border-steel text-steel-dark hover:border-navy",
    white:
      "bg-white text-navy hover:bg-surface-light border border-white font-semibold",
    dark:
      "bg-navy text-white hover:bg-navy-800 border border-navy shadow-sm",
    "outline-white":
      "bg-transparent text-white border border-white/80 hover:bg-white/10",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
