import axios from "axios";

const instance = axios.create({
  // The API (cloud function) URL
  // ## Local one
  // baseURL: "http://localhost:5001/challenge-7eb5d/us-central1/api",
  // ## firebase functions one
  baseURL: "https://us-central1-challenge-7eb5d.cloudfunctions.net/api",
});

export default instance;
