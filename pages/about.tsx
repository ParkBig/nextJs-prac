import Seo from "@/components/Seo";
import Head from "next/head";
import styled from "styled-components";

const About = () => {
  return (
    <>
      <Seo title="About"/>
      <Name>
        이곳은 About 입니다.
      </Name>
    </>
  )
}

export default About;

const Name = styled.h1`
  color: black;
`;