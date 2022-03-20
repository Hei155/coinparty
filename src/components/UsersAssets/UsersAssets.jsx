import avatar from "../../images/avatar.png";

const UsersAssets = () => {
    return (
        <section className="assets">
            <div className="assets__grid">
                    <div className="assets__headers">
                    <span className="assets__header">Актив</span>
                    <span className="assets__header">Цена</span>
                    <span className="assets__header">Изменение (24ч)</span>
                    <span className="assets__header">Объём (24ч)</span>
                    <span className="assets__header">Капитализация</span>
                    <span className="assets__header">Запас</span>
                </div>
                <div className="assets__headers">
                    <div className="assets__profile">
                        <img src={avatar} alt="Аватар" className="assets__avatar"/>
                        <div className="assets__profile-container">
                            <span className="assets__nickname">bratishkinoff</span>
                            <span className="assets__signature">BRFF</span>
                        </div>
                    </div>
                    <div>
                        <span className="assets__data-text">&#36;1,00</span>
                        <span className="assets__data-sold">0% продано</span>
                    </div>
                    <span className="assets__data-text">0,0%</span>
                    <span className="assets__data-text">0</span>
                    <span className="assets__data-text">&#36;8,000</span>
                    <span className="assets__data-text">8,000</span>
                </div>
            </div>
        </section>
    )
}

export default UsersAssets;