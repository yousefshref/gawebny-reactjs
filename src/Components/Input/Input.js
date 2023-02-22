import './style.css'

const Input = (props) => {
    return (
        <input
            placeholder={props.placeholder}
            onChange={props.onChange}
            className='input'
        />
    )
}
export default Input