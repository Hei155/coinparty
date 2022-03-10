import logo from '../../images/coinparty_2.png'

const Header = () => {
    return (
        <header className="header">
            <nav className='header__navigation'>
                <img className="header__logo" src={logo} alt="лого"/>
                <ul className='header__link-list'>
                    <li className='header__link-element'>Токены</li>
                    <li className='header__link-element'>Портфолио</li>
                    <li className='header__link-element'>О Нас</li>
                    <li className='header__link-element'>Настройки</li>
                </ul>
            </nav>
            <div className='header__container'>
                <span className='header__username'>username</span>
                <span className='header__balance'>Баланс: $0</span>
            </div>
        </header>
    )
}

export default Header;