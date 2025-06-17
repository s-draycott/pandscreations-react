import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.css';
import App from './App.tsx';
import { SiteImagesProvider } from './context/SiteImagesContext'; // <-- import your context

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SiteImagesProvider>
            <App />
        </SiteImagesProvider>
    </StrictMode>
);
