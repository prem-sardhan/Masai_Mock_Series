import axios from "axios";
export const postData = (payload) => () => {
  axios
    .post(`https://masai-mock.onrender.com/dogs`, payload)
    .then(() => alert("Dada added successfully"));
};
