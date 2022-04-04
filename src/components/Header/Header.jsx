import logo from '../../images/coinparty_2.png'
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className="header">
            <div className='header__wrapper'>
                <nav className='header__navigation'>
                    <img className="header__logo" src={logo} alt="лого"/>
                    <ul className='header__link-list'>
                        <li className='header__link-element'><Link className='header__link' to="/token">Токены</Link></li>
                        <li className='header__link-element'><Link className='header__link' to="/portfolio">Портфолио</Link></li>
                        <li className='header__link-element'><Link className='header__link' to="/">О Нас</Link></li>
                        {
                        props.isAuth ? 
                        <li className='header__link-element'><Link className='header__link' to="/settings">Настройки</Link></li> :
                        <>
                        </>
                        }
                    </ul>
                </nav>
                <div className='header__container'>
                    {props.isAuth ?
                        <div className='header__user-container'>
                            <span className='header__username'>username</span>
                            <span className='header__balance'>Баланс: $0</span>
                        </div>
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