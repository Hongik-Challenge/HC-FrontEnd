import { MdClear } from 'react-icons/md';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Spacing, Text } from "@hc/ui";
import Link from 'next/link';
import { css } from 'styled-components';


export interface MenuOptionProps {
    openMenu: boolean;
    onClickEvent : () => void;
}

export const SideMenuLayout = ({
    openMenu,
    onClickEvent
}: MenuOptionProps) => {
    return (
        <Container opencheck={openMenu}>
            <Wrapper>
                <MdClear size={'1.5rem'} onClick ={onClickEvent} style ={{position: 'absolute', right: '15px', cursor:'pointer'}}/>
                <Spacing size ={90}/>
                <ListWrapper>
                    <ListElement>
                        <Text typo = {'Headline1'}>
                            <Link href="/login"></Link>
                        </Text>
                    </ListElement>
                </ListWrapper>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div<{ opencheck : boolean}>`
    width: 390px;
    z-index: 1009!important;
    right: 0px;
    height:100vh;
    background-color: #fff;
    transition: all 0.1s ease-in-out;
    ${({opencheck}) => 
        opencheck ?
        css`
            transform: translateX(0px);
        `:
        css`
            
            transform: translateX(390px);
        `
    }    
`

const Wrapper = styled.div`
    display: flex;

    flex-direction: column;
    transition: all 0.1s ease-in-out;
    overflow: hidden;
    width: 100%;
    padding-top: 26px;
`

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 51px;
`

const ListElement = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    gap: 13px;
    padding: 0px 31px;
    cursor: pointer;
`