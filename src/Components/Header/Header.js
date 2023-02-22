import { Button } from "../Button/Button"
import './style.css'

export const Header = (props) => {

    return (
        <div className="header_container">
            <img className="header_img" src="./assets/gawebny_logo_without_BG_NAME.png" alt="gawebny logo" />
            <div className="header_login_container">
                <p>{props.text}</p>
                <Button onClick={props.onClick} text={props.btn} />
            </div>
        </div>
    )
}