const TokenStats = () => {
    return (
        <section className="tokenstats">
            <div>
                <div className="tokenstats__my">
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                    <ul>
                        <li>Live</li>
                        <li>1Ч</li>   
                        <li>1Д</li>
                        <li>1М</li>
                        <li>1Г</li>
                        <li>ВСЁ ВРЕМЯ</li>
                    </ul>
                </div>
            </div>
            <div className="tokenstats__buy">

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