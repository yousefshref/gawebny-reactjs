import axios from "axios"
import { createContext, useEffect, useState } from "react"
import { server } from "../server"

export const PostContext = ({ children }) => {

    const [data, setData] = useState([])

    const getPosts = async () => {
        let res = await axios.get(`${server}getPosts/`)
        setData(res.data)
    }

    useEffect(() => {
        getPosts()
    }, [data])

    return (
        <PostContextProvider.Provider value={{ data }}>
            {children}
        </PostContextProvider.Provider>
    )
}

export const PostContextProvider = createContext()