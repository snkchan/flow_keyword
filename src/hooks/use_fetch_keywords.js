import { useRecoilState } from "recoil"
import searchListState from "../recoil/atoms/search_list_state"
import { getSearchWords } from "../axios/axios"
/**
 * @description 단어를 받아서 해당단어가 포함된 데이터를 상태로 등록해주는 훅함수
 */
const useFetchKeywords = () => {
  const [searchData, setSearchData] = useRecoilState(searchListState)

  const fetchSearchList = async (word) => {
    const data = await getSearchWords(word)
    setSearchData(data)
  }

  return { searchData, setSearchData, fetchSearchList }
}

export default useFetchKeywords
