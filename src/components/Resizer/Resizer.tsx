import type { ResizerProps } from '@/types/types'
import React, { useState } from 'react'
import styles from './resizer.module.scss'

const Resizer: React.FC<ResizerProps> = ({
	onMouseDown,
	onMouseUp,
	dragging,
	split,
	disableHoverEffect
}) => {
	const [mouseOver, setMouseOver] = useState<boolean>(false)
	const [hasMouseExited, setHasMouseExited] = useState<boolean>(false)

	const handleMouseEnter = () => {
		if (!disableHoverEffect) {
			setMouseOver(true)
			setHasMouseExited(false)
		}
	}

	const handleMouseLeave = () => {
		if (!dragging && !disableHoverEffect) {
			setMouseOver(false)
			setHasMouseExited(true)
		}
	}

	return (
		<div
			className={`${styles.Resizer} ${mouseOver ? styles.hover : ''} ${split === 'vertical' ? styles.vertical : styles.horizontal} ${hasMouseExited ? styles.reverse : ''} ${disableHoverEffect ? styles.disableHoverEffect : ''}`}
			onMouseDown={onMouseDown}
			onMouseUp={onMouseUp}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		/>
	)
}

export default Resizer