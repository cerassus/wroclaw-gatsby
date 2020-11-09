import React from "react"
import styled from "styled-components"
import * as Common from "../../styles/common-styles"
import FoodImg from "../../../images/places/food/food.jpg"
import OliwaImg from "../../../images/places/food/oliwa.jpg"
import RaguImg from "../../../images/places/food/ragu.png"
import WhiskeyImg from "../../../images/places/food/whiskey.png"

const ImageContent = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: ${Common.colors.primary};
`

const Food = () => (
  <>
    <Common.Section>
      <Common.BackgroundImg src={FoodImg}>
        <ImageContent>
          <Common.Content blue width="120">
            <Common.TextTitle>restaurants, pubs and clubs</Common.TextTitle>
            <p>
              The city is well known for its large number of restaurants,
              nightclubs and pubs. Many are in or near the Market Square, and in
              the Niepolda passage, the railway wharf on the Bogusławskiego
              street. There are many other craft breweries in Wrocław: three
              brewpubs – Browar Stu Mostów, Browar Staromiejski Złoty Pies,
              Browar Rodzinny Prost; two microbrewery – Profesja and Warsztat
              Piwowarski. Every year on the second weekend of June the Festival
              of Good Beer takes place. It is the biggest beer festival in
              Poland. Wrocław is unofficial polish capitol of neopolitan pizza.
              Most famous places to eat this variety are: Piec na Szewskiej,
              Vaffa Napoli, Oliwa i Ogień and Iggy Pizza. Every year in November
              and December the Christmas market is held at the Market Square.
            </p>
          </Common.Content>
        </ImageContent>
      </Common.BackgroundImg>
    </Common.Section>
    <section>
      <Common.Content width="100">
        <Common.TextTitle>recommended by author...</Common.TextTitle>
        <Restaurants>
          <div>
            <a href="https://whiskeyinthejar.pl/wroclaw/" target="__blank"><img src={WhiskeyImg} alt="restaurant img" /></a>
            <div>Delicious steaks, burgers and grill plus whiskey!</div>
          </div>
          <div>
            <a href="https://ragu.pl/" target="__blank"><img src={RaguImg} alt="restaurant img" /></a>
            <div>Hand made pasta with true italian flavor!</div>
          </div>
          <div>
            <a href="https://www.facebook.com/OliwaOgien/" target="__blank"><img src={OliwaImg} alt="restaurant img" /></a>
            <div>One of the best neapolitan pizzas in the city!</div>
          </div>
        </Restaurants>
      </Common.Content>
    </section>
  </>
)

const Restaurants = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 8rem auto;
  & div > div {
    visibility: hidden;
    top: 0;
    position: relative;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    margin: 2rem;
    & img {
      margin: 1vh;
    }
    & div > div {
      visibility: visible;
    }
  }
  & img {
    width: 20vh;
    height: 20vh;
    border-radius: 50%;
    border: solid 5px ${Common.colors.white};
    box-shadow: 0 5px 5px #000;
    transition: all 0.2s;
    &:hover {
      box-shadow: 0 15px 15px #000;
      transform: translateY(-2rem);
    }
  }
  & a:hover + div {
    @media(min-width: 700px) {
      animation-name: restaurant-hover;
      animation-duration: .5s;
      top: 3rem;
      visibility: visible;
    }
  }
`

export default Food