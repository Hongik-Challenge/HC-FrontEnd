'use client'
import styled from "styled-components";
import { Text, FlexBox } from "@hc/ui";
import Lottie from "react-lottie";
import lottieJson1 from "../../public/main_top.json";
import lottieJson2 from "../../public/main_bottom.json";
import Progress from "@hc/ui/src/components/Progress";

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
        <FlexBox>
          <Text typo='Headline1'>홈</Text>
        </FlexBox>
        <Progress step={4} currentStep={2} />
      </>
    )
  }
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
