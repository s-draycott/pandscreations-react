import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Gallery from './pages/Gallery';
import Home from './pages/home/Home';
import NoPage from './pages/NoPage';
import ProductDetail from './pages/product-detail/ProductDetail';
import Products from './pages/products/Products';
import Terms from './pages/terms-of-service/TermsOfService';

import './stylesheets/global.css';

//Load page at top whenever link is clicked - this const returns nothing
const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return null;
};

function App() {
    return (
        <>
            <div>
                <BrowserRouter>
                    <ScrollToTop />
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/products/category/:category" element={<Products />} />
                        <Route path="/products/:id" element={<ProductDetail />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/terms" element={<Terms />} />
                        <Route path="*" element={<NoPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
