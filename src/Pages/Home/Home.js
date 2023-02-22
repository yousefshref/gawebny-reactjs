import { useContext, useState } from "react"
import { AuthContextProvider } from "../../Context/AuthContext"
import { server } from "../../server"
import { Ads } from "./Ads"
import { HomeHeader } from "./HomeHeader"
import { Posts } from "./Posts"

export const Home = () => {
    const auth = useContext(AuthContextProvider)
    // console.log(auth.logInData.user_id);

    const date = new Date()
    const [post, setPost] = useState('')

    const addPost = async () => {
        const response = await fetch(`${server}addPosts/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: auth.logInData.username,
                typeof: "post",
                post: post,
                post_date: date.toLocaleDateString() + ' - ' + date.toLocaleTimeString(),
                username: auth.logInData.user_id
            })
        })
        response.json().then(() => {
            setPost('')
        })
    }
    return (
        <>
            <HomeHeader />
            <div id="home_container">
                <div>
                    <div id="home_left_container">
                        <div className="post_container">
                            <div>
                                <div>
                                    <img alt="user" src="./assets/user.png" />
                                    <input
                                        placeholder="ما الذي تفكر فيه؟"
                                        alt="ask question"
                                        onChange={(e) => setPost(e.target.value)}
                                        value={post}
                                    />
                                    <button onClick={() => addPost()}>أنشر</button>
                                </div>
                                <div>
                                    <p>- هل تريد ان تسأل عن شئ ؟</p>
                                    &nbsp; &nbsp;
                                    <p>! أنشئ سؤالا الأن</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Posts />
                </div>
                <Ads />
            </div>
        </>
    )
}