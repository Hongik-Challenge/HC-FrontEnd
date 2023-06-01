import { media } from "@hc/ui";
import styled from "styled-components";
import { ReactNode } from "react";

const MainLayout = ({children}: {
    children: ReactNode,
    fullWidth?: boolean;
}) => {
    return <Wrapper>{children}</Wrapper>
}

export default MainLayout;

const Wrapper = styled.main`
  padding-top: 50px;
  ${media.pc} {
    padding-top: 50px;
    max-width: var(--main-width);
    margin: 0 auto;
    //min-height: calc(var(--vh, 1vh) * 100);
    right: -10px;
    position:relative;
    background-color: #ffffff;
  }
`;