import { useState, forwardRef } from "react"
import styled from "styled-components";
import { MdClose } from 'react-icons/md';
import { css } from "styled-components";
import { ReactNode } from "react";

import { useRef } from "react";

export interface DefaultModalProps {
    open: boolean;
    children: ReactNode;
}

export const DefaultModal = forwardRef<HTMLDivElement, DefaultModalProps>(({
    children,
    open
}: DefaultModalProps) => {
    const [isOpen, setOpen] = useState(open);
    const modalref = useRef(null);
    const closeModal = () => {
        setOpen(!open);
    }
    return (
            <Background onClick ={closeModal} open={isOpen}>
                <ModalWrapper ref={modalref} className='modal'>
                    <MdClose onClick ={closeModal}/>
                    {children}
                </ModalWrapper>
            </Background>
    )
})
const Background = styled.div<{open: boolean}>`
    width: 100%;
    box-sizing: border-box;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index:1;
    background-color:rgba(0, 0, 0, 0.4);
    ${({open}) => (!open && css`
        display: none;
    `)}
`

const ModalWrapper = styled.div`
    width: 360px;
    min-height: 150px;
    padding: 27px 21px;
    background-color : #fff;
    z-index: 2;
    @keyframes fadeIn {
        from {
        opacity: 0;
        transform: scale(0.5);
        }
        to {
        opacity: 1;
        transform: scale(1);
        }
    }
`