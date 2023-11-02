import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ 
  hasBorder = true, 
  alt= "Avatar Image", 
  ...props 
}: AvatarProps) {
  return (
    <img 
      alt={alt} 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  )
}
