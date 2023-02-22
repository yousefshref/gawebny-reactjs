import { useNavigate } from "react-router-dom"
import { LeftContainer } from "../../Components/AuthLeftContaiener/LeftContainer"
import { Header } from "../../Components/Header/Header"
import { RightContainer } from "./Components/RightContainer"

export const Signup = () => {
    const navigate = useNavigate()
    return (
        <>
            <Header onClick={() => navigate('/login')} btn={'سجل الدخول'} text={'هل لديك حساب بالفعل؟'} />
            <div className="signup_container">
                <LeftContainer />
                <RightContainer />
            </div>
        </>
    )
}