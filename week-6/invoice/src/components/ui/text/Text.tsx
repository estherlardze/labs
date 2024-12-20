import { ReactNode } from "react";
import "./Text.css";

interface TextProps {
  children: ReactNode;
  variant?: "caption" | "description";
  className?: string;
}

export const Text = ({
  children,
  variant = "description",
  className,
}: TextProps) => {
  return <p className={`text ${variant} ${className}`}>{children}</p>;
};
