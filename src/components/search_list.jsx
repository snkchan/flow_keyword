import styled from "styled-components"
import SearchListItem from "./search_list_item"

const SearchList = () => {
  return (
    <S.Ul_SearchHistory>
      <SearchListItem />
    </S.Ul_SearchHistory>
  )
}
export default SearchList

const Ul_SearchHistory = styled.ul`
  width: 30rem;
`

const S = {
  Ul_SearchHistory,
}
