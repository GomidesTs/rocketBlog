import Rocketseat from '../../img/svg/logo/rocketseat.svg'

const Footer = () => {
    return(
        <>
            <footer className="bg-section">
                <section className="container p-0">
                    <div className="row flex-center">
                        <img src={Rocketseat} className="icon-s" alt="Rocketseat" />
                    </div>
                    <div className="row pb-3 bb-black">
                        <div className="grid-3">
                            <h4 className="black-light">Posts</h4>
                            <div className="flex-start-column mt-2">
                                <a href="#" className="color-gray link-footer">Mais vistos</a>
                                <a href="#" className="color-gray link-footer">Mais comentados</a>
                                <a href="#" className="color-gray link-footer">Mais populares</a>
                                <a href="#" className="color-gray link-footer">Mais recente</a>
                            </div>
                        </div>
                        <div className="grid-3">
                            <h4  className="black-light">Categorias</h4>
                            <div className="flex-start-column mt-2">
                                <a href="#" className="color-gray link-footer">Filosofia</a>
                                <a href="#" className="color-gray link-footer">Tecnologia</a>
                                <a href="#" className="color-gray link-footer">Negócio</a>
                                <a href="#" className="color-gray link-footer">Carreira</a>
                            </div>
                        </div>
                        <div className="grid-6">
                            <h4 className="mb-2 black-light">Quer ser avisado dos novos posts do blog?</h4>
                            <p>
                                Fique sempre por dentro do que acontece no RocketBlog assine nossa Newsletter
                            </p>
                            <div className="flex-start-row mt-2">
                                <input type="text" name="search" id="newsletter" placeholder="Digite seu email" />
                                <button className="btn ml-2">Cadastrar</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="grid-12">
                            <p>
                                2022 | Todos os direitos reservados. Desafio Marmitech 
                            </p>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    );
    }
    
    export default Footer;