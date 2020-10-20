import React from "react"
import * as SC from "./styles"
import { Title } from "../../styles/common-styles"

const Bluebar = ({text_content, title}) => (
    <>
        <SC.Bluebar>
            <div>{text_content}</div>
        </SC.Bluebar>
        <Title>{title}</Title>
    </>
)

export default Bluebar