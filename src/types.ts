import React, { type CSSProperties, type ReactNode } from 'react'

export type onResizeSplitPane = (newSize: number[]) => void

export type SplitPaneSplitType = 'vertical' | 'horizontal'

export type SplitPaneProps = {
	children: ReactNode[]
	className?: string
	split?: SplitPaneSplitType
	onDragStarted?: () => void
	onDragFinished?: (newSize: number) => void
	style?: CSSProperties
	onResize?: onResizeSplitPane
	disableHoverEffect?: boolean
}

export interface ResizerProps {
	onMouseDown: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
	onMouseUp: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
	dragging: boolean
	className?: string
	disableHoverEffect?: boolean
}
