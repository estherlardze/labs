import Icon from '../icon/Icon.tsx'
import './Avatar.css'


interface AvatarProps {
    src: string
    alt: string
    size:'sm' | 'md' | 'lg';
}

const Avatar = ({ src, alt, size }: AvatarProps) => {
    return (
        <button className='avatar'>
            <Icon src={src} alt={alt} size={size} radius={'rounded-full'} />
        </button>
    )
}

export default Avatar
