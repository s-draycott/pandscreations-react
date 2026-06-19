import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type NavItem = {
    id: number;
    name: string;
    path: string;
    parent_id: number | null;
    children?: NavItem[];
};

type SiteNavigationContextType = {
    navigation: NavItem[];
    loading: boolean;
};

const SiteNavigationContext = createContext<SiteNavigationContextType>({
    navigation: [],
    loading: true,
});

export const SiteNavigationProvider = ({ children }: { children: ReactNode }) => {
    const [navigation, setNavigation] = useState<NavItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchNavigation() {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/navigation`);
                const data = await response.json();
                setNavigation(data);
            } catch (error) {
                console.error('Failed to fetch site navigation:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchNavigation();
    }, []);

    return (
        <SiteNavigationContext.Provider value={{ navigation, loading }}>
            {children}
        </SiteNavigationContext.Provider>
    );
};

export const useSiteNavigation = () => useContext(SiteNavigationContext);
