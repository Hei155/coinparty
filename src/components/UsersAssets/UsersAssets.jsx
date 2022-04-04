import avatar from "../../images/avatar.png";
import UserTokenData from "../UserTokenData/UserTokenData";

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
                <UserTokenData avatar={avatar}/>
                <UserTokenData avatar={avatar}/>
                <UserTokenData avatar={avatar}/>
                <UserTokenData avatar={avatar}/>
                <UserTokenData avatar={avatar}/>
            </div>
        </section>
    )
}

export default UsersAssets;