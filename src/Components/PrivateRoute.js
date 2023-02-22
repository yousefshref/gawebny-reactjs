import { Navigate } from "react-router-dom"

export const PrivateRoute = ({children}) => {
    return localStorage.getItem('gawebny_usernam')?children:<Navigate to={'/login'}/> 
}
