import React from "react"
import * as Common from "../../styles/common-styles"
import RynekImg from "../../../images/home/rynek.jpg"

const History = () => (
  <Common.Section>
    <Common.BackgroundImg src={RynekImg} flex="column">
      <Common.Content width="90" transparent margin="auto auto 20%" >
        <Common.TextTitle>History</Common.TextTitle>
        <p>
          The beginnings of Wrocław are connected with a settlement that
          developed at a spot convenient for crossing the Oder River, at a
          crossroads of important and old communication trails coming from
          Southern Europe to the North, to the Baltic Sea and from the West to
          the East, to the region of the Black Sea.
        </p>
        <p>
          In the first half of 10th century, the territory of Silesia came under
          the reign of Bohemia, and the settlement, at that time surely having
          the nature of a frontier city, most probably obtained the name after
          Bohemian Prince Vratislaus.{" "}
        </p>
        <p>
          In the last decade of the 10th century, Silesia was included within
          the Polish borders. In 1000, during the reign of Bolesław I “the
          Valiant” (Bolesław Chrobry), a papal edict came out – the oldest
          preserved, written mention about Wrocław, which set the city as the
          seat of the Wrocław bishopric, subordinate to the Archbishopric of
          Gniezno.{" "}
        </p>
      </Common.Content>
    </Common.BackgroundImg>
  </Common.Section>
)

export default History
