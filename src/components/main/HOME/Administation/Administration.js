import React from "react"
import * as SC from "./styles"
import * as Common from "../../../styles/common-styles"

const Administration = () => (
  <Common.Section>
    <SC.Map>
      <SC.MapContainer>
        <SC.PsiePoleSibling></SC.PsiePoleSibling>
        <SC.PsiePole>
          <SC.FabrycznaSibling></SC.FabrycznaSibling>
          <SC.Fabryczna>
            <SC.SrodmiescieSibling></SC.SrodmiescieSibling>
            <SC.Srodmiescie>
              <SC.StareMiastoSibling></SC.StareMiastoSibling>
              <SC.StareMiasto>
                <SC.KrzykiSibling></SC.KrzykiSibling>
                <SC.Krzyki></SC.Krzyki>
              </SC.StareMiasto>
            </SC.Srodmiescie>
          </SC.Fabryczna>
        </SC.PsiePole>
      </SC.MapContainer>
    </SC.Map>
    <Common.Content>
      <Common.TextTitle>Boroughs</Common.TextTitle>
      <p>
        Wrocław is subdivided into five main boroughs: <span>Fabryczna</span>
        (‘Factory Quarter’), <span>Krzyki</span> (‘Wranglers’),
        <span>Psie Pole</span> (Dogs Field), <span>Śródmieście</span>
        (‘Midtown’) and <span>Stare Miasto</span> (‘Oldtown’). City is currently
        governed by the city's mayor and a municipal legislature known as the city
        council. The city council is made up of 39 councilors and is directly
        elected by the city's inhabitants. The remit of the council and president
        extends to all areas of municipal policy and development planning, up to
        and including development of local infrastructure, transport and planning
        permission. However, it is not able to draw taxation directly from its
        citizens, and instead receives its budget from the Polish national
        government. The city's current mayor is Jacek Sutryk, who has served in
        this position since 2018.
      </p>
    </Common.Content>
  </Common.Section>
)

export default Administration
