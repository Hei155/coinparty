import pepeLaugh from "../../images/pepeLaugh.png";

const CreateAcc = () => {
    return (
        <section className="portfolio__account">
            <p className="portfolio__about">Создавай портфолио, следи за токенами, участвуй на рынке и изучай новые активы.
            Создай аккаунт, это бесплатно.
            </p>
            <button className="portfolio__button">
                <img className="button__pepe" src={pepeLaugh} alt="Пепе улыбается"/>
                Начать
            </button>
        </section>
    )
}

export default CreateAcc;