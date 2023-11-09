import axios from 'axios'

export async function postData(question: string | number) {
  try {
    const response = await axios.post(
      'https://baargeelle.albasrawie.com/respond',
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
