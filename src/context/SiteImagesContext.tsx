import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type SiteImagesMap = {
    [key: string]: string;
};

interface SiteImagesContextType {
    images: SiteImagesMap;
    loading: boolean;
}

const SiteImagesContext = createContext<SiteImagesContextType>({
    images: {},
    loading: true,
});

export const SiteImagesProvider = ({ children }: { children: ReactNode }) => {
    const [images, setImages] = useState<SiteImagesMap>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchImages() {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/images`);
                const data = await response.json();
                setImages(data);
            } catch (error) {
                console.error('Failed to fetch site images:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchImages();
    }, []);

    return (
        <SiteImagesContext.Provider value={{ images, loading }}>
            {children}
        </SiteImagesContext.Provider>
    );
};

export const useSiteImages = () => useContext(SiteImagesContext);
