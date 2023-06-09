'use client'
import styled from "styled-components";
import { Text, FlexBox } from "@hc/ui";
import Progress from "@hc/ui/src/components/Progress";
import { MyDashBoard, ProgressBarSection } from "@components/index";

export default function Page() {
  // const lottieTop = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: lottieJson1,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice"
  //   }
  // }
  // const lottieBottom = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: lottieJson2,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice"
  //   }
  // }
    return (
      <>
        <FlexBox justify='flex-start' align='flex-start' fullWidth={true}>
          <Text typo='Headline1'>홈</Text>
        </FlexBox>
        <ProgressBarSection/>
        <MyDashBoard/>
      </>
    )
  }
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
