import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostContextProvider } from "../../Context/PostContext";
import { server } from "../../server";

export const Posts = () => {
    const posts = useContext(PostContextProvider)

    const [postId, setPostId] = useState('')
    const [userId, setUserId] = useState('')

    const upPost = async (e) => {
        setPostId(e.id)
        setUserId(localStorage.getItem('gawebny_user_id'))
    }

    const navigate = useNavigate()

    useEffect(() => {
        if (postId !== '' && userId !== '') {
            async function nn() {
                const response = await fetch(`${server}updatePosts/${postId}/${userId}`)
                response.json().then((e) => console.log(e))
            }
            nn()
        }
    }, [postId, userId])
    return (
        <>
            {posts.data.map((e) =>
                <div key={e.id} id="posts_container">
                    <div className="posts_top_container">
                        <div>
                            <img alt="user profile" src="./assets/user.png" />
                            <div>
                                <p>{e.name}</p>
                                <div>
                                    <span>{e.typeof === 'ask' ? "سؤال" : "منشور"}</span>
                                </div>
                            </div>
                        </div>
                        <img alt="more" src="./assets/more.png" />
                    </div>
                    <div>
                        <p>
                            {e.post}
                        </p>
                    </div>
                    <div className="posts_add_action">
                        <div>
                            <img onClick={() => {
                                upPost(e)
                            }
                            } alt="vote up" src="./assets/up.png" />
                            <span>{e.ups.length}</span>
                        </div>
                        <div>
                            <img alt="vote down" src="./assets/down.png" />
                            {/* <span>{e.down === null ? '0' : null}</span> */}
                        </div>
                        <div>
                            <img onClick={() =>{ 
                                localStorage.setItem('gawebny_postId',e.id)
                                navigate(`/post/${e.id}`)
                                }} alt="gawebny comments" src="./assets/chat.png" />
                            <span>{e?.comments?.length}</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
