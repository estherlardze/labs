import { ReactNode, HTMLAttributes } from 'react';
import { GoDotFill } from "react-icons/go";
import './Badge.css';


interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "primary" | "secondary";
  color?: "paid" | "pending" | "draft";
}

const Badge = ({ children, variant = "default", color= "paid", ...props }: BadgeProps & HTMLAttributes<HTMLDivElement>) => {
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