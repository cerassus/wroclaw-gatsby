import React from "react"
import * as Common from "../../styles/common-styles"
import CemenImg from "../../../images/didyouknow/cementary.jpg"

const Curiosities = () => (
  <Common.Section>
    <Common.BackgroundImg gradient src={CemenImg}>
      <Common.Content width="120" centered white> 
        <Common.TextTitle shadow padding="6vh" center>Curiosities</Common.TextTitle>
        <Common.TextBig bold>
        WROCŁAW RACES FOURTH IN TERMS OF THE NUMBER OF BRIDGES AND FOOTWEARS IN EUROPE.
        </Common.TextBig>
        <Common.TextBig bold>
        SKY TOWER IS THE HIGHEST RESIDENTIAL BUILDING IN POLAND (212 meters)
        </Common.TextBig>
        <Common.TextBig bold>
          The basement of the old City Hall houses one of the oldest restaurants
          in Europe — Piwnica Świdnicka, operating since 1275.
        </Common.TextBig>
        <Common.TextBig bold>
          Wrocław has over 355 dwarf figurines located around the city.
        </Common.TextBig>
        <Common.TextBig bold>
        Many years ago Wroclaw was a German city - Breslau.
        </Common.TextBig>
        <Common.TextBig bold>
        Wroclaw is a lively vibrant student city, and many Poles complement the city with a name play, calling it “WrocLOVE”.
        </Common.TextBig>
        <Common.TextBig bold>
        Some could argue, but Wroclaw is probably the most beautiful city in Poland.
        </Common.TextBig>
      </Common.Content>
    </Common.BackgroundImg>
  </Common.Section>
)

export default Curiosities