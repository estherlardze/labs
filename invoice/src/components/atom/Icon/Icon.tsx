import './Icon.css'
interface IconProps {
    src: string
    alt: string
    radius?:
        | 'rounded'
        | 'none'
        | 'rounded-sm'
        | 'rounded-md'
        | 'rounded-lg'
        | 'rounded-full'
    size?: 'sm' | 'md' | 'lg' | 'xs' 
    className?: string
}

const Icon = ({ src, alt, radius = 'rounded', size = 'sm' }: IconProps) => {
    
    return (
        <span className={`icon ${size}`}>
            <img src={src} alt={alt} className={radius} /> 
        </span>
    )
}

export default Icon
