import { ButtonHTMLAttributes } from "react";
import { KeyOfColor, KeyOfTypo } from "../../../theme";
import styled from "styled-components";
import { theme } from "../../../theme";
export interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: KeyOfColor;
    typo?: KeyOfTypo
}

export const TextButton = ({
    children, 
    color ='black_500', 
    typo ='Caption3_2_1'}: TextButtonProps) => {
    return (
        <Wrapper typo ={typo} color ={color}>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.button<{color: KeyOfColor, typo: KeyOfTypo}>`
     ${({ typo, theme }) => theme.typo[typo]}
     color: ${({ theme, color }) => theme.palette[color]};
`