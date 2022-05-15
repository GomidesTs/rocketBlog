import { Link } from 'react-router-dom';
import Blog from '../../../img/svg/logo/blog-logo.svg';

const Hero = ({content}) => {
    return(
        <>
            <div className="bg-section hero flex-center">
                <section className="container">
                    <div className="row">
                        <div className="grid-6">
                            <div className="row mt-3">
                                <h6 className="color-gray text-center">{content.date}</h6>
                                <h6 className="uppercase color-primary text-center">{content.category}</h6>
                                <Link to={"/post/" + content.id} className="text-center link-title">
                                    <h2 className="mt-1 color-primary">
                                        {content.title}
                                    </h2>
                                </Link>
                                <p className="mt-1 text-center">
                                    {content.resume}
                                </p>
                                <div className="my-1 flex-center">
                                    <Link to={"/post/" + content.id} className="color-primary">Ler mais</Link>
                                </div>
                            </div>
                        </div>
                        <div className="row flex-center">
                    <div className="grid-6">
                            <img src={Blog} className="icon-xl" alt="Logo Blog" />
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        </>
    );
    }
    
    export default Hero;