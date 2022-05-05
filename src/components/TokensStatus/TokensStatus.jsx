import avatar from "../../images/avatar.png";

const TokensStatus = () => {
    return (
        <section className="status">
            <div className="status__container">
                <div className="status__cell">
                    <p className="status__text">Новый токен на Coinparty</p>
                    <p className="status__about">5 первых токенов, пополнение в 2022.</p>
                </div>
                <div className="status__cell">
                    <p className="status__text">Топ по росту за 24 часа</p>
                    <p className="status__about">Торги ещё не открыты.</p>
                </div>
                <div className="status__cell">
                    <p className="status__text">Самый посещаемый</p>
                    <div className="status__profile">
                        <img className="status__avatar" src={avatar} alt="Аватар"/>
                        <span className="status__nick">bratishkinoff</span>
                    </div>
                    <p className="status__views">+74% просмотров</p>
                </div>
                <div className="status__cell">
                    <p className="status__text">Топ по объёму за 24 часа</p>
                    <p className="status__about">Торги ещё не открыты.</p>
                </div>
            </div>
            <div className="status__tokens">
                <div className="status__available">
                    <p className="status__available-tokens">Доступные токены Twitch</p>
                </div>
                <div className="status__available status__available_game">
                    <p className="status__available-game">Токены команд и игроков CS:GO, Dota2, Valorant, LoL, Fortnite, CoD</p>
                    <span className="status__development">В разработке</span>
                </div>
            </div>
        </section>
    )
}

export default TokensStatus;