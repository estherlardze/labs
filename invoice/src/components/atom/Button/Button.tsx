import { ReactNode, ButtonHTMLAttributes } from 'react';
import './Button.css';
import { useFormContext } from 'react-hook-form';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'default' | 'primary' | 'secondary' | 'danger' | 'transparent';
    radius?:
        | 'rounded'
        | 'rounded-sm'
        | 'rounded-md'
        | 'rounded-lg'
        | 'rounded-full';
    color?: 'send' | 'discard' | 'save';
    disabled?: boolean;
}

const Button = ({
    children,
    radius = 'rounded',
    variant = 'default',
    disabled = false,
    color,
    ...props
}: ButtonProps) => {
    const className = props.className || '';
    const buttonClass = `button ${color} ${variant} ${radius} ${className}`.trim();


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
