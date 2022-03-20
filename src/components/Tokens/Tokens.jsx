import TokensStatus from "../TokensStatus/TokensStatus";
import UsersAssets from "../UsersAssets/UsersAssets";

const Tokens = () => {
    return (
        <main className="tokens">
            <TokensStatus/>
            <UsersAssets/>
        </main>
    )
}

export default Tokens;