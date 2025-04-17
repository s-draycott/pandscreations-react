import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Gallery from './pages/Gallery';
import Home from './pages/home/Home';
import NoPage from './pages/NoPage';
import ProductDetail from './pages/product-detail/ProductDetail';
import Products from './pages/products/Products';

import './stylesheets/global.css';

function App() {
    return (
        <>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/products/:id" element={<ProductDetail />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NoPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
