import axios from "axios";

const search = (query) =>
  axios.get(`https://api.github.com/repositories/${query}/`);

export default search;
