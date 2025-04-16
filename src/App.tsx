import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Gallery from './pages/Gallery';
import Products from './pages/products/Products';
import Contact from './pages/contact/Contact';
import NoPage from './pages/NoPage';

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
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NoPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
