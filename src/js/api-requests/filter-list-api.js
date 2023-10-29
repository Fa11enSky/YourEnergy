import axios from "axios";

export function getExercisesCategory(params) {
   
   return axios.get('https://your-energy.b.goit.study/api/filters', { params })
}
