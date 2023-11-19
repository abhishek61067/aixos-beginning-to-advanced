import axios from "axios";

const AuthFetch = axios.create({
  baseURL: "https://course-api.com",
});
// interceptors
// for request
AuthFetch.interceptors.request.use(
  (request) => {
    request.headers.common["Accept"] = "application/json";
    console.log("request sent successfully");
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// for response
AuthFetch.interceptors.response.use(
  (response) => {
    console.log("Received response successfully");
    return response;
  },
  (error) => {
    console.log("erorr: ", error);
    // error handling based on different http errors
    if (error.response.status === "401") {
      window.location = `/`;
    }
    return Promise.reject(error)
  }
);

export default AuthFetch;
