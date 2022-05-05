import avatar from "../../images/avatar.png"

const TokenInfo = () => {
    return (
        <div className="token__block">
            <ul className="token__list">
                <ul className="token__profile-list">
                    <li className="token__owner"><img className="token__avatar" src={avatar} alt="Аватар"/></li>
                    <li className="token__signature">bratishkinoff</li>
                    <li className="token__nick">BRFF</li>
                </ul>
                <li className="token__info">&#36;1</li>
                <li className="token__info">1,00</li>
                <li className="token__info">-</li>
                <li className="token__info">&#36;8,000</li>
                <li className="token__info">8,000</li>
            </ul>
        </div>
    )
}

export default TokenInfo;