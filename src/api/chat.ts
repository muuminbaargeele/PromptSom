import axios from 'axios';

async function postData() {
  try {
    const response = await axios.post('http://127.0.0.1:2026/respond', {
      "topic": 'Hey',
    });
    console.log('Data posted successfully:', response.data);
    return response.data;
  } catch (error) {
    console.log(error)
  }
}
export default postData
