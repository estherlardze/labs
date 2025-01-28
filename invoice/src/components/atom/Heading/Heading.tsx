import { ReactNode, ComponentPropsWithoutRef } from 'react'
import './Heading.css'


interface HeaderProps {
    children: ReactNode
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

type HeadingProps = HeaderProps & ComponentPropsWithoutRef<'h1'>

export const Heading = ({ children, variant = 'h1',className, ...props}: HeadingProps) => {
    const Tag = variant 

    return (
        <Tag className={`heading ${className} ${variant}`} {...props}>
            {children} 
        </Tag>
    )
}
