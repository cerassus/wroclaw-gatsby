import React from "react"
import styled from "styled-components"
import * as Common from "../../styles/common-styles"
import { colors } from "../../styles/common-styles"
import FabrycznaImg from "../../../images/home/fabryczna.png"
import SrodmiescieImg from "../../../images/home/srodmiescie.png"
import StareMiastoImg from "../../../images/home/staremiasto.png"
import PsiepoleImg from "../../../images/home/psiepole.png"
import KrzykiImg from "../../../images/home/krzyki.png"

const Administration = () => (
    <Common.Section flex="column">
      <Map>
        <MapContainer>
          <PsiePoleSibling></PsiePoleSibling>
          <PsiePole>
            <FabrycznaSibling></FabrycznaSibling>
            <Fabryczna>
              <SrodmiescieSibling></SrodmiescieSibling>
              <Srodmiescie>
                <StareMiastoSibling></StareMiastoSibling>
                <StareMiasto>
                  <KrzykiSibling></KrzykiSibling>
                  <Krzyki></Krzyki>
                </StareMiasto>
              </Srodmiescie>
            </Fabryczna>
          </PsiePole>
        </MapContainer>
      </Map>
      <Common.Content width="100" margin="auto auto 20%">
        <Common.TextTitle>Boroughs</Common.TextTitle>
        <p>
          Wrocław is subdivided into five main boroughs: <span>Fabryczna</span>
          (‘Factory Quarter’), <span>Krzyki</span> (‘Wranglers’),
          <span>Psie Pole</span> (Dogs Field), <span>Śródmieście</span>
          (‘Midtown’) and <span>Stare Miasto</span> (‘Oldtown’). City is
          currently governed by the city's mayor and a municipal legislature
          known as the city council. The city council is made up of 39
          councilors and is directly elected by the city's inhabitants. The
          remit of the council and president extends to all areas of municipal
          policy and development planning, up to and including development of
          local infrastructure, transport and planning permission. However, it
          is not able to draw taxation directly from its citizens, and instead
          receives its budget from the Polish national government. The city's
          current mayor is Jacek Sutryk, who has served in this position since
          2018.
        </p>
      </Common.Content>
    </Common.Section>
  )

  const Map = styled.div`
  transition: all 0.2s;
  transform: rotateX(33deg);
  @media (max-width: 850px) {
    transform: rotateX(33deg) scale(0.8);
  }
  @media (max-width: 650px) {
    transform: rotateX(33deg) scale(0.6);
  }
  @media (max-width: 500px) {
    transform: rotateX(33deg) scale(0.4);
  }
`
const MapContainer = styled.div`
  width: 1px;
  height: 1px;
  display: inline-block;
  position: relative;
  background-color: ${colors.black};
  margin: 20vh 0 40vh;
  @media (max-width: 600px) {
    margin: 20vh 0;
  }
  & * {
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    transition: all 0.3s;
  }
`
const PsiePole = styled.div`
  bottom: -20rem;
  left: -13rem;
  width: 504px;
  height: 397px;
  background-image: url(${PsiepoleImg});
  visibility: hidden;
`
const PsiePoleSibling = styled(PsiePole)`
  z-index: 1000;
  visibility: visible !important;
  &:hover {
    filter: drop-shadow(0 25px 5px ${colors.shadow}) brightness(0.5);
    transform: translateY(-3%);
  }
`
const Fabryczna = styled.div`
  bottom: -10.5%;
  left: -43%;
  width: 404px;
  height: 439px;
  background-image: url(${FabrycznaImg});
  visibility: hidden;
`
const FabrycznaSibling = styled(Fabryczna)`
  z-index: 1000;
  visibility: visible !important;
  &:hover {
    filter: drop-shadow(0 25px 5px ${colors.shadow}) brightness(0.5);
    transform: translateY(-3%);
  }
`
const Srodmiescie = styled.div`
  bottom: 22%;
  left: 92%;
  width: 107px;
  height: 97px;
  background-image: url(${SrodmiescieImg});
  visibility: hidden;
`
const SrodmiescieSibling = styled(Srodmiescie)`
  z-index: 1000;
  visibility: visible !important;
  &:hover {
    filter: drop-shadow(0 25px 5px ${colors.shadow}) brightness(0.5);
    transform: translateY(-3%);
  }
`
const StareMiasto = styled.div`
  bottom: -18%;
  left: 39%;
  width: 211px;
  height: 114px;
  background-image: url(${StareMiastoImg});
  visibility: hidden;
`
const StareMiastoSibling = styled(StareMiasto)`
  z-index: 1000;
  visibility: visible !important;
  &:hover {
    filter: drop-shadow(0 25px 5px ${colors.shadow}) brightness(0.5);
    transform: translateY(-3%);
  }
`
const Krzyki = styled.div`
  bottom: -138%;
  left: -57%;
  width: 369px;
  height: 206px;
  background-image: url(${KrzykiImg});
  visibility: hidden;
`
const KrzykiSibling = styled(Krzyki)`
  z-index: 1000;
  visibility: visible !important;
  &:hover {
    filter: drop-shadow(0 25px 5px ${colors.shadow}) brightness(0.5);
    transform: translateY(-3%);
  }
`

export default Administration
