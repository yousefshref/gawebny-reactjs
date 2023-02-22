import './style.css'

export const Button = (props) => {
    return (
        <button id='header_btn' onClick={props.onClick} className='header_btn'>{props.text}</button>
    )
}