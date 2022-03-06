const AuthContainer = () => {
    return (
        <section className="authcontainer">
            <div className="authcontainer__block">
                <div className="authcontainer__buttons">
                    <button className="authcontainer__button authcontainer__button_twitch">Войти через Twitch</button>
                    <button className="authcontainer__button authcontainer__button_goggle">Войти через Google</button>
                </div>
                <p className="authcontainer__terms">При авторизации Вы соглашаетесь с Условиями пользования и Политикой приватности</p>
                <p className="authcontainer__notice">После авторизации вы попадёте на страницу с токенами.</p>
            </div>
        </section>
    )
}

export default AuthContainer;