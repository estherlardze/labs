import { ReactNode, ButtonHTMLAttributes } from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'default' | 'primary' | 'secondary' | 'danger' | 'transparent';
    radius?:
        | 'rounded'
        | 'rounded-sm'
        | 'rounded-md'
        | 'rounded-lg'
        | 'rounded-full';
    disabled?: boolean;
}

const Button = ({
    children,
    radius = 'rounded',
    variant = 'default',
    disabled = false,
    ...props
}: ButtonProps) => {
    const className = props.className || '';
    const buttonClass = `button ${variant} ${radius} ${className}`.trim();

    return (
        <button
            {...props}
            className={buttonClass}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
