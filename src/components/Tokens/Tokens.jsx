import TokensStatus from "../TokensStatus/TokensStatus";
import UsersAssets from "../UsersAssets/UsersAssets";
import Contacts from "../Contacts/Contacts";
import CreateAcc from "../CreateAcc/CreateAcc";

const Tokens = () => {
    return (
        <main className="tokens">
            <TokensStatus/>
            <UsersAssets/>
            <Contacts/>
            <CreateAcc/>
        </main>
    )
}

export default Tokens;