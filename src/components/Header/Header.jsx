import logo from '../../images/coinparty_2.png'

const Header = (props) => {
    return (
        <header className="header">
            <div className='header__wrapper'>
                <nav className='header__navigation'>
                    <img className="header__logo" src={logo} alt="лого"/>
                    <ul className='header__link-list'>
                        <li className='header__link-element'>Токены</li>
                        <li className='header__link-element'>Портфолио</li>
                        <li className='header__link-element'>О Нас</li>
                        {props.isAuth ? 
                        <li className='header__link-element'>Настройки</li> :
                        <></>}
                    </ul>
                </nav>
                <div className='header__container'>
                    {props.isAuth ?
                        <>
                            <span className='header__username'>username</span>
                            <span className='header__balance'>Баланс: $0</span>
                        </>
                        :
                        <>
                            <button className='header__button header__button_twitch'>Войти через Twitch</button>
                            <button className='header__button header__button_goggle'>Войти через Goggle</button>
                        </>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;