import arrow from '../../images/arrow.png';
import avatar from '../../images/avatar.png';

const TokenHeader = () => {
    return (
        <section className="mytoken">
            <div className="mytoken__container">
                <div className='mytoken__history-container'>
                    <span className="mytoken__history">Токены</span>
                    <img src={arrow} className="mytoken__pointer" alt="Указатель"/>
                    <span className="mytoken__signature">$BRFF</span>
                </div>
                <div className="mytoken__profile">
                    <div className="mytoken__profile-info">
                        <img className="mytoken__avatar" src={avatar} alt="Аватар"/>
                        <strong className="mytoken__nick">bratishkinoff</strong>
                        <span className="mytoken__signature mytoken__signature_bold">$BRFF</span>
                    </div>
                    <button className='mytoken__btn'>Поделиться</button>
                </div>
            </div>
        </section>
    )
}

export default TokenHeader;