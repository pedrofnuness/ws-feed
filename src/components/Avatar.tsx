import styles from './Avatar.module.css';

type AvatarProps = {
  src: string;
  alt: string;
  hasBorder?: boolean;
}

export function Avatar({ src, alt, hasBorder = true }: AvatarProps) {
  return (
    <img 
    src={src}
    alt={alt || "Avatar image"} 
    className={hasBorder ? styles.avatarWithBorder : styles.avatar}
  />
  )
}
