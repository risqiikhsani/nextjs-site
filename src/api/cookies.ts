export function setCookie(
  name: string,
  value: string | boolean,
  expirationDays: number
): void {
  try {
    const date = new Date();
    date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000); // Convert days to milliseconds
    const expires = "expires=" + date.toUTCString();
    const cookieValue = `${name}=${value}; ${expires}; path=/; SameSite=Strict; secure`;
    document.cookie = cookieValue;
  } catch (error) {
    // Handle the error gracefully, e.g., log the error, show a user-friendly message, or silently ignore it.
    console.error("Error setting cookie:", error);
  }
}


export function getCookie(name: string): string | null {
  try {
    const cookieName = `${name}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");

    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim();
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }

    return null; // Return null if the cookie is not found.
  } catch (error) {
    // Handle the error gracefully, e.g., log the error, show a user-friendly message, or return a default value.
    console.error("Error getting cookie:", error);
    return null;
  }
}

export function deleteCookie(name: string): void {
  try {
    const date = new Date();
    date.setTime(date.getTime() - 1); // Set expiration date to the past (one millisecond ago)
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=; ${expires}; path=/`;
  } catch (error) {
    // Handle the error gracefully, e.g., log the error, show a user-friendly message, or silently ignore it.
    console.error("Error deleting cookie:", error);
  }
}

