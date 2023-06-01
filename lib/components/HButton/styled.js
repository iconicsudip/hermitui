var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
var typeColors = {
    default: {
        regular: '#d8d8d8',
        hover: '#cecece',
        color: "#000000"
    },
    primary: {
        regular: "#00ba5c",
        color: "#ffffff",
        hover: '#009349',
    },
    secondary: {
        regular: "#4872f2",
        hover: '#2f5ade',
        color: "#ffffff"
    },
    warning: {
        color: "#000000",
        regular: "#ffd224",
        hover: '#ebc11d'
    },
    info: {
        color: "#ffffff",
        regular: "#21cfef",
        hover: '#18c0de'
    },
    error: {
        regular: "#ff4f28",
        hover: "#f2431d",
        color: '#ffffff'
    }
};
/* Real tag is assigned dynamically */
export var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding:0.5rem 1.5rem;\n    /* Add margin in case of loading or icon */\n    & > *:nth-child(1) {\n        margin-left: ", "px;\n    }\n    font-size: 15px;\n\n    border: none;\n    cursor: pointer;\n    background-color: ", ";\n    color: ", ";\n    ", "\n    border-radius: 0;\n    outline: none;\n\n    // &:focus {\n    //     box-shadow: 0 0 0 1px #fff, 0 0 0 2px ", ";\n    // }\n    &:hover {\n        background-color: ", ";\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding:0.5rem 1.5rem;\n    /* Add margin in case of loading or icon */\n    & > *:nth-child(1) {\n        margin-left: ", "px;\n    }\n    font-size: 15px;\n\n    border: none;\n    cursor: pointer;\n    background-color: ", ";\n    color: ", ";\n    ", "\n    border-radius: 0;\n    outline: none;\n\n    // &:focus {\n    //     box-shadow: 0 0 0 1px #fff, 0 0 0 2px ", ";\n    // }\n    &:hover {\n        background-color: ", ";\n    }\n"])), function (pr) { return pr.withText ? 7 : 0; }, function (pr) { return (pr === null || pr === void 0 ? void 0 : pr.innerType) ? typeColors[pr.innerType].regular : typeColors["default"].regular; }, function (pr) { return pr.innerType === 'default'
    ? typeColors['default'].color
    : '#fff'; }, function (pr) { return pr.disabled ? "\n        background-color: #a6a6a6;\n        color: #5e5e5e;\n        cursor: not-allowed;\n\n        &:hover {\n            background-color: #a6a6a6 !important;\n            color: #5e5e5e !important;\n        }\n    " : ''; }, function (pr) { return (pr === null || pr === void 0 ? void 0 : pr.innerType) ? typeColors[pr.innerType].regular : typeColors["default"].regular; }, function (pr) { return (pr === null || pr === void 0 ? void 0 : pr.innerType) ? typeColors[pr.innerType].hover : typeColors["default"].hover; });
export var StyledIcon = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    height: 20px;\n"], ["\n    height: 20px;\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled.js.map