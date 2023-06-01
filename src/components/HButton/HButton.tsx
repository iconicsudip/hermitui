import React, { CSSProperties,useEffect, useState } from 'react'
import ShortUniqueId from 'short-unique-id';
import { StyledButton } from './styled';
export type ComponentSize = 'default' | 'large' | 'small'
export type ButtonType = 'default' | 'warning' | 'primary' | 'secondary' | 'info' | 'error';
interface ButtonProps {
    label?: string,
    type?: ButtonType,
    style?:CSSProperties,
    size?: ComponentSize;
    className?:string
}

export default function HButton(props: ButtonProps,ref:ButtonProps) {
    console.log(ref)
    const {
        label,
        type = 'default',
        size = 'default',
        className,
        style,
    } = props;
    const uuid = new ShortUniqueId({length:6})
    const [unum,setUnum] = useState("");
    let backgroundColor = "#dfe3e8";
    let borderRadius = "8px"
    let boxShadow = "none"
    let color = "#212b36"
    let fontWeight = 700
    // const _style = props.style
    // if (props.type === "success") {
    //     backgroundColor = "#36b37e"
    //     color = "#ffffff"
    // }
    // if (props.type === "warning") {
    //     backgroundColor = "#ffd224"
    //     color = "#212b36"
    // }
    // if (props.type === "primary") {
    //     backgroundColor = "#00ba5c"
    //     color = "#ffffff"
    // }
    // if (props.type === "secondary") {
    //     backgroundColor = "#4872f2"
    //     color = "#ffffff"
    // }
    // if (props.type === "info") {
    //     backgroundColor = "#21cfef"
    //     color = "#ffffff"
    // }
    // if (props.type === "error") {
    //     backgroundColor = "#ff4f28"
    //     color = "#ffffff"
    // }
    // useEffect(()=>{
    //     setUnum(uuid())
    // },[])
    return (
        <StyledButton type={'button'} as={'button'} innerType={type}  className={className} >
            {props.label}
        </StyledButton>
        // <button className={`Hbutton Hbuttonstyle-${unum}`} 
        // style={{ textTransform: "none", backgroundColor: backgroundColor, borderRadius: borderRadius, boxShadow: boxShadow, color: color, fontWeight: fontWeight,..._style}} ><text className='position-relative zIndex-1'>{props.label}</text></button>
    )
}
