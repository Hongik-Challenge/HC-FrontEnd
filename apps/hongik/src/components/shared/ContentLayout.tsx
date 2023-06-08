import { media } from "@hc/ui";
import styled from "styled-components";
import { ReactNode } from "react";

const ContentLayout = ({children}: {
    children: ReactNode,
    fullWidth?: boolean;
}) => {
    return (
    <Wrapper>
        {children}
    </Wrapper>)
}

export default ContentLayout;

const Wrapper = styled.main`
  padding: 0px 20px;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.pc} {
    max-width: var(--main-width);
    margin: 0 auto;
    right: -10px;
    position:relative;
  }
`;