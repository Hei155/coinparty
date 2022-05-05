import pepeWork from "../../images/pepeWork.png";
import avatar from "../../images/avatar.png";

const PortfolioProfileContent = () => {
    return (
        <section className="portfolio__profile">
            <div className="portfolio__grid">
                <div className="portfolio__cell">
                    <h4 className="portfolio__cell-title">Новый токен</h4>
                    <p className="portfolio__cell-text">$BRFF теперь добавлен на Coinparty!</p>
                    <p className="portfolio__cell-text">Сейчас $BRFF доступен по минимальной цене.</p>
                </div>
                <div className="portfolio__cell">
                    <h4 className="portfolio__cell-title">Изучение токенов</h4>
                    <p className="portfolio__cell-text">Изучай новые токены на Coinparty.</p>
                    <p className="portfolio__cell-text">Получай бонусы в портфолио</p>
                </div>
                <div className="portfolio__cell">
                    <h4 className="portfolio__cell-title">Рейтинг дивидендов</h4>
                    <p className="portfolio__cell-text">Самые высокие дивиденды на токен.</p>
                </div>
                <div className="portfolio__cell portfolio__cell_profile">
                    <img className="portfolio__avatar" src={avatar} alt="Фото профиля"/>
                    <div className="portfolio__cell-info">
                        <div className="portfolio__cell-container">
                            <h4 className="portfolio__cell-title portfolio__cell-title_nick">bratishkinoff</h4>
                            <span className="portfolio__cell-signature">$BRFF</span>
                        </div>
                        <div className="portfolio__cell-container">
                            <span className="portfolio__cell-value">&#36;1,00</span>
                            <span className="portfolio__cell-count">(0 из 8,000 продано)</span>
                        </div>
                    </div>
                </div>
                <div className="portfolio__cell portfolio__cell_development">
                    <img className="portfolio__pepe-work" src={pepeWork} alt="Пепе работает"/>
                    <span className="portfolio__cell-text">Заходи чуть позже.</span>
                    <span className="portfolio__cell-text portfolio__cell-text_green">Разделы в разработке.</span>
                </div>
            </div>
        </section>
    )
}

export default PortfolioProfileContent;