import axios from "axios";

import { refreshAccessToken } from "./global_functions";
import { getCookie } from "./cookies";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});


// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    const access_token = getCookie("access_token")
    if (access_token) {
      config.headers["Authorization"] = `Bearer ${access_token}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response, // Just return the response for successful requests
  async (error) => {
    const originalRequest = error.config;

    // Check if the error status is 401 (Unauthorized) and there's no retry attempt made yet
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        // Refresh the access token
        const new_access_token = await refreshAccessToken();

        // Update the original request's Authorization header with the new access token
        originalRequest.headers["Authorization"] = `Bearer ${new_access_token}`;

        // Retry the original request with the new access token
        return instance(originalRequest);
      } catch (refreshError) {
        // Handle the token refresh error, e.g., redirect to login page, log out the user, etc.
        throw refreshError;
      }
    }

    // If the error is not a 401 or token refresh also failed, reject the request with the error
    return Promise.reject(error);
  }
);

export default instance;
