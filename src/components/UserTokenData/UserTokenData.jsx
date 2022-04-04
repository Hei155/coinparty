const UserTokenData = (props) => {
    return (
        <div className="assets__headers">
                    <div className="assets__profile">
                        <img src={props.avatar} alt="Аватар" className="assets__avatar"/>
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
    )
}

export default UserTokenData;