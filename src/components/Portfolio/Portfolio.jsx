import PortfolioInfo from "../PortfolioInfo/PortfolioInfo";
import PortfolioTokens from "../PortfolioTokens/PortfolioTokens";
import PortfolioProfileContent from "../PortfolioProfileContent/PortfolioProfileContent";
import CreateAcc from "../CreateAcc/CreateAcc";

const Portfolio = () => {
    return (
        <main className="portfolio">
            <PortfolioInfo/>
            <PortfolioTokens/>
            <PortfolioProfileContent/>
            <CreateAcc/>
        </main>
    )
}

export default Portfolio;