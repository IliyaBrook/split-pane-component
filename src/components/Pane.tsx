import React from 'react'
import styles from '../index.module.scss'

interface PaneProps {
	children: React.ReactNode
	className?: string
	style?: React.CSSProperties
}

const Pane: React.FC<PaneProps> = ({
	children,
	className = '',
	style = {}
}) => (
	<div
		className={`${styles.Pane} ${className}`}
		style={style}
	>
		{children}
	</div>
)

export default Pane
