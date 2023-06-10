import styled from "styled-components";
import { theme } from "@hc/ui";
import { forwardRef } from "react";
export const RowCards = forwardRef((ref) => {
    return (
        <Wrapper>

        </Wrapper>
    )
})

const Wrapper= styled.div`
    height: 137px;
    min-width: 102px;
    border-radius: 5px;
    background-color: ${theme.palette.black_1100};
    padding: 11px 9px;
    position: absolute;
`