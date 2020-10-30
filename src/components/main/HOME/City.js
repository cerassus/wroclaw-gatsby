import React from "react"
import * as Common from "../../styles/common-styles"
import styled from 'styled-components';

const ImageContent = styled.div`
    width: 100%;
    position: absolute;
    top: 3vw;
    background-color: ${Common.colors.transparent};
    `

const City = () => (
  <Common.Section>
    <Common.BackgroundImg src='img/home/monuments.jpg'>
      <ImageContent>
        <Common.Content width="100">
          <Common.TextTitle>Wrocław</Common.TextTitle>
          <p>
            Wrocław is a city in western Poland and the largest city in the
            historical region of Silesia. It lies on the banks of the River Oder in
            the Silesian Lowlands of Central Europe, roughly 350 kilometres (220 mi)
            from the Baltic Sea to the north and 40 kilometres (25 mi) from the
            Sudeten Mountains to the south.
          </p>
        </Common.Content>
      </ImageContent>
    </Common.BackgroundImg>
  </Common.Section>
)

export default City
