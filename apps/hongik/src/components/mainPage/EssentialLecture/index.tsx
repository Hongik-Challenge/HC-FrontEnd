import styled from "styled-components";
import { theme, FlexBox, Text } from "@hc/ui";
export const EssentialLecture = () => {
    return (
        <Wrapper>
            <FlexBox justify='space-between' align='flex-start'>
                <FlexBox direction={'column'} justify='space-between' align='flex-start' style={{flex:'1 1 0', paddingLeft:'16px'}}>
                    <Text typo='Subtitle2' color='white'>2023-1</Text>
                    <Text typo='Subtitle2' color='white'>수강 필수강의</Text>
                </FlexBox>
            </FlexBox>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    margin: 17px 0px;
    padding: 19px 0px;
    width: 100%;
    background-color: ${theme.palette.black_200};
    border-radius: 10px;
    height: 174px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
`