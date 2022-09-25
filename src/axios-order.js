import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-8e87f-default-rtdb.firebaseio.com/",
});

export default instance;
