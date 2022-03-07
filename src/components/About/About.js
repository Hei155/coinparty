const About = () => {
    return (
        <section className="about">
            <div className="about__info about__info_coin">
                <h3 className="about__title about__title_coin">Что такое Coinparty?</h3>
                <p className="about__text about__text_coin">Мы помогаем креаторам создавать собственную экономику. 
Токен, основанный на интересе, медийности и популярности.</p>
            </div>
            <div className="about__info about__info_token">
                <h3 className="about__title about__title_token">Почему именно токен?</h3>
                <p className="about__text about__text_token">Токен идеально подходит под концепцию биржи, 
на которой интерес формируется сообществом.</p>
                <p className="about__text about__text_action">Представь, что токен - это акция, 
стример - публичная компания, а Coinparty - биржа.</p>
            </div>
            <div className="about__info about__info_tokens">
                <h3 className="about__title about__title_tokens">Зачем мне токен?</h3>
                <p className="about__text">Удерживая токен в портфолио, ты сможешь получать часть 
от дохода креатора на нашей бирже.</p>
                <p className="about__text about__text_growth">Так как токены после размещения больше не выпускаются,
они могут дорожать при росте спроса и интереса к токену/стримеру.</p>
            </div>
            <div className="about__info about__info_streamer">
                <h3 className="about__title about__title_streamer">Что получит стример?</h3>
                <p className="about__text">Стример получает 60% от суммы продажи токенов при размещении, 
а также комиссию в размере 1,5% от обьёма торгов его токена.</p>
            </div>
            <div className="about__info about__info_how">
                <h3 className="about__title about__title_how">Как зарабатывает Coinparty?</h3>
                <p className="about__text">Coinparty получает комиссию c каждой транзакции токена в размере 1,5%, 
а также при размещении (первичной продаже) токена в размере 40%.</p>
            </div>
        </section>
    )
}

export default About;