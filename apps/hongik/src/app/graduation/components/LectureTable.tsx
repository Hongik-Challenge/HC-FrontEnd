import { TableHeader } from "@hc/ui";
import styled from "styled-components";

export const LectureTable = () => {
    return (
        <TableContainer>
            <TableHeader tablelabel={['이수구분', '과목/분류', '학점', '수강여부']}/>
        </TableContainer>
    )
}

const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`