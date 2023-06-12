import { NavBar, media } from "@hc/ui";
import styled from "styled-components";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { SideMenuLayout  } from "./SideMenuLayout";

export const NavLayout = () => {
    const [open, setOpen] = useState(false);
    // const onClickToggle = useCallback(() => {
    //     setOpen(!open);
    //   },[open])
    const onClickToggle = () => {
        setOpen(open => !open)
    }

    return (
        <SideContainer>
            <NavCotainer>
                <NavBar 
                    leftElement = {<Image src={'/images/classpick_logo.png'}alt={'로고이미지'} width={27} height={27}/>}
                    label ={<Image src={'/images/classpick_header.png'} width={100} height={20} alt ={'헤더'}/>}
                    onClickEvent={onClickToggle}
                />
            </NavCotainer>
            <SideMenuLayout openMenu={open} onClickEvent={() => onClickToggle()}/>
        </SideContainer>
    )
}

const NavCotainer = styled.div`
    position:fixed;
    top:0;
    width: 100%;
`
const SideContainer = styled.div`
    top:0;
    max-width: 100vw;
    box-sizing:border-box;
    overflow:hidden;
    position: absolute;
`

const NavWrapper = styled.div`
    margin-bottom: 20px;
    width: 100%;
    background:'#fff';
    top:0;
    z-index:100;
    ${media.pc} {
        width: var(--main-width);
  }
`