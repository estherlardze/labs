import {
    ReactNode,
    HTMLAttributes,
    InputHTMLAttributes,
    FormHTMLAttributes,
    forwardRef,
} from 'react'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode
}

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    type: string
}

interface FormLabelProps extends HTMLAttributes<HTMLLabelElement> {
    children: ReactNode
    htmlFor: string
}

interface FormGroupProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

interface FormErrorProps extends HTMLAttributes<HTMLParagraphElement> {
    children: ReactNode
}

export const Form = ({ children, ...props }: FormProps) => {
    return <form {...props}>{children}</form>
}

// export const FormInput = ({ name, type, ...props }: FormInputProps) => {
//     return <input name={name} type={type} {...props} />
// }

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
    ({ name, type = 'text', ...props }, ref) => {
        return <input ref={ref} name={name} type={type} {...props} />
    }
)

export const FormLabel = ({ children, htmlFor, ...props }: FormLabelProps) => {
    return (
        <label htmlFor={htmlFor} {...props}>
            {children}
        </label>
    )
}

export const FormGroup = ({ children, ...props }: FormGroupProps) => {
    return <div {...props}>{children}</div>
}

export const FormError = ({ children, ...props }: FormErrorProps) => {
    return <p {...props}>{children}</p>
}