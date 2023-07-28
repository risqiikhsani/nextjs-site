import { auth_api } from "./auth";
import { getCookie,setCookie } from "./cookies";

// Function to refresh the access token
export async function refreshAccessToken() {
  try {
    const refresh_token = getCookie("refresh_token");

    // Make a request to your backend or authentication server to refresh the token
    const response = await auth_api.refresh_access_token(refresh_token);
    const new_access_token = response.data.access_token;

    // Save the new access token to your storage (e.g., localStorage, Redux store)
    // Replace 'your_access_token_storage_key' with your actual storage key
    setCookie("access_token",new_access_token,7)

    // Return the new access token
    return new_access_token;
  } catch (error) {
    // Handle the token refresh error, e.g., redirect to login page, log out the user, etc.
    throw new Error("Failed to refresh access token.");
  }
}
