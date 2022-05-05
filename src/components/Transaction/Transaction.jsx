const Transaction = (props) => {

    return (
        <tr className='payment__row'>
            <td className="payment__value">{props.operation}</td>
            <td className="payment__value">{props.date}</td>
            <td className="payment__value">{props.sum}</td>
            <td className="payment__value">{props.method}</td>
            <td className="payment__value payment__value_complete payment__value_waiting">{props.status}</td>
        </tr>
    )
}

export default Transaction;