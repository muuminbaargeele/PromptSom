import axios from 'axios'

export async function postData(question: string | number) {
  try {
    const response = await axios.post(
      'https://openai-api-7xqk.onrender.com/respond',
      {
        topic: question,
      }
    )
    // console.log(response)

    return response.data.message
  } catch (error) {
    console.log(error)
  }
}
