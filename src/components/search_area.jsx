import styled from "styled-components"
import { color, flexAlign, fontSize, fontWeight } from "../styles/themes"

const SearchArea = () => {
  return (
    <S.Div_FormWrap>
      <S.For_Form>
        <S.Inp_Input />
        <S.But_Button>🔍</S.But_Button>
      </S.For_Form>
    </S.Div_FormWrap>
  )
}
export default SearchArea
const Div_FormWrap = styled.div`
  ${flexAlign.flexCenter}
  margin-top: 10rem;
`
const For_Form = styled.form`
  ${flexAlign.alignCenter}
`
const Inp_Input = styled.input`
  width: 20rem;
  height: 3rem;
  background-color: ${color.yellow[800]};
  font-size: ${fontSize.small};
  font-weight: ${fontWeight.extarBold};
`
const But_Button = styled.button`
  width: 2rem;
  height: 3rem;
  background-color: ${color.yellow[800]};
  border-radius: 4rem;
`
const S = {
  Div_FormWrap,
  For_Form,
  Inp_Input,
  But_Button,
}
