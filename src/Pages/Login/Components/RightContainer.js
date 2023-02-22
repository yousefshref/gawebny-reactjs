import Input from '../../../Components/Input/Input'
import { Button } from '../../../Components/Button/Button'
import { AuthContextProvider } from '../../../Context/AuthContext'
import { useContext } from 'react'
import '../style.css'

export const RightContainer = () => {
    const auth = useContext(AuthContextProvider)

    return (
        <div className='rightcontainer_container' >
            <h1>!! اهلا بك من جديد</h1>
            <div className='form_container'>
                <br />
                <Input
                    placeholder='أدخل اسمك'
                    onChange={(e) => auth.setUsername(e.target.value)}
                />
                <Input
                    placeholder='كلمة المرور'
                    onChange={(e) => auth.setPass(e.target.value)}
                />
                <p>{auth?.logInData?.detail}</p>
                <div>
                    <Button
                        text={'تسجيل'}
                        onClick={() => {
                            auth.username.length !== 0 && auth.pass.length !== 0 ? auth.logIn() : alert('لا تترك الخانات فارغة')
                        }}
                    />
                </div>
            </div>
            <hr />
            <div className='rightcontainer_botton'>
                <h3>يمكنك التسجيل أيضا عبر</h3>
                <div>
                    <img alt='google_login' src='./assets/google_login.png' />
                    <img alt='apple_login' src='./assets/apple_login.png' />
                </div>
            </div>
        </div >
    )
}