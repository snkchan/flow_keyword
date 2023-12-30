import { useRecoilState } from "recoil"
import searchListState from "../recoil/atoms/search_list_state"
import { getSearchWords } from "../axios/axios"

const useFetchKeywords = () => {
  const [searchData, setSearchData] = useRecoilState(searchListState)

  const fetchSearchList = async (word) => {
    const data = await getSearchWords(word)
    setSearchData(data)
  }

  return { searchData, setSearchData, fetchSearchList }
}

export default useFetchKeywords
