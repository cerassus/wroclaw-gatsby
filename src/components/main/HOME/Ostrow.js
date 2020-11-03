import React from "react"
import styled from "styled-components"
import * as Common from "../../styles/common-styles"
import OstrowImg from "../../../images/home/cathedral.jpg"

const Content = styled(Common.Content)`
  @media (max-width: 1150px) {
    margin: auto auto 5%;
  }
`

const Ostrów = () => (
  <Common.Section>
    <Common.BackgroundImg src={OstrowImg} flex="row">
    <Content transparent width="60" margin="0 3vw 0 auto">
      <Common.Content nopadding>
        <Common.TextTitle>Ostrów Tumski</Common.TextTitle>
        <p>
          Surrounded by the river Oder, the old burgh, the origin of the city,
          has fantastic architecture. The greatest ones are the Gothic St. John
          Baptist cathedral, rebuilt after World War II and Holy Cross church.
        </p>
        <p>
          There is the Archdiocese Museum there, the oldest historically
          continuous museum in Wrocław - for over 100 years it has gathered
          sacral art, which was excluded from cult use and has great historical
          and artistic value. Among the exhibits one can find Henrykowska Book
          from 13th-14th century, which contains the first sentence written in
          Polish.{" "}
        </p>
        <p>
          {" "}
          The current cathedral is a three-nave Gothic oriented basilica
          surrounded by an ambulatory. The cathedral has three entrances: the
          main western portal and two later entrances from the north and south.
        </p>
      </Common.Content>
    </Content>
    </Common.BackgroundImg>
  </Common.Section>
)

export default Ostrów
