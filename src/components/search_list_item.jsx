import styled from "styled-components"
import XButton from "./x_button"
import { color, fontSize, fontWeight } from "../styles/themes"
const SearchListItem = () => {
  return (
    <S.Div_SearchHistoryListWrap>
      <S.Li_SearchHistoryList>gdgdf</S.Li_SearchHistoryList>
      <S.Div_BtnWrap>
        <XButton>x</XButton>
      </S.Div_BtnWrap>
    </S.Div_SearchHistoryListWrap>
  )
}
export default SearchListItem
const Div_SearchHistoryListWrap = styled.div`
  position: relative;
`

const Li_SearchHistoryList = styled.li`
  border: 1px solid ${color.black[500]};
  background-color: ${color.yellow[800]};
  font-size: ${fontSize.small};
  font-weight: ${fontWeight.thin};
  padding: 0.3rem 1rem;
`
const Div_BtnWrap = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 30%;
`
const S = {
  Div_SearchHistoryListWrap,
  Li_SearchHistoryList,
  Div_BtnWrap,
}
