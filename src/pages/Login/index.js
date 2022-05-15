import Footer from "pages/Footer";
import Header from "pages/Header";
import Logo from '../../img/svg/logo/blog-logo.svg';

const Login = () => {
    return(
        <>
            <Header />
            <section class="container">
            <div class="row">
                <div class="grid-4 disappear"></div>
                <div class="grid-4">
                    <div class="flex-center">
                        <img src={Logo} class="icon-l" alt="Logo" />
                    </div>
                    <h5 class="text-center">Olá, faça o login para continuar.</h5>
                    <form>
                        <input type="text" name="user" class="mt-3" placeholder="Digite seu usuário" />
                        <input type="password" name="password" class="mt-2" placeholder="Digite sua senha" />
                        <button class="mt-4 btn w-100">Entrar</button>
                    </form>
                </div>
                <div class="grid-4 disappear"></div>
            </div>
        </section>
            <Footer />
        </>
    );
}

export default Login;