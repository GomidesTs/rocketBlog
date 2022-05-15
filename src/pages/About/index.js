import Footer from "pages/Footer";
import Header from "pages/Header";
import  Blog from '../../img/svg/logo/blog-logo.svg'
const About = () => {
    return(
        <>
            <Header />
            <section className="container">
                <div className="row">
                    <div className="grid-6">
                        <h1>RocketBlog<span>.</span></h1>
                        <p className="mt-1">
                        O RocketBlog Foi desenvolvido para dar uma push nas habilidades de desenvolvimento no  Desafio Marmitech,
                        onde a partir de uma página estática de blog foi criado uma aplicação frontend em react para ser possível
                        a aplicação de novas features que não estavam no projeto original.
                        </p>
                        <a href="https://github.com/GomidesTs/rocketBlog" target="_blank" className="btn mt-4">Saber mais</a>
                    </div>
                    <div className="grid-6">
                        <img src={Blog} className="icon-xl" alt="Logo Blog" />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default About;