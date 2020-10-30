import React from "react"
import * as Common from "../../styles/common-styles"

const Pedestrian = () => (
  <Common.Section cell>
    <Common.Flex>
      <Common.BackgroundImg
        width="50%"
        src="img/culture/pedestrian.jpg"
        pos="right"
      />
      <Common.Content row="50" blue>
        <Common.Content centered>
          <Common.TextTitle>The Anonymous Pedestrian</Common.TextTitle>
          <p>
            The sculpture presents people who go down, under the pavement and
            emerge from it. Its original was the installation of Kalina from.
          </p>
          <p>
            The sculpture presents people who go down, under the pavement and
            emerge from it. Its original was the installation of Kalina from
            1977 “Passage” (that is why the sculpture is also known by this
            name). The Sculpture of Anonymous Pedestrian was showed for the
            first time in 2005, the author did not change the project, the
            people wear the clothes from the 70s.
          </p>
          <p>
            The Sculpture of Anonymous Pedestrian is often mentioned globally.
            In 2011 it was mentioned by Newsweek as one of the most beautiful
            places in Poland and an American Budget Travel recognised it as one
            of the most remarkable places in the world. In Autumn 2014 it was
            presented as one of the most creative city sculptures by
            www.boredpanda.com. In Spring 2015 a prestigious design and
            architecture magazine Arch2O included it in its ranking - it was the
            only object from Poland.
          </p>
        </Common.Content>
      </Common.Content>
    </Common.Flex>
  </Common.Section>
)



export default Pedestrian