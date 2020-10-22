import React from "react"
import * as SC from "./styles"
import * as Common from "../../../styles/common-styles"


const cards = [
  {
    src: "img/culture/bridge_icon.png",
    title: "bridges", 
    desc: "Dlaczego Wrocław ma tyle mostów? Bo nie udało się ich wywieźć do Warszawy!  Wrocław plasuje się na czwartym miejscu pod względem liczby mostów i kładek w Europie. Więcej przepraw przez wodę mają tylko Wenecja, Amsterdamem i Sankt Petersburg.",
  },
  {
    src: "img/culture/oldtown_icon.png",
    title: "monuments", 
    desc: "Dlaczego Wrocław ma tyle mostów? Bo nie udało się ich wywieźć do Warszawy!  Wrocław plasuje się na czwartym miejscu pod względem liczby mostów i kładek w Europie. Więcej przepraw przez wodę mają tylko Wenecja, Amsterdamem i Sankt Petersburg.",
  },
  {
    src: "img/culture/dwarf_icon.png",
    title: "dwarfs", 
    desc: "Dlaczego Wrocław ma tyle mostów? Bo nie udało się ich wywieźć do Warszawy!  Wrocław plasuje się na czwartym miejscu pod względem liczby mostów i kładek w Europie. Więcej przepraw przez wodę mają tylko Wenecja, Amsterdamem i Sankt Petersburg.",
  },
]

const Architecture = () => (
  <Common.Section>
    <SC.Container>
      <SC.Content>
        {cards.map((card,i) => (
          <SC.Card key={i}>
            <SC.CardIcon src={card.src} alt="icon img" ></SC.CardIcon>
            <SC.CardTitle>{card.title}</SC.CardTitle>
            <SC.CardText>{card.desc}</SC.CardText>
          </SC.Card>
        ))}
      </SC.Content>
    </SC.Container>
  </Common.Section>
)

export default Architecture
