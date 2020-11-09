import React from "react"
import styled from 'styled-components';
import * as Common from "../../styles/common-styles"
import SlodowaImg from "../../../images/places/slodowa.jpg" 

const Content = styled(Common.Content)`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  margin: 0 3vw 0 auto;
  @media (max-width: 600px) {
    height: auto;
    margin: 0;
    width: 100%;
  }
`

const Island = () => (
  <Common.Section>
    <Common.BackgroundImg src={SlodowaImg} pos="left" absoluteSibling/>
    <Content transparent width="60">
      <Common.Content nopadding>
          <Common.TextTitle>Słodowa Island</Common.TextTitle>
          <p>
            Słodowa Island belongs to the Oder archipelago located to the north
            of Rynek. Apart from Słodowa, the other Wrocław Islands are:
            Bielarska, Młyńska, Piasek, Daliowa and Tamka.
          </p>
          <p>
            The Island (Wyspa Słodowa) used to be built-up but during World War
            II most of the buildings were destroyed, only a six-storey tenement
            house survived.
          </p>
          <p>
            The picnic season begins on the 21st of March when the Island is
            crowded with students of secondary and upper-secondary schools
            celebrating Truant Day (firs day of spring). All year long the
            Island is under the “reign” of students. During summer weekends
            there are many attractions on the Island: on Fridays and Saturdays
            open-air cinema, Saturday concerts, board games, sport activities,
            on Sundays dance classes or open-air library.
          </p>
          <p>In the tourist season one can buy something to eat and drink.</p>
        </Common.Content>
      </Content>
  </Common.Section>
)

export default Island
