import axios from "axios"

const getSearchWords = async (word) => {
  const response = await axios.get(`http://localhost:3000/search?key=${word}`)
  console.log(response.data)
  return response.data
}

export { getSearchWords }
