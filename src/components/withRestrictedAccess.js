
import { useAuth } from "@/context/Auth";
import { useRouter,redirect } from "next/navigation";
import { useEffect } from "react";


export function withRestrictedAccess(WrappedComponent) {
  const ComponentWithAuth = (props) => {
    const { authenticated } = useAuth();
    

    useEffect(() => {
      if(!authenticated){
        redirect('/login');
      }
    }, [authenticated]);

    return authenticated ? <WrappedComponent {...props} /> : null;
  };

  return ComponentWithAuth;
}

// with role

// import { useRouter } from 'next/router';
// import { useEffect } from 'react';
// import { useAuth } from '@/context/Auth';


// const withRestrictedAccess = (WrappedComponent, allowedRoles = []) => {
//   const WithRestrictedAccess = (props) => {
//     const router = useRouter();
//     const {authenticated} = useAuth();

//     useEffect(() => {
//       if (!authenticated || !allowedRoles.includes(userRole)) {
//         router.push('/login'); // Redirect to the login page if not authenticated or authorized
//       }
//     }, [authenticated, userRole]);

//     if (!authenticated || !allowedRoles.includes(userRole)) {
//       // Return null while the redirect is in progress
//       return null;
//     }

//     // Render the original component if the user is authenticated and authorized
//     return <WrappedComponent {...props} />;
//   };

//   return WithRestrictedAccess;
// };

// export default withRestrictedAccess;
