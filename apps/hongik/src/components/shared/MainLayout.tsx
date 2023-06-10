import { media } from "@hc/ui";
import styled from "styled-components";
import { ReactNode } from "react";


const MainLayout = ({children}: {
    children: ReactNode,
    fullWidth?: boolean;
}) => {
    return (
    <Wrapper>
        {children}
    </Wrapper>)
}

export default MainLayout;

const Wrapper = styled.main`
  ${media.pc} {
    max-width: var(--main-width);
    margin: 0 auto;
    min-height: calc(var(--vh, 1vh) * 100);
    position:relative;
    background-color: #ffffff;
  }
`;