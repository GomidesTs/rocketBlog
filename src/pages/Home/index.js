import { useState, useEffect } from 'react';
import Banner from './Banner';
import Card from './Card';
import Hero from './Hero';
import Main from './Main';
import api from '../../services/api';
import Header from 'pages/Header';
import Footer from 'pages/Footer';


const Home = () => {

    const [hero, setHero] = useState([]);
    const [main, setMain] = useState([]);
    const [mostseen, setMostseen] = useState([]);
    const [banner, setBanner] = useState([]);

    useEffect(() => {

        api.get('/posts?star=1&_limit=1&_order=desc')
        .then((response)=>{
            setHero(response.data);
        })

        api.get('/posts?star=5&_limit=2&_order=desc')
        .then((response)=>{
            setMain(response.data);
        })

        api.get('/posts?_sort=date&_order=desc&_limit=1')
        .then((response)=>{
            setBanner(response.data);
        })

        api.get('/posts?_sort=date&_order=desc&_limit=3')
        .then((response)=>{
            setMostseen(response.data);
        })
    }, [])

    return(
        <>
            <Header />
            {
                hero.map((item) =>{
                    return <Hero key={item.id} content={item} />
                })
            }
            <section className="container">
            <div className="row">
                <div className="grid-6 pt-5 pb-3">
                    {
                        banner.map((item) =>{
                            return <Banner key={item.id} content={item} />
                            })
                    }
                </div>
                <div className="grid-6">
                   {
                       main.map((item) => {
                            return <Main key={item.id} content={item} />
                       })
                   }
                </div>
            </div>
            </section>
                <section className="container">
                    <h3 className="ml-2 mb-3">Mais Visitados</h3>
                    <p className="ml-2 mb-3">
                        O Portal RocketBlog traz notícias e reportagens completas e confiáveis sobre mercado
                        tecnologia e filosofia, contando com um editorial independente e moderno.
                    </p>
                    <div className="row">
                        {
                            mostseen.map((item) =>{
                                return <Card key={item.id} content={item} />
                            })
                        }
                    </div>
                </section>
            
            <Footer />
        </>
    );
    }
    
    export default Home;