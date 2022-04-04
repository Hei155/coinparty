import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProfileSettings from "../ProfileSettings/ProfileSettings";
import SettingsThanks from "../SettingsThanks/SettingsThanks";

const SettingsPage = () => {
    const [isAuth, setIsAuth] = React.useState(false);
    return (
        <>
            <Header isAuth={isAuth}/>
            <ProfileSettings/>
            <SettingsThanks/>
            <Footer/>
        </>
    )
}

export default SettingsPage;