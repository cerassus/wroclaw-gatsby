import React from "react"
import styled from 'styled-components';
import * as Common from "../../styles/common-styles"
import MonumentImg from "../../../images/culture/oldtown.jpg"
import MuseumImg from "../../../images/culture/museum.png"

const Monuments = () => (
  <Common.Section>
    <Common.Content width="120" centered>
      <Container>
        <Common.BackgroundImg width='50%' height='100%' src={MonumentImg}/>
        <WrapElement>
          <Common.TextTitle>Old Town</Common.TextTitle>
          <p>
            Ostrów Tumski is the oldest part of the city of Wrocław. It was
            formerly an island known as the Cathedral Island between the
            branches of the Oder River, featuring the Wrocław Cathedral, built
            originally in the mid 10th century. The 13th century Main Market
            Square features the Old Town Hall. In the north-west corner of the
            Market Square is St. Elisabeth's Church with its 91.46 m tower,
            which has an observation deck. North of the church are the Shambles
            with Monument of Remembrance of Animals for Slaughter. Salt Square
            is located at the south-western corner of the Market Square. Close
            to the square, between Szewska and Łaciarska streets, is the 13th
            century St. Mary Magdalene Church.
          </p>
        </WrapElement>
      </Container>
      <Container>
        <Common.BackgroundImg width="50%" height='100%' src={MuseumImg}/>
        <WrapElement>
          <Common.TextTitle>National Museum</Common.TextTitle>
          <p>
            The National Museum in Wrocław, established 28 March 1947, is one of
            Poland's main branches of the National Museum system. It holds one
            of the largest collections of contemporary art in the country. The
            holdings of Wrocław Museum are closely connected with the history of
            border shifts in Central Europe following World War II. After the
            annexation of Eastern half of the Second Polish Republic by the
            Soviet Union, main parts of Poland's art collections were
            transferred from the cities incorporated into the USSR. Collections
            not returned included the Ossolineum holdings which became part of
            the Lviv National Museum.
          </p>
        </WrapElement>
      </Container>
    </Common.Content>
  </Common.Section>
)


const Container = styled.div`
    width: 100%;
    height: 47vh;
    display: flex;
    &:last-child {
        flex-direction: row-reverse;
    }
    @media (max-height: 700px) {
      & > *:first-child {
        display: none;
      }
    }
    @media (max-width: 600px) {
        flex-direction: column!important;
        height: 50vh;
        * {
            width: 100%!important;
        }
    }
    `

const WrapElement = styled.div`
    width: 50%;
    padding: 3vw;
    `

  
export default Monuments
