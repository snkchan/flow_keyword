import styled from "styled-components"
import { color, flexAlign, fontSize, fontWeight } from "../styles/themes"
import SearchList from "./search_list"

const SearchArea = () => {
  return (
    <S.Div_MainWrap>
      <S.Div_FormWrap>
        <S.For_Form>
          <S.Inp_Input />
          <S.But_Button>🔍</S.But_Button>
        </S.For_Form>
        <SearchList />
      </S.Div_FormWrap>
    </S.Div_MainWrap>
  )
}
export default SearchArea
const Div_MainWrap = styled.div`
  ${flexAlign.flexCenter}
  margin-top: 10rem;
`

const Div_FormWrap = styled.div``
const For_Form = styled.form`
  ${flexAlign.alignCenter}
`
const Inp_Input = styled.input`
  width: 30rem;
  height: 3rem;
  background-color: ${color.yellow[800]};
  font-size: ${fontSize.small};
  font-weight: ${fontWeight.extarBold};
  border-style: none;
  padding: 0 1rem;
`
const But_Button = styled.button`
  width: 2rem;
  height: 3rem;
  background-color: ${color.yellow[800]};
  border-radius: 4rem;
`
const S = {
  Div_MainWrap,
  Div_FormWrap,
  For_Form,
  Inp_Input,
  But_Button,
}
