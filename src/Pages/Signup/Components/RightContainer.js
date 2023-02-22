import { useContext } from 'react'
import { Button } from '../../../Components/Button/Button'
import Input from '../../../Components/Input/Input'
import { AuthContextProvider } from '../../../Context/AuthContext'
import '../style.css'

export const RightContainer = () => {
    const auth = useContext(AuthContextProvider)
    return (
        <div className='rightcontainer_container'>
            <h1>لديك معرفة للجواب علي الأسئلة؟</h1>
            <div className='form_container'>
                <br />
                <Input
                    placeholder='أدخل اسمك'
                    onChange={(e) => auth.setUsername(e.target.value)}
                />
                <p>{auth?.data?.username}</p>
                <Input
                    placeholder='بريدك الألكتروني'
                    onChange={(e) => auth.setEmail(e.target.value)}
                />
                <p>{auth?.data?.email}</p>
                <Input
                    onChange={(e) => auth.setPass(e.target.value)}
                    placeholder='كلمة المرور'
                />
                <p>{auth?.data?.password}</p>
                <Input
                    onChange={(e) => auth.setPass2(e.target.value)}
                    placeholder='تأكيد كلمة المرور'
                />
                <p>{auth?.data?.password2}</p>
                <div>
                    <Button
                        text={'تسجيل'}
                        onClick={() => auth.signUp()}
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
        </div>
    )
}