import React from "react"
import styled from "styled-components"
import * as Common from "../../styles/common-styles"

const StatRegion = ({ stat, decade }) => {
  const resultObj = []
  const year2016 = decade[0][2016]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(x => (x = { name: x.name, count: Number(x.count) }))
  const year2017 = decade[0][2017]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(x => (x = { name: x.name, count: Number(x.count) }))
  const regions = [
    ...year2017
      .map(
        (x, i) =>
          (x = {
            name: x.name,
            count: (x.count / Math.abs(year2016[i].count) -1).toFixed(2),
          })
      )
      .sort((a, b) => a.count - b.count),
  ]
  stat
    .map(x => {
      const obj = {
        age: x.AGE,
        number: x.NUMBERofRESIDENTS,
      }
      return obj
    })
    .sort((a, b) => a.age - b.age)
    .forEach(x => {
      let exist = 0
      resultObj.forEach(y => {
        if (x.age === y.age) {
          y.number += x.number
          exist = 1
        }
      })
      exist === 0 && resultObj.push(x)
    })
  resultObj.sort((a, b) => a.number - b.number)
  return (
    <Common.Section>
      <Common.Content width="120" centered padding="2vw">
        <div>
          <Common.TextTitle center>THE MOST COMMON AGE IS...</Common.TextTitle>
          <Common.TextTitle center bold>
            {resultObj[resultObj.length - 1].age}
          </Common.TextTitle>
          <Common.TextTitle center lowercase>
            {resultObj[resultObj.length - 1].number} people are at this age
          </Common.TextTitle>
          <Row>
            <Box>
              <div>TOP 5 REGIONS where the population has decreased</div>
              {regions.splice(0, 5).map((x, i) => (
                <div key={i}>{`${i + 1}. ${x.name} (${x.count.replace(/0.0*/g, "")}%)`}</div>
              ))}
            </Box>
            <Box>
              <div>TOP 5 REGIONS where the population has increased</div>
              {regions
                .splice(regions.length - 5, 5)
                .reverse()
                .map((x, i) => (
                  <div key={i}>{`${i + 1}. ${x.name} (+${x.count.replace(/^0.0*/g, "")}%)`}</div>
                ))}
            </Box>
          </Row>
        </div>
      </Common.Content>
    </Common.Section>
  )
}

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
  background-color: ${Common.colors.primary};
  color: ${Common.colors.white};
  padding: 3vw;
  font-size: clamp(1rem, 0.8483rem + 0.7356vw, 1.4rem);
  &:nth-child(2) {
    background-color: ${Common.colors.white};
    color: ${Common.colors.primary};
  }
  & * {
    padding-bottom: 2vh;
  }
`

export default StatRegion
