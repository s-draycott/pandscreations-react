import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.css';
import App from './App.tsx';
import { SiteImagesProvider } from './context/SiteImagesContext';
import { SiteContentProvider } from './context/SiteContentContext';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SiteContentProvider>
            <SiteImagesProvider>
                <App />
            </SiteImagesProvider>
        </SiteContentProvider>
    </StrictMode>
);
