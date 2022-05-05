

const TrendToken = ({nick, name, cost, view, avatar}) => {
    return (
        <div className="tokenstats__trend">
            <div className="tokenstats__trend-container">
                <img className="tokenstats__trend-avatar" src={avatar} alt="Аватар"/>
                <div className="tokenstats__trend-profile">
                    <strong className="tokenstats__trend-nick">{nick}</strong>
                    <span className="tokenstats__trend-name">{name}</span>
                </div>
            </div>
            <div className="tokenstats__trend-view">
                <span className="tokenstats__trend-cost">{cost}</span>
                <span className="tokenstats__trend-views">+ {view}% просмотров</span>
            </div>
        </div>
    )
}

export default TrendToken;