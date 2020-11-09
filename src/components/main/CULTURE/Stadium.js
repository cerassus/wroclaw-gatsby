import React from "react"
import styled from 'styled-components';
import * as Common from "../../styles/common-styles"
import StadiumImgIn from "../../../images/culture/stadium_in.jpg"
import StadiumImgOut from "../../../images/culture/stadium_out.jpg"

const Stadium = () => (
  <Common.Section>
    <Common.BackgroundImg src={StadiumImgIn}>
      <Common.Content transparent centered width="100" padding="4vw">
        <Common.TextTitle>City Stadium</Common.TextTitle>
        <p>
          Chinese lantern - that is how people think of the Wrocław Stadium. It
          is covered with elastic glass fibre material which makes it possible
          to light the stadium with different colours.
        </p>
        <p>
          The Stadium (Stadion Wrocław) was built in 2011 on the occasion of
          UEFA EURO 2012. There are 43,863 seats, 102 places for the disabled.
        </p>
        <p>
          The Stadium was opened in September 2011 with the performance of
          George Michael and Symphonica project. The same month there was a
          boxing fight of Tomasz Adamek and Vitali Klitschko and in October
          Monster Truck event was held on the Stadium.
        </p>
        <p>
          Both WKS Śląsk Wrocław and Polish national team play their matches on
          Wrocław Stadium. But it is not only football that happens there. Every
          year there are many wonderful concerts and various entertainment and
          sporting events.
        </p>
        <p>
          Everyday the Stadium offers various services: recreational, such as
          fitness club, go-kart track or jumping on Dream Jump lines, and rents
          offices and the all-year working Event Centre for companies.
        </p>
        <ImgInside src={StadiumImgOut} alt="stadium foto" />
      </Common.Content>
    </Common.BackgroundImg>
  </Common.Section>
)

const ImgInside = styled.img`
    width: 100%;
    padding: 0 3vw;
    margin: 2rem 0;
    height: 24vh;
    object-fit: cover;
    object-position: 0 60%;
    filter: drop-shadow(0 0 5px ${Common.colors.shadow});
    @media (max-width: 360px) {
      margin: 0;
    }
    `

export default Stadium