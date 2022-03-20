import React from "react";
import Header from "../Header/Header";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";

const PortfolioPage = () => {
    const [isAuth, setIsAuth] = React.useState(false);
    return (
        <>
            <Header isAuth={isAuth}/>
            <Portfolio/>
            <Footer/>
        </>
    )
}

export default PortfolioPage;