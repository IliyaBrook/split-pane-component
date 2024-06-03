import { jsx as _jsx } from "react/jsx-runtime";
import styles from './SplitPane.module.scss';
const Pane = ({ children, className = '', style = {} }) => (_jsx("div", { className: `${styles.Pane} ${className}`, style: style, children: children }));
export default Pane;
