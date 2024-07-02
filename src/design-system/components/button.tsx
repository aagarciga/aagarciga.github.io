
import { ButtonHTMLAttributes, HTMLAttributes } from "react";
import styles from "./button.module.css"

interface Props {
  label: string;
  primary?: boolean;
  secondary?: boolean;
  className?: HTMLAttributes<HTMLDivElement>['className']
  size?: "xsmall" | "small" | "medium" | "large";
  Icon?: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & { title?: string, titleId?: string } & React.RefAttributes<SVGSVGElement>>;
}

export default function Button({
  primary = false,
  secondary = false,
  size = "small",
  label,
  Icon,
  className,
  ...props }: Props & ButtonHTMLAttributes<HTMLButtonElement>) {
  const isPrimary = primary ? styles.primary : styles.default;
  const isSecondary = secondary ? styles.secondary : styles.default;

  const iconSize = {
    xsmall: 11,
    small: 13,
    medium: 13,
    large: 16,
  }

  return (
    <button
      type="button"
      className={[styles.button, isPrimary, isSecondary, styles[size], className].join(" ")}
      {...props}
    >
      {Icon && <Icon width={iconSize[size]} />}
      {label}
    </button>
  );
}