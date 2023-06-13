import { LectureList } from "@store/LectureList";
import { PassedLectures } from "@store/PassNonPass";
import styled from "styled-components";
import { Text, FlexBox, Spacing, TableHeader, List } from "@hc/ui";

export const ModalContent = ({lec}: {lec:string}) => {
    const modalLectureInfo = LectureList.filter(lecture => lecture.lecture === lec);
    const {category, lectureDetail, isPassed} = modalLectureInfo[0];
    if (isPassed === 'Passed'){
        
    }
    return(
        <>  
            <ModalHead>
                <Text typo ={'Body1_2'} color ={'black_500'}>{category}</Text>
                <FlexBox justify={'space-between'}>
                    <Text typo={'Headline1'}>{lec}</Text>
                    {isPassed === 'Passed' ? (
                        <Text typo={'Subtitle2'} color={'main_blue'}>이수</Text>
                        ):(<Text typo={'Subtitle2'} color ={'main_red'}>미이수</Text>)}
                </FlexBox>
            </ModalHead>
            <Spacing size ={30} />
            <ModalWrapper>
            {isPassed === 'Passed' ? (
                <TableHeader width={340} tablelabel={['강의명','학점']}/>
                
            ): (
                <TableHeader width={340} tablelabel={['강의명','개설학기','학점']}/>
                {lectureDetail &&
                    lectureDetail.map((lecDetail, idx) => {
                        console.log(lecDetail);
                    })}
            )}
            </ModalWrapper>
        </>
    )
}

const ModalHead = styled.div`
    display: flex;
    flex-direction: column;
`
const ModalWrapper= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`


