import React from "react"
import styled from 'styled-components';
import * as Common from "../../styles/common-styles"


const StatMain = () => (
  <Common.Section>
    <Common.Content width="120" centered>
      <Common.Content width="90" shadow nomargin padding="2vw">
        <Common.TextTitle center uppercase thin wide padding="2vh 0">At the end of 2019 in wrocław lives...</Common.TextTitle>
        <ContentBar>
          <Common.TextTitle nomargin wide bold>599 158 <span>&nbsp;&nbsp;people</span></Common.TextTitle>
        </ContentBar>
        <div>
          <Common.TextTitle lowercase nomargin wide bold padding="1vh">322 145 <span>&nbsp;&nbsp;men</span></Common.TextTitle>
          <Common.TextTitle lowercase nomargin wide bold padding="1vh">274 515 <span>&nbsp;&nbsp;women</span></Common.TextTitle>
        </div>
        <Common.ContentChart></Common.ContentChart>
        </Common.Content>
    </Common.Content>
  </Common.Section>
)


const ContentBar = styled.div`
    width: 150vw;
    background-color: ${Common.colors.primary}
    color: ${Common.colors.white};
    transform: translateX(-20%);
    position: relative;
    padding: 3rem;
    margin: 3rem 0;
    box-shadow: 0 1px 1rem ${Common.colors.shadow};
    position: relative;
    z-index: 2;
    & *:first-child {
        text-align: center;
    }
    @media (max-width: 880px) {
      margin-bottom: 66%;
    }
    `


export default StatMain
