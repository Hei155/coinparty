import React from 'react';
import ListParam from '../ListParam/ListParam';

const PortfolioInfo = () => {
    const list = ["1Ч", "1Д", "1М", "1Г"];
    const [isReset, setIsReset] = React.useState(false);
    function onDateReset() {
        if (isReset) {
            setIsReset(false);
            return false;
        } else {
            setIsReset(true);
            return true;
        }
    }

    return (
        <section className="portfolio__info">
            <div className="portfolio__container">
                <div className="portfolio__options">
                    <p className="portfolio__cost">Стоимость портфолио</p>
                    <p className="portfolio__dividends">Дивиденты</p>
                </div>
                <div className="portfolio__values">
                    <span className="portfolio__cost-value">$0,00</span>
                    <span className="portfolio__cost-difference">+0,00%</span>
                </div>
                <span className="portfolio__token-message">В портфолио нет токенов.</span>
                <ul className="portfolio__date-period">
                   {list.map((el, key) => {
                       return (
                           <ListParam isReset={isReset} onDateReset={onDateReset} key={key} el={el}/>
                       )
                   })}
                </ul>
            </div>
        </section>
    )
}

export default PortfolioInfo;