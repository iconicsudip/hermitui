import styled from "styled-components";
import { ButtonType } from "./HButton";

type StateColors = {
    color :string,
    regular: string;
    hover: string;
}

const typeColors: {[key in ButtonType]: StateColors} = {
    default: {
        regular: '#d8d8d8',
        hover: '#cecece',
        color:"#000000"
    },
    primary: {
        regular : "#00ba5c",
        color : "#ffffff",
        hover: '#009349',
    },
    secondary: {
        regular: "#4872f2",
        hover: '#2f5ade',
        color : "#ffffff"
    },
    warning:{
        color : "#000000",
        regular:"#ffd224",
        hover: '#ebc11d'
    },
    info:{
        color : "#ffffff",
        regular:"#21cfef",
        hover:'#18c0de'
    },
    error:{
        regular:"#ff4f28",
        hover:"#f2431d",
        color:'#ffffff'
    }
};

interface StyledButtonProps {
    innerType?: ButtonType;
    withText?: boolean;
}

/* Real tag is assigned dynamically */
export const StyledButton = styled.button<StyledButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding:0.5rem 1.5rem;
    /* Add margin in case of loading or icon */
    & > *:nth-child(1) {
        margin-left: ${pr => pr.withText ? 7 : 0}px;
    }
    font-size: 15px;

    border: none;
    cursor: pointer;
    background-color: ${ (pr) => pr?.innerType ? typeColors[pr.innerType].regular : typeColors["default"].regular };
    color: ${ pr => pr.innerType === 'default' 
        ? typeColors['default'].color
        : '#fff'
    };
    ${ pr => pr.disabled ? `
        background-color: #a6a6a6;
        color: #5e5e5e;
        cursor: not-allowed;

        &:hover {
            background-color: #a6a6a6 !important;
            color: #5e5e5e !important;
        }
    ` : ''}
    border-radius: 0;
    outline: none;

    // &:focus {
    //     box-shadow: 0 0 0 1px #fff, 0 0 0 2px ${ (pr) =>pr?.innerType ? typeColors[pr.innerType].regular : typeColors["default"].regular };
    // }
    &:hover {
        background-color: ${ (pr) => pr?.innerType ? typeColors[pr.innerType].hover : typeColors["default"].hover };
    }
`;

export const StyledIcon = styled.div`
    height: 20px;
`;