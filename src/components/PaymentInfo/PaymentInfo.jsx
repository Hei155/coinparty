import mastercardLogo from '../../images/mastercardLogo.png';
import visaLogo from '../../images/visaLogo.png';

const PaymentInfo = () => {
    return (
        <main className="payment">
            <div className="payment__container">
                <h2 className="payment__count">$0,00</h2>
                <div className="payment__action">
                    <button className="payment__action-button payment__action-button_inc">Пополнить</button>
                    <button className="payment__action-button payment__action-button_dec">Вывести</button>
                </div>
                <span className='payment__sum'>Укажите сумму</span>
                <form className="payment__form">
                    <label className="payment__field">
                        <input className="payment__input"></input>
                    </label>
                    <button className="payment__submit">Продолжить</button>
                </form>
                <div className='payment__contacts'>
                    <img className='payment__logo' src={visaLogo} alt="visa"/>
                    <img className='payment__logo' src={mastercardLogo} alt="mastercard"/>
                </div>
                <span className='payment__commission'>Комиссия: 2,5%</span>
            </div>
            <div className='payment__history'>
                <h3 className='payment__history-title'>История транзакция</h3>
                <span className='payment__history-default'>Транзакций нет</span>
            </div>
        </main>
    )
}

export default PaymentInfo;