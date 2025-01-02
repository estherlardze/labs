import { ReactNode } from "react";
import "./Text.css";

interface TextProps {
  children: ReactNode;
  variant?: "caption" | "description" | 'p' | "span" | "div"
  className?: string;
}

export const Text = ({
  children,
  variant = "description",
  className,
}: TextProps) => {
  

  return <div className={`text ${variant} ${className}`}>{children}</div>;
};
