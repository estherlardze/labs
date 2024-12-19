import { ReactNode, ButtonHTMLAttributes } from 'react'
import './button.styles.css'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    variant?: 'default' | 'primary' | 'secondary' | 'danger'
    radius?:
        | 'rounded'
        | 'rounded-sm'
        | 'rounded-md'
        | 'rounded-lg'
        | 'rounded-full'
}
const Button = ({
    children,
    radius = 'rounded',
    variant = 'default',
    ...props
}: ButtonProps) => {
    const className = props.className || ''
    const buttonClass = `button ${variant} ${radius} ${className}`.trim()

    return (
        <button {...props} className={buttonClass}>
            {children}
        </button>
    )
}

export default Button
