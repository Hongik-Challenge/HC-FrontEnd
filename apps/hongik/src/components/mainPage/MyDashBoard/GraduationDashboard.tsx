import { FlexBox, Text, theme } from "@hc/ui";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

export const GraduationDashBoard = () => {
    return (
        <Wrapper>
            <FlexBox justify={'flex-start'} gap={26}>
                <FlexBox gap ={14} direction="column" align="flex-start" justify={'flex-start'}>
                    <FlexBox direction="column" align="flex-start" justify={'flex-start'}>
                        <Text typo={'Subtitle2'}>전체</Text>
                        <Text typo ={'Subtitle2'}>졸업요건</Text>
                    </FlexBox>
                    <FlexBox gap ={10}>
                        <FlexBox direction="column" align="flex-start" justify={'flex-start'}>
                            <Text typo ={'Caption2_1'}>졸업인정</Text>
                            <Text typo ={'Subtitle1'} color ={'main_blue'}>72</Text>
                        </FlexBox>
                        <Diagonal/>
                        <FlexBox direction="column" align="flex-start" justify={'flex-start'}>
                            <Text typo ={'Caption2_1'}>전체</Text>
                            <Text typo ={'Subtitle1'}>132</Text>
                        </FlexBox>
                    </FlexBox>
                </FlexBox>
                <div style={{ width: 93, height: 93 }}>
                    <CircularProgressbar value={54} text={'54%'}
                        styles={buildStyles({
                            trailColor: `${theme.palette.black_900}`,
                            textColor: `${theme.palette.main_blue}`,
                            
                        })}/>
                </div>
            </FlexBox>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-width: 232px;
    height: 163px;
    border-radius: 10px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    flex: 2 1 0;
    padding: 14px 15px;
`

const Diagonal = styled.div`
    width: 1px;
    height: 35px;
    background-color: ${theme.palette.black_800};
    transform: rotate(20deg);
    margin-right: 5px;
`