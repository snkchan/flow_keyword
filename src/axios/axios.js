import axios from "axios"
/**
 * @param {string} word 검색단어
 * @description 검색 단어를 입력하면 해당 글자가 포함된 단어 목록을 불러옵니다.
 */
const getSearchWords = async (key) => {
  try {
    const response = await axios.get(`http://localhost:3000/search`, {
      params: { key },
    })
    return response.data
  } catch (err) {
    return err.response.data
  }
}

export { getSearchWords }
