import pepeHat from '../../images/pepeHat.png';
import exclamation from '../../images/exclamation.png';

const TokenStats = () => {
    return (
        <section className="tokenstats">
            <div className='tokenstats__container'>
                <div className="tokenstats__my">
                    <div className='tokenstats__header'>
                        <div className="tokenstats__values">
                            <span className="tokenstats__cost">$1,00</span>
                            <span className="tokenstats__variation">+0,00%</span>
                        </div>
                        <ul className="tokenstats__period-list">
                            <li className="tokenstats__period-element">Live</li>
                            <li className="tokenstats__period-element">1Ч</li>   
                            <li className="tokenstats__period-element">1Д</li>
                            <li className="tokenstats__period-element">1М</li>
                            <li className="tokenstats__period-element">1Г</li>
                            <li className="tokenstats__period-element">ВСЁ ВРЕМЯ</li>
                        </ul>
                    </div>
                    <img src={pepeHat} alt="Пепе в пижаме" className='tokenstats__pepe'/>
                    <p className='tokenstats__info-text'><img className='tokenstats__exclamation' alt="Восклицательный знак" src={exclamation}/>Биржа ещё не открыта. Биржа откроется по завершению продажи всех #BRFF.</p>
                    <p className='tokenstats__info-text'>После продажи всех #BRFF, стример и Coinparty разделит сумму в пропорции 60/40.</p>
                    <div className='tokenstats__contacts'>
                        <div className='tokenstats__contacts-container'>
                            <span className='tokenstats__sell'>189 из 8,000 токенов продано</span>
                            <div className='tokenstats__partion'/>
                            <span className='tokenstats__nick'>Сообщество bratishkinoff</span>
                            <div>
                                <img/>
                                <img/>
                            </div>
                            <span className='tokenstats__token-title'>Статистика токена</span>
                            <div className='tokenstats__statistic'>
                                <table className='statistic__table'>
                                    <tr className='statistic__table__row'>
                                        <td className='statistic__title'>Капитализация</td>
                                        <td className='statistic__title'>Оборот (24ч)</td>
                                        <td className='statistic__title'>Всего токенов</td>
                                    </tr>
                                    <tr className='statistic__table__row'>
                                        <td className='statistic__table-text'>$8,000</td>
                                        <td className='statistic__table-text'>$0</td>
                                        <td className='statistic__table-text'>$8,000</td>
                                    </tr>
                                    <tr className='statistic__table__row'>
                                        <td className='statistic__title'>Бонусы (30д)</td>
                                        <td className='statistic__title'>Держателей</td>
                                        <td className='statistic__title'>Популярность</td>
                                    </tr>
                                    <tr className='statistic__table__row'>
                                        <td className='statistic__table-text'>$0</td>
                                        <td className='statistic__table-text'>189</td>
                                        <td className='statistic__table-text'>#1</td>
                                    </tr>
                                </table>
                            </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="tokenstats__buy">
                <div className='tokenstats__tokens-info'>
                    <strong className='tokenstats__buy-title'>Купить</strong>
                    <p className='tokenstats__buy-subtitle'>В портфолио 0 $BRFF</p>
                    <span className='tokenstats__token-count'>0</span>
                    <p className='tokenstats__buy-subtitle tokenstats__buy-subtitle_light'>Введите общее кол-во токенов</p>
                </div>
                <button className='tokenstats__btn-buy'>Купить $BRFF</button>
            </div>
            <div className="tokenstats__trends">

            </div>
            <div className="tokenstats__online">
                <h3>Средний онлайн</h3>
            </div>
            <div className="tokenstats__bonus"> 
                <h3>Бонусы SBRFF</h3>
            </div>
            <div className="tokenstats__works">
                <h3>Как работает токен</h3>
                <span>Что такое токен понятным языком</span>
                <p>Токен (или токен-акция) - это цифровой актив, представляющий право на долю в конкретной организации, или в нашем случае, в публичном размещении стримера. Токены на Coinparty - это цифровой аналог классических акций фрндового рынка.</p>
            </div>
        </section>
    )
}

export default TokenStats;