import React from "react"
import * as SC from "./styles"
import * as Common from "../../../styles/common-styles"

const Food = () => (
<>
  <Common.Section>
    <SC.Img>
    <SC.Container>
      <Common.TextTitle>restaurants, pubs and clubs</Common.TextTitle>
      <p>
        The city is well known for its large number of restaurants, nightclubs
        and pubs. Many are in or near the Market Square, and in the Niepolda
        passage, the railway wharf on the Bogusławskiego street. There are many
        other craft breweries in Wrocław: three brewpubs – Browar Stu Mostów,
        Browar Staromiejski Złoty Pies, Browar Rodzinny Prost; two microbrewery
        – Profesja and Warsztat Piwowarski. Every year on the second weekend of
        June the Festival of Good Beer takes place. It is the biggest beer
        festival in Poland. Wrocław is unofficial polish capitol of neopolitan
        pizza. Most famous places to eat this variety are: Piec na Szewskiej,
        Vaffa Napoli, Oliwa i Ogień and Iggy Pizza. Every year in November and
        December the Christmas market is held at the Market Square.
      </p>
    </SC.Container>
    </SC.Img>
  </Common.Section>
  <section>
    <SC.Content>
      <Common.TextTitle>recommended by author...</Common.TextTitle>
      <SC.Restaurants>
        <SC.Whisky>
          <div>Delicious steaks, burgers and grill plus whiskey!</div>
        </SC.Whisky>
        <SC.Ragu>
          <div>Hand made pasta with true italian flavor!</div>
        </SC.Ragu>
        <SC.Oliwa>
          <div>One of the best neapolitan pizzas in the city!</div>
        </SC.Oliwa>
      </SC.Restaurants>
    </SC.Content>
  </section>
  </>
)

export default Food
