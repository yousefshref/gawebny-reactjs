import './style.css'

export const HomeHeader = () => {
    return (
        <div className="home_header">
            <div className='homeheader_left'>
                <img alt='gawebny logo' src="./assets/gawebny_logo_without_BG_NAME.png" />
                <input
                    placeholder='أبحث عن سؤال'
                />
            </div>
            <div className='homeheader_right'>
                <img src='./assets/home.png' alt='home' />
                <img src='./assets/add.png' alt='add ask' />
                <img src='./assets/bell.png' alt='notification' />
                <img src='./assets/list.png' alt='category' />
                <img src='./assets/user.png' alt='profile' />
            </div>
            <div className="dropdown">
            <img src='./assets/menu.png' alt='home' />
                <div class="dropdown-content">
                    <img src='./assets/home.png' alt='home' />
                    <img src='./assets/add.png' alt='add ask' />
                    <img src='./assets/bell.png' alt='notification' />
                    <img src='./assets/list.png' alt='category' />
                    <img src='./assets/user.png' alt='profile' />
                </div>
            </div>
        </div>
    )
}