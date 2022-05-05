const ProfileSettings = () => {
    return (
        <main className="profile__main">
            <div className="profile__container">
                <h2 className="profile__username">@username</h2>
                <form className="profile__form">
                    <label className="profile__field">
                        <span className="profile__title">E-mail</span>
                        <input className="profile__input" placeholder="e-mail"/>
                    </label>
                    <label className="profile__field">
                        <span className="profile__title">Пароль</span>
                        <input className="profile__input" placeholder="Добавьте пароль"></input>
                    </label>
                    <label className="profile__field">
                        <span className="profile__title">Аккаунт Twitch/Goggle</span>
                        <input className="profile__input" placeholder="Twitch/Goggle username"></input>
                    </label>
                </form>
                <button className="profile__exit">Выйти</button>
            </div>
        </main>
    )
}

export default ProfileSettings;