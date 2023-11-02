import axios from 'axios';

async function postData() {
  try {
    const response = await axios.post('http://127.0.0.1:2026/respond', {
      "topic": 'Hey',
    });
    console.log('Data posted successfully:', response.data);
    return response.data;
  } catch (error) {
    // if (axios.isAxiosError(error)) {
    //   // If the error is an AxiosError, we know it will have certain properties
    //   const axiosError = error as AxiosError;
    //   if (axiosError.response) {
    //     console.error('Error data:', axiosError.response.data);
    //     console.error('Error status:', axiosError.response.status);
    //     console.error('Error headers:', axiosError.response.headers);
    //   } else if (axiosError.request) {
    //     console.error('Error request:', axiosError.request);
    //   } else {
    //     console.error('Error message:', axiosError.message);
    //   }
    // } else if (error instanceof Error) {
    //   // This is a generic error
    //   console.error('Error message:', error.message);
    // } else {
    //   // The error is of unknown type
    //   console.error('An unexpected error occurred');
    // }
    // return null;
    console.log(error)
  }
}

// Example of how to use the postData function
// postData().then((data) => {
//   if (data) {
//     console.log('Received data:', data);
//   }
// });

export default postData
