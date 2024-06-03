import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLayoutEffect, useRef, useState } from 'react';
import Pane from './Pane';
import Resizer from './Resizer';
import styles from './SplitPane.module.scss';
const SplitPane = ({ children, onResize, split = 'vertical', className, style, onDragStarted, onDragFinished, disableHoverEffect = false }) => {
    const [sizes, setSizes] = useState([50, 50]);
    const [dragging, setDragging] = useState(false);
    const containerRef = useRef(null);
    const onMouseDown = () => {
        setDragging(true);
        if (onDragStarted) {
            onDragStarted();
        }
    };
    const onMouseUp = () => {
        setDragging(false);
        if (onDragFinished) {
            onDragFinished(sizes[0]);
        }
    };
    const onMouseMove = (event) => {
        if (!dragging || !containerRef.current)
            return;
        const containerRect = containerRef.current.getBoundingClientRect();
        const containerSize = split === 'vertical' ? containerRect.width : containerRect.height;
        const cursorPosition = split === 'vertical' ? event.clientX : event.clientY;
        const startPosition = split === 'vertical' ? containerRect.left : containerRect.top;
        const sizePercentage = ((cursorPosition - startPosition) / containerSize) * 100;
        const newSizes = [sizePercentage, 100 - sizePercentage];
        setSizes(newSizes);
        if (onResize) {
            onResize(newSizes);
        }
    };
    useLayoutEffect(() => {
        if (dragging) {
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
        }
        else {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };
    }, [dragging]);
    return (_jsxs("div", { className: `${styles.root} ${styles[split]} ${className}`, ref: containerRef, style: style, children: [_jsx(Pane, { style: { flex: `${sizes[0]}%` }, children: children[0] }), _jsx(Resizer, { onMouseDown: onMouseDown, onMouseUp: onMouseUp, dragging: dragging, className: `${split === 'vertical' ? styles.vertical : styles.horizontal}`, disableHoverEffect: disableHoverEffect }), _jsx(Pane, { style: { flex: `${sizes[1]}%` }, children: children[1] })] }));
};
export default SplitPane;
