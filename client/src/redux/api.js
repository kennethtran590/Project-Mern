import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3001" });

export const signIn = (formData) => API.post("/users/signin", formData);
