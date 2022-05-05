import SettingsThanks from "../SettingsThanks/SettingsThanks";
import TokenHeader from "../TokenHeader/TokenHeader";
import TokenStats from "../TokenStats/TokenStats";

const Token = () => {
    return (
        <main className="token">
            <TokenHeader/>
            <TokenStats/>
            <SettingsThanks/>
        </main>
    )
}

export default Token;
