

// Function to set data to localStorage
export function setToLocalStorage(key: string, value:any):void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Handle errors if any
    console.error("Error while setting data to localStorage:", error);
  }
}

// Function to get data from localStorage
export function getFromLocalStorage(key: string):void | null {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    // Handle errors if any
    console.error("Error while getting data from localStorage:", error);
    return null;
  }
}



