'use client'
import styled from "styled-components";
import { theme } from "@hc/ui";
import Lottie from "react-lottie";
import lottieJson1 from "../../public/main_top.json";
import lottieJson2 from "../../public/main_bottom.json";

export default function Page() {
  const lottieTop = {
    loop: true,
    autoplay: true,
    animationData: lottieJson1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
  const lottieBottom = {
    loop: true,
    autoplay: true,
    animationData: lottieJson2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
    return (
    
    <Wrapper>
      <Lottie options={lottieTop}/>
      <Lottie options ={lottieBottom}/>
    </Wrapper>
    )
  }
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
