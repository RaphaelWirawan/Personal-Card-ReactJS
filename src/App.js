import React from 'react';
import GlobalStyle from "./GlobalStyle";
import CardContainer from "./CardContainer";
import Title from "./Title";
import Description from "./Description";
import Socials from "./Socials"

export default function App() {


  return (
    <>
      <CardContainer>
        <Title />
        <Description />
        <Socials />
      </CardContainer>
      <GlobalStyle />
    </>
  )
}
