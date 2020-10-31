import React from "react"
import styled from 'styled-components';
import * as Common from "../../styles/common-styles"

const StatRegion = () => (
  <Common.Section>
    <Common.Content width="120" centered>
      <div>
      <Common.TextTitle center>THE MOST COMMON AGE IS...</Common.TextTitle>
      <Common.TextTitle center bold>42</Common.TextTitle>
      <Common.TextTitle center lowercase>...and this age is incresing year to year</Common.TextTitle>
      <Row>
        <Box>
          <div>TOP 5 REGIONS where the population has increased</div>
          <div>... people</div>
          <div>... people</div>
          <div>... people</div>
          <div>... people</div>
          <div>... people</div>
        </Box>
        <Box>
          <div>TOP 5 REGIONS where the population has decreased</div>
          <div>... people</div>
          <div>... people</div>
          <div>... people</div>
          <div>... people</div>
          <div>... people</div>
        </Box>
      </Row>
      </div>
    </Common.Content>
  </Common.Section>
)


const Row = styled.div`
    width: 100%;
    margin: 15vw 0 0;
    display: flex;
    @media (max-width: 600px) {
      flex-direction: column;
    }
    `

const Box = styled.div`
    width: 100%;
    background-color: #093858;
    color: #FFF;
    padding: 3vw;
    &:nth-child(2) {
        background-color: #FFF;
        color: #093858;
    }
    & *:not(:first-child) {
        padding: 2vw;
        letter-spacing: 0.15em;
    }
    `

export default StatRegion