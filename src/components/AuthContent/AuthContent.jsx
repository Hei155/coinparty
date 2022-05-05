import AuthContainer from "../AuthContainer/AuthContainer";
import About from "../About/About";

const AuthContent = () => {
    return (
        <main className="auth">
            <AuthContainer/>
            <About/>
        </main>
    )
}

export default AuthContent;