import pepeSleep from '../../images/layer_132.png';
import twoPepe from '../../images/layer_134.png';
import pepeWithFlower from '../../images/layer_140.png';
import pepeWithTable from '../../images/layer_88.png';
import pepeScientist from '../../images/layer_89.png';
import pepeWeird from '../../images/layer_90.png';
import pepeSanta from '../../images/layer_141.png';
import pepeGlasses from '../../images/layer_139.png';

const Contacts = () => {
    return (
        <section className="contacts">
            <h2 className="contacts__title">Новые токены на подходе!</h2>
            <p className="contacts__paragraph">Первые 5 токенов - это только начало. 
                Присоединяйся к сообществу Coinparty, 
                чтобы узнавать о новых токенах и предлагать свои идеи.
            </p>
            <div className="contacts__buttons">
                <img src={pepeSleep} alt="Пепе"/>
                <img src={twoPepe} alt="Пепе"/>
                <img src={pepeWithFlower} alt="Пепе"/>
                <img src={pepeWithTable} alt="Пепе"/>
                <button className="contacts__button">Telegram</button>
                <button className="contacts__button">VK</button>
                <img src={pepeScientist} alt="Пепе"/>
                <img src={pepeWeird} alt="Пепе"/>
                <img src={pepeSanta} alt="Пепе"/>
                <img src={pepeGlasses} alt="Пепе"/>
            </div>
        </section>
    )
}

export default Contacts;