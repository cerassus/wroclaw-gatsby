import React from "react"
import * as Common from "../../styles/common-styles"
import DisImg from "../../../images/places/denominations.jpg"

const Districts = () => (
  <Common.Section cell>
    <Common.Flex>
      <Common.BackgroundImg
        width="40%"
        src={DisImg}
      />
      <Common.Content row="60">
        <Common.Content nopadding centered>
          <Common.TextTitle>Four Denominations District</Common.TextTitle>
          <p>
            The Four Denominations District – a place of meetings, dialogue,
            mutual respect and... numerous culinary experiences.
          </p>
          <p>
            The Four Denominations District (Dzielnica Czterech Świątyń) is
            located in the centre of Wrocław, right next to Rynek. It consists
            of the area between the streets Kazimierza Wielkiego, Św. Mikołaja,
            Pawła Włodkowica and Św. Antoniego.
          </p>
          <p>
            It is not a regular, urban district but the unique atmosphere of the
            place caused that since 1995 it has been called Four Temples
            District, Four Denominations or Mutual Respect District. Its unique
            character derives from wonderful sacral architecture. In 300m, close
            to each other there are: Orthodox church of Nativity of Theotokos,
            church of St. Anthony of Padua - a Roman Catholic temple, Synagogue
            pod Białym Bocianem and an Evangelical church of Divine Providence.
            In 1996 the Council of the Mutual Respect District was created in
            order to encourage cooperation between the religions.
          </p>
          <p>
            Multiple restaurants, cafés, pubs and music clubs situated in the
            Four Denominations District (for example in the beautiful patio of
            the Synagogue, surrounded by old walls) make it one of the most
            magical meeting place in Wrocław.
          </p>
        </Common.Content>
      </Common.Content>
    </Common.Flex>
  </Common.Section>
)

export default Districts
