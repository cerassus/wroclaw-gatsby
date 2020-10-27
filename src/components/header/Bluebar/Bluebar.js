import React from "react"
import * as SC from "./styles"

const Bluebar = ({text_content, title}) => (
    <>
        <SC.Bluebar>
            <div>{text_content}</div>
        </SC.Bluebar>
        <SC.Title>{title}</SC.Title>
    </>
)

export default Bluebar