import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import About from "pages/About";
import Contact from "pages/Contact";
import Home from "pages/Home";
import Login from "pages/Login";
import NotFound from "pages/NotFound";
import Post from "pages/Post";
import Search from "pages/Search";

const Paths = () => {
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/post/:idPost" element={<Post />} />
                    <Route path="/search/:word_search" element={<Search />} />
                </Routes>
            </Router>
        </>
    );
}

export default Paths;