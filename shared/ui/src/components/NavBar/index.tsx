import { ReactNode, useState } from "react";
import styled from "styled-components";
import { Text } from "../Text";
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImageBox } from "../ImageBox";

export interface NavBarProps {
    label?: ReactNode;
    to?: string;
    leftElement?: ReactNode;
    rightElement?: ReactNode;
    setState?: () => void;

}

/**
 * @param label Navbar에 쓰여질 글자
 * @param to 클릭시 이동하는 페이지
 * @param leftElement 왼쪽에 들어갈 요소
 * @param rightElement 오른쪽에 들어갈 요소 
 */

export const NavBar = ({
    label, 
    to, 
    leftElement = <ImageBox size = {[27, 27]}imageUrl='/images/classpick_logo.png'/>, 
    rightElement = <GiHamburgerMenu color='#555555' size='1.5rem'/>, 
    setState
}: NavBarProps) => {
    return (
        <Wrapper>
            <ElemWrapper>
                {leftElement}
                {typeof(label) === 'string' ? (
                    <Text typo={'Headline2'}>{label}</Text>
                ): label}
                <div onClick ={setState} style ={{position: 'absolute', right: '2px', cursor:'pointer'}}> 
                    {rightElement}
                </div>
            </ElemWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display:flex;
    align-items: center;
    width: 100%;
    height: 60px;
    box-shadow: 0px 2px 10px rgba(37, 37, 37, 0.1);
`

const ElemWrapper = styled.div`
    margin: 13px 15px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    position: relative;
`