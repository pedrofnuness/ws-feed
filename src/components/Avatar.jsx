import styles from './Avatar.module.css'

export function Avatar({ src, alt, hasBorder = true }) {
  return (
    <img 
    src={src}
    alt={alt || "Avatar image"} 
    className={hasBorder ? styles.avatarWithBorder : styles.avatar}
  />
  )
}
