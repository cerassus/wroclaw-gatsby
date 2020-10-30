import React from "react"
import styled from 'styled-components';
import * as Common from "../../styles/common-styles"

const Places = () => (
  <>
    <Common.Section>
      <Common.Content nopadding>
        <Common.BackgroundImg height="45vh" src="img/places/panorama.jpg" />
        <Desc>
          <Common.TextTitle>racławice panorama</Common.TextTitle>
          <Text>
            The Racławice Panorama is a monumental (15 × 114 meter) cycloramic
            painting depicting the Battle of Racławice, during the Kościuszko
            Uprising. The painting is one of only a few preserved relics of a
            genre of 19th-century mass culture, and the oldest in Poland. The
            panorama stands in a circular fashion and, with the viewer in the
            center, presents different scenes at various viewing angles. A
            special kind of perspective used in the painting and additional
            effects (lighting, artificial terrain) create a feeling of reality.
          </Text>
        </Desc>
      </Common.Content>
    </Common.Section>

    <Common.Section>
      <Common.Content nopadding>
      <Common.BackgroundImg pos="right" height="45vh" src="img/places/zoo.jpg" />
        <Desc right>
          <Common.TextTitle>zoological garden</Common.TextTitle>
          <Text>
            The Wrocław Zoological Garden is the oldest zoo in Poland, having
            been opened in 1865. It is also the largest (in terms of the number
            of animals) zoo in Poland. The zoo covers 33 hectares in downtown
            Wrocław. It is home to about 10,500 animals representing about 1,132
            species. In terms of the number of animal species it is the third
            largest zoological garden in the world. The Wrocław Zoo is the most
            visited zoo in Poland and the fifth most visited zoo in Europe. The
            zoo includes among others: the Africarium (the only oceanarium of
            its kind which focuses exclusively on the fauna of Africa), the
            Madagascar Pavilion, the Odrarium, Terrarium, Zoolandia ropes
            course, Children's Zoo, the Ranch, as well as food and drinks
            outlets.
          </Text>
        </Desc>
      </Common.Content>
    </Common.Section>

    <Common.Section>
      <Common.Content nopadding>
      <Common.BackgroundImg height="45vh" src="img/places/hala.jpg" />
        <Desc>
          <Common.TextTitle>centennial hall</Common.TextTitle>
          <Text>
            The Centennial Hall, formerly named "People's Hall", is a historic
            building near the city center. It was constructed according to the
            plans of architect Max Berg in 1911–1913, when the city was part of
            the German Empire. Max Berg designed Centennial Hall to serve as a
            multifunctional structure to host "exhibitions, concerts, theatrical
            and opera performances, and sporting events." The hall continues to
            be used for sporting events and concerts. As an early landmark of
            reinforced concrete architecture, the building became one of
            Poland's official national Historic Monuments. Its listing is maintained by the National Heritage Board
            of Poland. It was also listed as a UNESCO World Heritage Site in
            2006.
          </Text>
        </Desc>
      </Common.Content>
    </Common.Section>
  </>
)

const Desc = styled.div`
    padding: 7vw;
    ${props => props.right && ` & p {
      float: right;
    };
    & h2 {
      text-align: right;
    }
  `};
`

const Text = styled.p`
    width: min(70rem, 100%);
    `

export default Places
