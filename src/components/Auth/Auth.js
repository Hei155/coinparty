import AuthContainer from "../AuthContainer/AuthContainer";
import About from "../About/About";
import Footer from "../Footer/Footer";

const Auth = () => {
    return (
        <>
            <header className="auth__header">
                <h2 className="auth__title">coinparty</h2>
            </header>
            <main>
                <AuthContainer></AuthContainer>
                <About></About>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Auth;