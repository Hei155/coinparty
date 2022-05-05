import React from 'react';
import mastercardLogo from '../../images/mastercardLogo.png';
import visaLogo from '../../images/visaLogo.png';
import Transaction from '../Transaction/Transaction';

const PaymentInfo = () => {
    const [isTransactions, setIsTransactions] = React.useState(true);

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
                        <input className="payment__input" type="number"></input>
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
                    {isTransactions
                    ?
                    <table className='payment__table'>
                        <tr className='payment__row'>
                            <th className='payment__title'>Операция</th>
                            <th className='payment__title'>Дата</th>
                            <th className='payment__title'>Сумма</th>
                            <th className='payment__title'>Метод</th>
                            <th className='payment__title'>Статус</th>
                        </tr>
                        <Transaction operation="Пополнение" date="15.12.2021 18:15" sum="2000" method="Карта Mastercard" status="Исполнено"/>
                        <Transaction operation="Пополнение" date="15.12.2021 18:15" sum="2000" method="Карта Mastercard" status="Исполнено"/>
                        <Transaction operation="Пополнение" date="15.12.2021 18:15" sum="2000" method="Карта Mastercard" status="Исполнено"/>
                    </table>
                    :
                    <span className='payment__history-default'>Транзакций нет</span>
                    }
            </div>
        </main>
    )
}

export default PaymentInfo;