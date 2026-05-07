import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './Blog.module.css'

interface LightboxProps {
  src: string | null
  onClose: () => void
}

export default function Lightbox({ src, onClose }: LightboxProps) {
  useEffect(() => {
    if (!src) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [src, onClose])

  if (!src) return null

  return createPortal(
    <div
      className={styles.lightboxOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <img className={styles.lightboxImage} src={src} alt="" />
    </div>,
    document.body,
  )
}
