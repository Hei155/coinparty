import telegramLogo from '../../images/telegram_plane_brands_3.png';
import twitterLogo from '../../images/twitter_brands_2.png';
import vkLogo from '../../images/vk_monochrome_compact_logo_4.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__about'>
                <h2 className='footer__logo'>coinparty</h2>
                <ul className='footer__icon-list'>
                    <li className='footer__icon-element'><img className='footer__icon' src={telegramLogo}/></li>
                    <li className='footer__icon-element'><img className='footer__icon' src={vkLogo}/></li>
                    <li className='footer__icon-element'><img className='footer__icon' src={twitterLogo}/></li>
                </ul>
                <p className='footer__contacts'>Coinparty 2021</p>
                <p className='footer__contacts'>Не сотрудничаем с Twitch</p>
            </div>
            <div className='footer__info'>
                <h3 className='footer__quotes'>Важные вопросы</h3>
                <ul className='footer__quotes-list'>
                    <li className='footer__quotes-elements'>Как это работает?</li>
                    <li className='footer__quotes-elements'>Зачем мне нужны токены?</li>
                    <li className='footer__quotes-elements'>Как стример с этого заработает?</li>
                    <li className='footer__quotes-elements'>Как зарабатывает Coinparty?</li>
                </ul>
                <h3 className='footer__dis'>Дисклеймер</h3>
                <p className='footer__dis-text'>Все цифровые активы, представленные на Coinparty.me, не являются платежным средством.</p>
                <p className='footer__dis-text'>Участники рынка Coinparty.me совершают сделки на свой страх и риск. Не является инвестиционным советом.</p>
            </div>
        </footer>
    )
}

export default Footer;