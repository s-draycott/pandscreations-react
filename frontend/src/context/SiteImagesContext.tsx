import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type SiteImagesMap = Record<string, string>;

type GalleryImage = {
    src: string;
    alt: string;
};

type SiteGalleriesMap = Record<string, GalleryImage[]>;

interface SiteImagesContextType {
    images: SiteImagesMap;
    galleries: SiteGalleriesMap;
    loading: boolean;
}

const SiteImagesContext = createContext<SiteImagesContextType>({
    images: {},
    galleries: {},
    loading: true,
});

export const SiteImagesProvider = ({ children }: { children: ReactNode }) => {
    const [images, setImages] = useState<SiteImagesMap>({});
    const [galleries, setGalleries] = useState<SiteGalleriesMap>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchImages() {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/images`);
                console.log('Images response status:', response.status);

                if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                }

                const data = await response.json();
                console.log('Images data:', data);
                setImages(data?.images ?? {});
                setGalleries(data?.galleries ?? {});
            } catch (error) {
                console.error('Failed to fetch site images:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchImages();
    }, []);

    return (
        <SiteImagesContext.Provider value={{ images, galleries, loading }}>
            {children}
        </SiteImagesContext.Provider>
    );
};

export const useSiteImages = () => useContext(SiteImagesContext);
