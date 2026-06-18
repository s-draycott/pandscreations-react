import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type SiteContentMap = {
    [key: string]: string;
};

interface SiteContentContextType {
    content: SiteContentMap;
    loading: boolean;
}

const SiteContentContext = createContext<SiteContentContextType>({
    content: {},
    loading: true,
});

export const SiteContentProvider = ({ children }: { children: ReactNode }) => {
    const [content, setContent] = useState<SiteContentMap>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchContent() {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/content`);
                const data = await response.json();
                setContent(data);
            } catch (error) {
                console.error('Failed to fetch site content:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchContent();
    }, []);

    return (
        <SiteContentContext.Provider value={{ content, loading }}>
            {children}
        </SiteContentContext.Provider>
    );
};

export const useSiteContent = () => useContext(SiteContentContext);
