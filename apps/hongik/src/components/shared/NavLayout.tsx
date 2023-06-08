import { NavBar, media } from "@hc/ui";
import styled from "styled-components";
import Image from "next/image";


export const NavLayout = () => {
    return (
        <NavWrapper>
            <NavBar 
                leftElement = {<Image src={'/images/classpick_logo.png'}alt={'로고이미지'} width={27} height={27}/>}
                label ={<Image src={'/images/classpick_header.png'} width={100} height={20} alt ={'헤더'}/>}
            />
        </NavWrapper>
    )
}
const NavWrapper = styled.div`
    display: flex;
    margin-bottom: 20px;
    width: 100%;
    position:fixed;
    top:0;
    ${media.pc} {
        width: var(--main-width);
  }
`