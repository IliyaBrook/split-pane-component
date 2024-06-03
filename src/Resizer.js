import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import styles from './SplitPane.module.scss';
const Resizer = ({ onMouseDown, onMouseUp, dragging, className, disableHoverEffect }) => {
    const [mouseOver, setMouseOver] = useState(false);
    const [hasMouseExited, setHasMouseExited] = useState(false);
    const handleMouseEnter = () => {
        if (!disableHoverEffect) {
            setMouseOver(true);
            setHasMouseExited(false);
        }
    };
    const handleMouseLeave = () => {
        if (!dragging && !disableHoverEffect) {
            setMouseOver(false);
            setHasMouseExited(true);
        }
    };
    return (_jsx("div", { className: `${styles.Resizer} ${mouseOver ? styles.hover : ''}  ${className || ''} ${hasMouseExited ? styles.reverse : ''} ${disableHoverEffect ? styles.disableHoverEffect : ''}`, onMouseDown: onMouseDown, onMouseUp: onMouseUp, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave }));
};
export default Resizer;
