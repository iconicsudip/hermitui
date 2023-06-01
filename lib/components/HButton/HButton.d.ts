import React, { CSSProperties } from 'react';
import './Hbutton.css';
export type ComponentSize = 'default' | 'large' | 'small';
export type ButtonType = 'default' | 'warning' | 'primary' | 'secondary' | 'info' | 'error';
interface ButtonProps {
    label?: string;
    type?: ButtonType;
    style?: CSSProperties;
    size?: ComponentSize;
    className?: string;
}
export default function HButton(props: ButtonProps, ref: ButtonProps): React.JSX.Element;
export {};
//# sourceMappingURL=HButton.d.ts.map