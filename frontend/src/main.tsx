import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.css';
import App from './App.tsx';
import { SiteImagesProvider } from './context/SiteImagesContext';
import { SiteContentProvider } from './context/SiteContentContext';
import { SiteNavigationProvider } from './context/SiteNavigationContext';
import { ProductsProvider } from './context/ProductsContext.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SiteImagesProvider>
            <SiteContentProvider>
                <SiteNavigationProvider>
                    <ProductsProvider>
                        <App />
                    </ProductsProvider>
                </SiteNavigationProvider>
            </SiteContentProvider>
        </SiteImagesProvider>
    </StrictMode>
);
