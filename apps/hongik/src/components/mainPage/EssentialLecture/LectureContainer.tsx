import styled from "styled-components";
import { useRef, useState } from "react";
import { RowCards } from "./RowCards";
const LectureContainer = () => {
    const scrollRef = useRef();
    const [isDrag, setIsDrag] = useState(false);
    const [startX, setStartX] = useState();

    const onDragStart = (e: any) => {
        e.preventDefault();
        setIsDrag(true);
        setStartX(e.pageX + scrollRef.current.scrollLeft);
    }
    const onDragEnd = (e: any) => {
        setIsDrag(false);
    }
    const onDragMove = (e: any) => {
        if(isDrag){
            scrollRef.current.scrollLeft = startX - e.pageX;
        }
    }

    return (
        <Wrapper>
            <RowCards ref={scrollRef}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    gap: 9px;
    overflow-x: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`