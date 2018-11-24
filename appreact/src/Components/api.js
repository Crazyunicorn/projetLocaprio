import axios from "axios";
// create an axios object with the common settings we need for all requests
// (reduces the repetition between components)
const api = axios.create({
  // the initial part of all our backend route URLs
  baseURL: "http://localhost:5000",
  //baseURL: `${process.env.REACT_APP_SERVER_URL}/api`, ==> better
  withCredentials: true
  // allows axios to send cookies to the backend
});

export default api;
