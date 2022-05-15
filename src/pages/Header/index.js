import { getValue } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../img/svg/logo/blog-logo.svg';

const Header = () => {
    const inicialValueForm = {
        search: ''
    }
    const [form, setForm] = useState(inicialValueForm);
    const navigate = useNavigate();

    function onChange(event){
        const {value, name} = event.target;
        setForm({...form, [name]: value});
    }

    function handleSearch(event){
        event.preventDefault();
        navigate(`/search/${form.search}`);
    }

return(
    <>
        <header className="px-2 py-1">
            <nav>
                <div className="logo">
                    <Link to="/"><img src={Logo} alt="Logo blog" /></Link>
                </div>
                <menu>
                    <ul className="menu">
                        <li><Link to="/" className="black-light">Home</Link></li>
                        <li><Link to="/about" className="black-light">Sobre</Link></li>
                        <li><Link to="/category" className="black-light">Categoria</Link></li>
                        <li><Link to="/contact" className="black-light">Contato</Link></li>
                    </ul>
                </menu>
            </nav>
            <div className="bx"></div>
            <div className="flex-start-row">
                <div className="search">
                    <form className="flex" onSubmit={handleSearch}>
                        <input type="text" name="search" placeholder="Buscar" onChange={onChange} className="color-gray-1"/>
                        <button className="btn-search"></button>
                    </form>
                </div>
                <div className="cta-desktop ml-3">
                    <Link to="/login" className="btn">Login</Link>
                </div>
                <div className="cta-mobile">
                    <Link to="/login" className="link color-primary">Login</Link>
                </div>
            </div>
        </header>

        <div className="relative">
        <div className="menu-mobile">
            <ul className="nav-moble">
                <li><Link to="/about" className="link-menu-mobile">Sobre</Link></li>
                <li><Link to="/contact" className="link-menu-mobile">Contato</Link></li>
                <li className="px-2 py-2">
                    <form className="flex">
                        <input type="text" name="search" placeholder="Buscar" />
                        <button className="btn-search"></button>
                    </form>
                </li>
            </ul>
        </div>
    </div>
    </>
);
}

export default Header;