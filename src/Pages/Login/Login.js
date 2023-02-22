import { Header } from '../../Components/Header/Header'
import { LeftContainer } from '../../Components/AuthLeftContaiener/LeftContainer'
import { RightContainer } from './Components/RightContainer'
import { useNavigate } from "react-router-dom"
import './style.css'

export const Login = () => {
    const navigate = useNavigate()
    return (
        <>
            <Header onClick={() => navigate('/signup')} btn={'انشئ حساب'} text={'هل انت مستخدم جديد؟'} />
            <div className="login_container">
                <LeftContainer />
                <RightContainer />
            </div>
        </>
    )
}