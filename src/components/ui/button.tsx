
import classes from "./buton.module.css"

interface ButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  caption: string;
  onClick?: () => void;
}

export default function Button({
  primary = false,
  size = "medium",
  caption,
  ...props
}: ButtonProps
) {
  const mode = primary ? "primary" : "default";
  return (
    <button
      type="button"
      className={[classes.button, classes[mode], classes[size]].join(' ')}
    >{caption}</button>
  )
}