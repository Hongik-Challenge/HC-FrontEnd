import { ReactNode } from "react";
import styled from "styled-components";
import { FlexBox } from "../../layout";

export interface NavBarProps {
    label?: string;
    to?: string;
    leftElement?: ReactNode;
    rightElement?: ReactNode;
    customEvent?:() => void;
}

/**
 * @param label Navbar에 쓰여질 글자
 * @param to 클릭시 이동하는 페이지
 * @param leftElement 왼쪽에 들어갈 요소
 * @param rightElement 오른쪽에 들어갈 요소 
 */

export const NavBar = ({
    label, to, leftElement, rightElement, customEvent
}: NavBarProps) => {
    return (
        <Wrapper>
            <FlexBox direction="column" align ={'flex-start'} fullWidth={true}>
                {leftElement}
                안녕하슈
                {rightElement}
            </FlexBox>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 60px;
    box-shadow: 0px 2px 5px rgba(37, 37, 37, 0.05);
`