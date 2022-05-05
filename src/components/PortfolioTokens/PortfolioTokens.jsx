import { Link } from "react-router-dom";
import TokenInfo from "../TokenInfo/TokenInfo";
import pepeSad from "../../images/pepeSad.png";

const PortfolioTokens = () => {
    return (
        <section className="portfolio__tokens">
            <div className="portfolio__tokens-info">
                <nav className="portfolio__nav">
                    <ul className="portfolio__params">
                        <li className="portfolio__params-element">Актив</li>
                        <li className="portfolio__params-element">Цена</li>
                        <li className="portfolio__params-element">Количество</li>
                        <li className="portfolio__params-element">Объём(24ч)</li>
                        <li className="portfolio__params-element">Капитализация</li>
                        <li className="portfolio__params-element">Запас</li>
                    </ul>
                </nav>
                <div className="portfolio__failure-container">
                    <img className="portfolio__pepe" src={pepeSad} alt="Пепе"/>
                    <h3 className="portfolio__failure">У тебя нет токенов</h3>
                    <Link className="portfolio__token-page" to="/">Открыть страницу токенов</Link>
                </div>
            </div>
        </section>
    )
}

export default PortfolioTokens;