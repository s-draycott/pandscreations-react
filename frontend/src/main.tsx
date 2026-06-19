import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.css';
import App from './App.tsx';
import { SiteImagesProvider } from './context/SiteImagesContext';
import { SiteContentProvider } from './context/SiteContentContext';
import { SiteNavigationProvider } from './context/SiteNavigationContext';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SiteContentProvider>
            <SiteImagesProvider>
                <SiteNavigationProvider>
                    <App />
                </SiteNavigationProvider>
            </SiteImagesProvider>
        </SiteContentProvider>
    </StrictMode>
);
