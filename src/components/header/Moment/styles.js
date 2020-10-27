import styled from "styled-components"
import * as Common from "../../styles/common-styles"

export const Container = styled.div`
  width: min(120rem, 95%);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-family: "Nunito", "sans-serif";
  padding: 3rem 1rem;
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 2rem;
    & > * {
        text-align: center!important;
        &:first-child {
            margin-bottom: 2rem;
        }
    }
  }
  @media (max-width: 330px) {
    padding: 0 0 0.5rem 0;
  }
`

export const Side = styled.div`
  letter-spacing: 0.12em;
  &:first-child {
    text-align: left;
  }
  &:nth-child(2) {
    text-align: right;
  }
`

export const Label = styled.div`
  font-size: 1.6rem;
`

export const Value = styled.div`
  font-weight: 700;
  font-size: 2.4rem;
  text-transform: uppercase;
`