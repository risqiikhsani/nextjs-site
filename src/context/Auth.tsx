"use client";

import { my } from "@/api/app";
import { deleteCookie } from "@/api/cookies";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearUserProfile, setUserProfile } from "@/redux/slices/userProfileSlice";
import { clearUser, setUser } from "@/redux/slices/userSlice";


import { useRouter } from "next/navigation";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface IAuthContext {
  authenticated: boolean;
  handleLoginSuccess: () => void;
  logoutUser: () => void;
}


const authContextDefaultValues: IAuthContext = {
  authenticated: false,
  handleLoginSuccess: () => {},
  logoutUser: () => {},
};

const AuthContext = createContext<IAuthContext>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

interface Props {
  children: ReactNode;
}



export function AuthHandler({ children }: Props) {
  const [authenticated,setAuthenticated] = useState(false)
  const router = useRouter(); 
  const dispatch = useAppDispatch();  

  const registerUser = () => {};

  const user = useAppSelector((state) => state.user)

  const getUserData = async (): Promise<boolean> => {
    console.log("getUserData is running")
    try {
      // get user
      const response = await my.get_user();
      const data = response.data;
  
      // Set user data
      dispatch(setUser({
        id: data.id,
        email: data.email,
        is_staff: data.is_staff,
        date_joined: data.date_joined,
        phone_number: data.phone_number,
        email_verified: data.email_verified,
      }))  
      return true;
    } catch (error) {
      console.log("error fetching user data")
      return false;
    }
  };

  const getUserProfileData = async (): Promise<boolean> => {
    console.log("getUserProfileData is running")
    try {
      // get user
      const response = await my.get_profile();
      const data = response.data;
  
      // Set user data
      dispatch(setUserProfile({
        name: data.name,
        public_username: data.public_username,
        about: data.about,
        profile_picture: data.profile_picture,
        poster_picture: data.poster_picture,
      }))  
      return true;
    } catch (error) {
      console.log("error fetching user profile data")
      return false;
    }
  };

  const logoutUser = () => {
    // Perform the logout logic (e.g., remove cookies, clear local storage)
    deleteCookie("access_token")
    deleteCookie("refresh_token")
    // ...
  
    // Clear user data and set authenticated to false
    dispatch(clearUser());
    dispatch(clearUserProfile());
    setAuthenticated(false);
  };

  const handleLoginSuccess = async () => {
    console.log("handleLoginSuccess is running")
    // Set cookies or perform any other login logic
    // ...
    
    try {
  
      // Fetch user data and user profile data simultaneously using Promise.all
      const [userDataSuccess, userProfileDataSuccess] = await Promise.all([
        getUserData(),
        getUserProfileData(),
      ]);
  
      // If both fetches are successful, set the authenticated state to true
      if (userDataSuccess && userProfileDataSuccess) {
        setAuthenticated(true);
      } else {
        // Handle the case when either or both fetches failed
        // (e.g., show an error message or perform some other actions)
        console.log('Login failed: Some data fetches were unsuccessful.');
      }
    } catch (error) {
      // Handle any errors that occurred during login or fetches
      console.error('Error during login:', error);
      // You can also set an error state here to display an error message to the user
    }
  };

  const value = {
    authenticated,
    handleLoginSuccess,
    logoutUser,
  };

  useEffect(() => {
    // Fetch user data and user profile data simultaneously using Promise.all
    Promise.all([getUserData(), getUserProfileData()])
      .then(([userDataSuccess, userProfileDataSuccess]) => {
        // If both fetches are successful, set the authenticated state to true
        if (userDataSuccess && userProfileDataSuccess) {
          setAuthenticated(true);
        }
      })
      .catch((error) => {
        // Handle any errors that occurred during fetch
        console.error('Error fetching data:', error);
      });
  }, []);



  return (
    <>
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    </>
  );
}