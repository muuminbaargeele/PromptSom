import axios from 'axios';

async function postData() {
  try {
    const response = await axios.post('http://127.0.0.1:2026/respond', {
      "topic": "haye",
    });
    console.log(response.data.message);
    return response.data.message;
  } catch (error) {
    console.log(error)
  }
}
export default postData
