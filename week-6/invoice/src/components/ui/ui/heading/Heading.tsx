import { ReactNode, ComponentPropsWithoutRef } from 'react'

interface HeaderProps {
    children: ReactNode
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

type HeadingProps = HeaderProps & ComponentPropsWithoutRef<'h1'>

export const Heading = ({
    children,
    variant = 'h1',
    className,
    ...props
}: HeadingProps) => {
    const Tag = variant // Dynamically set the heading tag

    return (
        <Tag className={`heading ${className}`} {...props}>
            {children}
        </Tag>
    )
}
