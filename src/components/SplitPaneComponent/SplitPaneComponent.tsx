import type { SplitPaneProps } from '@/types/types'
import React, { useLayoutEffect, useRef, useState } from 'react'
import Pane from '@/components/Pane/Pane'
import Resizer from '@/components/Resizer/Resizer'
import styles from './splitPaneComponent.module.scss'

const SplitPaneComponent: React.FC<SplitPaneProps> = ({
	                                                      children,
	                                                      onResize,
	                                                      split = 'vertical',
	                                                      className,
	                                                      style,
	                                                      onDragStarted,
	                                                      onDragFinished,
	                                                      disableHoverEffect = false
                                                      }) => {
	const [sizes, setSizes] = useState<number[]>([50, 50])
	const [dragging, setDragging] = useState<boolean>(false)
	const containerRef = useRef<HTMLDivElement>(null)
	
	const onMouseDown = () => {
		setDragging(true)
		if (onDragStarted) {
			onDragStarted()
		}
	}
	
	const onMouseUp = () => {
		setDragging(false)
		if (onDragFinished) {
			onDragFinished(sizes[0])
		}
	}
	
	const onMouseMove = (event: MouseEvent) => {
		if (!dragging || !containerRef.current) return
		
		const containerRect = containerRef.current.getBoundingClientRect()
		const containerSize =
			split === 'vertical' ? containerRect.width : containerRect.height
		const cursorPosition = split === 'vertical' ? event.clientX : event.clientY
		const startPosition =
			split === 'vertical' ? containerRect.left : containerRect.top
		const sizePercentage =
			((cursorPosition - startPosition) / containerSize) * 100
		
		const newSizes = [sizePercentage, 100 - sizePercentage]
		setSizes(newSizes)
		
		if (onResize) {
			onResize(newSizes)
		}
	}
	
	useLayoutEffect(() => {
		if (dragging) {
			window.addEventListener('mousemove', onMouseMove)
			window.addEventListener('mouseup', onMouseUp)
		} else {
			window.removeEventListener('mousemove', onMouseMove)
			window.removeEventListener('mouseup', onMouseUp)
		}
		
		return () => {
			window.removeEventListener('mousemove', onMouseMove)
			window.removeEventListener('mouseup', onMouseUp)
		}
	}, [dragging])
	
	return (
		<div
			className={`${styles.root} ${styles[split]} ${className || ''}`}
			ref={containerRef}
			style={style}
		>
			<Pane style={{ flex: `${sizes[0]}%` }}>{children[0]}</Pane>
			<Resizer
				onMouseDown={onMouseDown}
				onMouseUp={onMouseUp}
				dragging={dragging}
				split={split}
				disableHoverEffect={disableHoverEffect}
			/>
			<Pane style={{ flex: `${sizes[1]}%` }}>{children[1]}</Pane>
		</div>
	)
}

export default SplitPaneComponent