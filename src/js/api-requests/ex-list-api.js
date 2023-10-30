import axios from 'axios';

export async function getExercisesService(filter, category, page, perPage) {
  try {
    const exList = await axios.get(
      `https://your-energy.b.goit.study/api/exercises?${filter}=${category}&page=${page}&limit=${perPage}`
      )
      const data = await exList.data;
      return data;
  } catch (error) {
    console.log(error);
  }
}
