import { ButtonHTMLAttributes, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

export interface ToggleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    toggle: boolean;
    btnLabel: [string, string];
    onClickToggle: () => void;
}
/**
 * @param toggle 현재 toggle의 상태
 * @param btnLabel toggleBtn에 사용할 label [왼쪽, 오른쪽]
 * @param onClickToggle toggle을 클릭했을 때의 상황
 */

export const ToggleButton = ({
    toggle = true,
    btnLabel = ['3학년', '전체'],
    onClickToggle,
    ...props
}: ToggleButtonProps) => {
    const [selected, setClick] = useState(toggle);
   return (
    <Wrapper>
        <FirstBtn selected={selected}>
            {btnLabel[0]}
        </FirstBtn>
        <SecondBtn selected={selected}>
            {btnLabel[1]}
        </SecondBtn>
    </Wrapper>
   )
}

const Wrapper = styled.div`
    width: '100px';
    height: '30px';
    display: flex;
    flex-direction: row;
    align-items: center;
`
const FirstBtn = styled.button<{selected: boolean}>`
    ${({ theme }) => theme.typo.Caption3_2};
    background-color: ${({selected}) => selected ? '#ccc' : '#000'};
    padding: '5px 10px';
    width: 50px;
    height: 30px;
    border-radius: 8px 0px 0px 8px;
    border: 1px solid ${({theme}) => theme.palette.black_500};
`
const SecondBtn = styled.button<{selected: boolean}>`
    ${({ theme }) => theme.typo.Caption3_2};
    padding: '5px 10px';
    width: 50px;
    height: 30px;
    border-radius: 0px 8px 8px 0px;
    border: 1px solid ${({theme}) => theme.palette.black_500};
`