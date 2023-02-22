import jwtDecode from "jwt-decode"
import { createContext, useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { server } from "../server"

export const AuthContext = ({ children }) => {
    const [data, setData] = useState([])
    const [logInData, setLoginDatat] = useState(localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [pass2, setPass2] = useState('')
    const navigate = useNavigate()

    const createUp = async () => {
        const res = await fetch(`${server}addPostUp/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: localStorage.getItem('gawebny_username'),
                username: localStorage.getItem('gawebny_user_id')
            })
        })
        res.json().then((e) => console.log(e))
    }

    const signUp = async () => {
        await fetch(`${server}register/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                email: email,
                password: pass,
                password2: pass2
            })
        })
            .then((response) => response.json())
            .then((data) => setData(data))
    }

    const logIn = async () => {
        let response = await fetch(`${server}api/token/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                password: pass
            })
        })
        let data = response.json()
        data.then((e) => setLoginDatat(e))
        data.then((e) => {
            if (e.access) {
                localStorage.setItem('authTokens', JSON.stringify(e))
                const user = jwtDecode(e.access)
                localStorage.setItem('gawebny_username', user.username)
                localStorage.setItem('gawebny_user_id', user.user_id)
                navigate('/')
            }
        })
        data.then(() => {
            if (localStorage.getItem('gawebny_username') && localStorage.getItem('gawebny_user_id')) {
                createUp()
            }
        })
    }

    useEffect(() => {
        if (data.username === username) {
            localStorage.setItem('gawebny_username', data.username)
            navigate('/')
        }
    }, [username, email, pass, pass2, data, logInData, navigate])

    return (
        <AuthContextProvider.Provider value={{
            username, setUsername,
            email, setEmail,
            pass, setPass,
            pass2, setPass2,
            signUp, logIn,
            data, logInData
        }}>
            {children}
        </AuthContextProvider.Provider>
    )
}

export const AuthContextProvider = createContext()