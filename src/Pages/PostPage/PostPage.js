import React, { useEffect, useState } from 'react'
import './style.css'
import { server } from '../../server'

export const PostPage = () => {
    const [post, setPost] = useState([])
    const [postId, setPostId] = useState('')
    const [userId, setUserId] = useState('')
    const [comment, setComment] = useState('')
    const date = new Date()

    const ss = document.getElementById('ss')

    const getPost = async () => {
        let response = await fetch(`${server}getPost/${localStorage.getItem('gawebny_postId')}`)
        let data = response.json()
        data.then((e) => setPost(e))
    }

    const upPost = async (e) => {
        setPostId(e.id)
        setUserId(localStorage.getItem('gawebny_user_id'))
    }

    const createComment = async () => {
        let res = await fetch(`${server}addCommentField/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: localStorage.getItem('gawebny_user_id'),
                name: localStorage.getItem('gawebny_username'),
                comment: comment,
                date: date.toLocaleDateString() + ' - ' + date.toLocaleTimeString()
            })
        })
        res.json().then(async (e) =>
        await (await fetch(`${server}addComment/${localStorage.getItem('gawebny_postId')}/${e.id}`)).json().then((e) => (e))
        ).then((e) => {
            setComment('')
            setTimeout(function () {
                if(e){
                    ss?.scrollTo(0, ss.scrollHeight)
                }
            }, 500);
        })
    }
      
      useEffect(() => {
          getPost()
          if (postId !== '' && userId !== '') {
              async function nn() {
                  await fetch(`${server}updatePosts/${postId}/${userId}`)
                }
                nn()
            }
    }, [post, post.comments, postId, userId])
    return (
        <div className='postpage_container'>
            <div className='postpgae_head'>
                <div>
                    <img alt="user profile" src="../assets/user.png" />
                    <div>
                        <p>{post.name}</p>
                        <div>
                            <span>{post.typeof === 'ask' ? "سؤال" : "منشور"}</span>
                        </div>
                    </div>
                </div>
                <img alt="more" src="../assets/more.png" />
            </div>
            <hr />
            <div className='postpgae_post'>
                <p>
                    {post?.post}
                </p>
            </div>
            <hr />
            <div className='postpgae_actions'>
                <div className='actions_up'>
                    <img onClick={() => {
                        upPost(post)
                    }
                    } alt="vote up" src="../assets/up.png" />
                    <span>{post.ups === 0 ? '0' : post?.ups?.length}</span>
                </div>
                <div className='actions_down'>
                    <img alt="vote down" src="../assets/down.png" />
                    {/* <span>{e.down === null ? '0' : null}</span> */}
                </div>
                <div className='actions_comment'>
                    <img alt="gawebny comments" src="../assets/chat.png" />
                    <span>{post.comments?.length}</span>
                </div>
            </div>
            <br />
            <hr />
            <div id='ss'>
                {post?.comments?.map((e) =>
                    <div key={e.id} className='postpage_comments'>
                        <div className='comments_uo'>
                            <img alt='comment profile' src='../assets/user.png' />
                            <p>{e?.name}</p>
                        </div>
                        <div className='comments_down'>
                            <p>{e?.comment}</p>
                            <span>{e?.date}</span>
                        </div>
                    </div>
                )}
            </div>
            <hr />
            <div className='addcomment_container'>
                <input
                    onChange={(e) => setComment(e.target.value)}
                    placeholder='أرسل تعليق'
                    value={comment}
                />
                <button onClick={() => {
                    createComment()
                    
                }}>نشر</button>
            </div>
        </div>
    )
}

