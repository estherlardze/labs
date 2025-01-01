import { ReactNode } from "react";
import "./Text.css";

interface TextProps {
  children: ReactNode;
  variant?: "caption" | "description" | 'p' | "span" 
  className?: string;
}

export const Text = ({
  children,
  variant = "description",
  className,
}: TextProps) => {
  

  return <p className={`text ${variant} ${className}`}>{children}</p>;
};
