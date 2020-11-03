import React from "react"
import styled from "styled-components"
import * as Common from "../../styles/common-styles"
import Logo from "../../../images/home/wroclaw_logo.svg"

const SVG = styled.img`
width: ${props => (props.row ? `${props.row}%` : "100%")};
transform: scale(0.7);
@media (max-width: 600px) {
  width: 100%;
  height: ${props => props.row}%;
  margin: auto;
}
`
const Arms = () => (
    <Common.Section cell>
      <Common.Flex reverse>
        <SVG row="30" src={Logo} alt="wroclaw logo" />
        <Common.Content row="70" blue>
          <Common.Content centered>
            <Common.TextTitle>Wrocław Arms</Common.TextTitle>
            <p>
              In 1989 even before the elections, a Wrocław Heraldic Committee
              was established, which was to develop a new coat of arms for the
              city. The new city symbol was established by the new City Council
              in June 1990. At first St. John the Baptist was straight (en
              face). In 1995 this emblem was changed, and now we have a profile
              of the saint's head (some say this is the so called Tartar's
              head).{" "}
            </p>
            <p>
              Wrocław’s coat of arms is a shield divided with a cross into four
              areas{" "}
            </p>
            <p>
              in the bottom left area, there is the head of St John the
              Evangelist, directed straight, with a youthful face with
              feminine-like curls, with a gloriole around his head, set on a
              reversed crown. A white head with black outline, a yellow gloriole
              and crown with black outline, red background
            </p>
          </Common.Content>
        </Common.Content>
      </Common.Flex>
    </Common.Section>
  )

export default Arms