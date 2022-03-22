import TokensStatus from "../TokensStatus/TokensStatus";
import UsersAssets from "../UsersAssets/UsersAssets";
import Contacts from "../Contacts/Contacts";

const Tokens = () => {
    return (
        <main className="tokens">
            <TokensStatus/>
            <UsersAssets/>
            <Contacts/>
        </main>
    )
}

export default Tokens;