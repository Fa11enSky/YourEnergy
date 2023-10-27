import axios from 'axios';

async function getQuoteDay() {
  try {
    const response = await axios.get(
      'https://your-energy.b.goit.study/api/quote'
      );
      return response.data
  } catch (error) {
    console.log(error);
  }
}

export {getQuoteDay}