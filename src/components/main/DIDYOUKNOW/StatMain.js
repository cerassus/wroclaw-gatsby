import React from "react"
import styled from "styled-components"
import * as Common from "../../styles/common-styles"
import Chart from "../../charts/Chart"

const StatMain = ({ stat, decade }) => {
  const all = stat
    .map(x => x.NUMBERofRESIDENTS)
    .reduce((x, y) => x + y)
    .toLocaleString()
  const men = stat
    .map(x => x.SEX === "Man" && x.NUMBERofRESIDENTS)
    .reduce((x, y) => x + y)
    .toLocaleString()
  const women = stat
    .map(x => x.SEX === "Woman" && x.NUMBERofRESIDENTS)
    .reduce((x, y) => x + y)
    .toLocaleString()
  const chart_data = Object.entries(decade[0])
    .map(x => (x = x[1].map(z => (z = Number(z.count)))))
    .map(i => i.reduce((a, b) => a + b))
  const chart_labels = Object.keys(decade[0])
  console.log(chart_labels)
  console.log(chart_data)
  return (
    <Common.Section flex>
      <Common.Content width="120" margin="auto">
        <Common.Content width="90" shadow margin="0 auto" padding="2vw">
          <Common.TextTitle center uppercase thin wide padding="2vh 0">
            At the end of 2017 in wrocław lives...
          </Common.TextTitle>
          <SexContent>
            <Common.TextTitle lowercase nomargin wide bold padding="1vh">
              {men}
              <span>&nbsp;&nbsp;men</span>
            </Common.TextTitle>
            <Common.TextTitle lowercase nomargin wide bold padding="1vh">
              {women}
              <span>&nbsp;&nbsp;women</span>
            </Common.TextTitle>
          </SexContent>
        </Common.Content>
      </Common.Content>
      <ContentBar>
        <Common.TextTitle nomargin wide bold>
          {all}
          <span>&nbsp;&nbsp;residents</span>
        </Common.TextTitle>
        <ContentChart>
            <Chart chart_labels={chart_labels} chart_data={chart_data} />
          </ContentChart>
      </ContentBar>
    </Common.Section>
  )
}

const ContentBar = styled.div`
  width: 100vw;
  background-color: ${Common.colors.primary};
  color: ${Common.colors.white};
  position: absolute;
  padding: 3rem;
  margin: auto 0;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 0 1px 1rem ${Common.colors.shadow};
  z-index: 2;
  & *:first-child {
    text-align: center;
  }
`

const SexContent = styled.div`
  padding-top: 15rem;
  @media (max-width: 850px) {
    padding: 0 0 70vw;
    & * {
      text-align: center;
    }
  }
  `

const ContentChart = styled.div`
  position: absolute;
  top: 99%;
  left: 47%;
  width: min(51rem, 50%);
  background-color: ${Common.colors.primary};
  padding: 2vw;
  box-shadow: 0 0 5px ${Common.colors.shadow};
  @media (max-width: 850px) {
    width: 90%;
    left: 5%;
  }
`

export default StatMain
