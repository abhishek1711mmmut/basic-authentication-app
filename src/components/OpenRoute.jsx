// This will prevent authenticated users from accessing this route

import { Navigate } from "react-router-dom"
import { useAuth } from "../context/authContext"

function OpenRoute({ children }) {
    const { token } = useAuth();
  
    if (token === null) {
      return children
    } else {
      return <Navigate to="/dashboard/my-images" />
    }
  }
  
  export default OpenRoute