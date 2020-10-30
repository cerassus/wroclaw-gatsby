import React from "react"
import * as Common from "../../styles/common-styles"

const Neon = () => (
  <Common.Section cell>
    <Common.Flex reverse>
      <Common.BackgroundImg width="60%" src="img/places/neon.jpg" />
      <Common.Content row="40" blue>
        <Common.Content nopadding centered>
          <Common.TextTitle>Neon Side Gallery</Common.TextTitle>
          <p>
            Neon Side Gallery functions in the place of the old Reklama
            enterprise, which produced neon signs. Today in Ruska 46c there are
            almost 30 neon signs of various institutions, companies, workshops,
            shops, cinemas and bars.
          </p>
          <p>
            Most of the places in which the neons from Neon Side Gallery
            (Galeria Neonów) used to be does not exist nowadays. The foundation
            Neon Side has functioned for 10 years now. The owner, Tomasz
            Kosmalski, bought his first neon in 2005 - the old signboard of the
            confectionery from Nowowiejska Street. That action of the young
            citizen of Wrocław, anxious about the disappearance of the part of
            the city, sparked an extraordinary initiative. Today Kosmalski and
            his foundation have several dozen neon signs.
          </p>
          <p>
            The history repeated itself: Neon Side Gallery functions in the
            place of the old Reklama enterprise, which produced neon signs. The
            neons of Wrocław have their admirers, who track their histories and
            protect them from being destroyed by careless renovation companies.
          </p>
        </Common.Content>
      </Common.Content>
    </Common.Flex>
  </Common.Section>
)

export default Neon
