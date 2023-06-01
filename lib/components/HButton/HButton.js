import React, { useState } from 'react';
import ShortUniqueId from 'short-unique-id';
import { StyledButton } from './styled';
export default function HButton(props, ref) {
    console.log(ref);
    var label = props.label, _a = props.type, type = _a === void 0 ? 'default' : _a, _b = props.size, size = _b === void 0 ? 'default' : _b, className = props.className, style = props.style;
    var uuid = new ShortUniqueId({ length: 6 });
    var _c = useState(""), unum = _c[0], setUnum = _c[1];
    var backgroundColor = "#dfe3e8";
    var borderRadius = "8px";
    var boxShadow = "none";
    var color = "#212b36";
    var fontWeight = 700;
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
    return (React.createElement(StyledButton, { type: 'button', as: 'button', innerType: type, className: className }, props.label)
    // <button className={`Hbutton Hbuttonstyle-${unum}`} 
    // style={{ textTransform: "none", backgroundColor: backgroundColor, borderRadius: borderRadius, boxShadow: boxShadow, color: color, fontWeight: fontWeight,..._style}} ><text className='position-relative zIndex-1'>{props.label}</text></button>
    );
}
//# sourceMappingURL=HButton.js.map