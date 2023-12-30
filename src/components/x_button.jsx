import styled from "styled-components"
import { color, flexAlign } from "../styles/themes"

const XButton = ({ ...rest }) => {
  return <S.But_XButton {...rest} />
}

export default XButton

const But_XButton = styled.button`
  padding: 0.6rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  ${flexAlign.flexCenter}
  background-color: ${color.gray[900]};
  &:hover {
    cursor: pointer;
    background-color: ${color.gray[300]};
  }
`

const S = {
  But_XButton,
}
