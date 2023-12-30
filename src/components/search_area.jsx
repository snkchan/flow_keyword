import styled from "styled-components"
import { color, flexAlign, fontSize, fontWeight } from "../styles/themes"
import SearchList from "./search_list"
import UseDebounce from "../hooks/use_debounce"
import useFetchKeywords from "../hooks/use_fetch_keywords"

const SearchArea = () => {
  const { searchData, fetchSearchList } = useFetchKeywords()
  const getInputText = UseDebounce(fetchSearchList, 500)

  const onKeyUp = (e) => {
    getInputText(e.target.value)
  }

  console.log(searchData)

  return (
    <S.Div_MainWrap>
      <S.Div_FormWrap>
        <S.For_Form>
          <S.Inp_Input onChange={onKeyUp} />
          <S.But_Button
            onClick={(e) => {
              e.preventDefault()
            }}
          >
            🔍
          </S.But_Button>
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
