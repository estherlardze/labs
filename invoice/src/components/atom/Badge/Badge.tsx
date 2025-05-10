import { ReactNode, HTMLAttributes } from 'react';
import { GoDotFill } from "react-icons/go";
import './Badge.css';


interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "primary" | "secondary";
  color?: string;
}

const Badge = ({ children, variant = "default", color, ...props }: BadgeProps & HTMLAttributes<HTMLDivElement>) => {
  const className = props.className || "";
  const badgeClass = `badge ${variant} ${className} ${color}`.trim();

  return (
    <div {...props} className={badgeClass}>
      <GoDotFill />
        {children}
    </div>
  );
};

export default Badge;