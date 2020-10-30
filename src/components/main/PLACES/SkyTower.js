import React from "react"
import * as Common from "../../styles/common-styles"

const SkyTower = () => (
  <Common.Section cell>
    <Common.Flex reverse>
      <Common.BackgroundImg width="50%" src="img/places/skytower.jpg" />
      <Common.Content row="50" blue>
        <Common.Content nopadding centered>
          <Common.TextTitle>Sky Tower Viewpoint</Common.TextTitle>
          <p>
            The tourists can get on the top 49th floor in 1 minute with the
            lift. The viewpoint can fit 20 people.
          </p>
          <p>
            Located on the last 49th floor of Sky Tower is one of the greatest
            attractions of Wrocław. The tourists can get on top in 1 minute with
            the lift that carries 20 people.
          </p>
          <p>
            Security staff maintain order in and around the lift, and don’t
            allow entry to anyone who is under the influence of drugs or
            alcohol, or who is acting suspiciously. Children under the age of 13
            must be accompanied by an adult.
          </p>
          <p>
            The entrance to the lifts is located in ul. Gwiaździsta. The last
            visitors can enter 30 minutes before the closing.
          </p>
          <p>
            Booking and selling of the tickets on +1 floor of the shopping
            gallery. Phone: 71 738 31 11.
          </p>
        </Common.Content>
      </Common.Content>
    </Common.Flex>
  </Common.Section>
)

export default SkyTower
