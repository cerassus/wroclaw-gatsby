import React from "react"
import * as Common from "../../styles/common-styles"
import styled from "styled-components"
import BridgeImg from "../../../images/culture/bridge.jpg"
import BridgeIcon from "../../../images/culture/bridge_icon.png"
import DwarfIcon from "../../../images/culture/dwarf_icon.png"
import OldtownIcon from "../../../images/culture/oldtown_icon.png"

const cards = [
  {
    src: BridgeIcon,
    title: "bridges",
    desc:
      "Before World War II, Wrocław had 303 bridges. Today there are 100 bridges and 33 gangways. Unique on a Polish and European scale, the number of crossings is due to the location of the city. Wrocław is crossed by the rivers of Oder, Ślęza, Widawa, Bystrzyca, Dobra and a dozen or so streams. Depending on the water level there are up to 25 islands in the city boundaries.",
  },
  {
    src: OldtownIcon,
    title: "monuments",
    desc:
      "Wrocław has two objects on the list of Monuments of History - the most valuable distinction awarded in the country to objects considered particularly valuable for culture, under the patronage of the President of the Republic of Poland. They are: the Historic Center Complex and Centennial Hall. The city has many viewpoints located on monuments, for example the northern tower of the Cathedral of St. John the Baptist.",
  },
  {
    src: DwarfIcon,
    title: "dwarfs",
    desc:
      'Wrocław’s dwarfs are small figurines that first appeared in the city streets in 2005. Since then, their numbers have been continually growing, and today they are considered a tourist attraction: those who would like to combine sight-seeing in Wrocław with "Hunting for dwarfs" are offered special brochures with a map and mobile application. As of 2015, there are over 350 dwarfs spread all over the city.',
  },
]
const Card = styled.div`
  width: 33%;
  padding: 2vw;
  display: table-cell;
  vertical-align: top;
  @media (max-width: 650px) {
    width: 100%;
    display: block;
    & > *:first-child {
      height: 3rem;
    }
  }
  @media (max-width: 400px) {
    & > *:first-child {
      display: none;
    }
  }
`
const CardIcon = styled.img`
  height: 10rem;
`
const CardTitle = styled.h3`
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-weight: 600;
  margin: 3vw 0;
`
const CardText = styled.p``
const Architecture = () => (
  <Common.Section>
    <Common.BackgroundImg gradient src={BridgeImg}>
      <Common.Content width="110" shadow transparent centered nopadding>
        {cards.map((card, i) => (
          <Card key={i}>
            <CardIcon src={card.src} alt="icon img"></CardIcon>
            <CardTitle>{card.title}</CardTitle>
            <CardText>{card.desc}</CardText>
          </Card>
        ))}
      </Common.Content>
    </Common.BackgroundImg>
  </Common.Section>
)

export default Architecture
