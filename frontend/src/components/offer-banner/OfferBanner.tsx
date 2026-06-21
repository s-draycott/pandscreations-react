import { useEffect, useState } from 'react';
import { useSiteContent } from '../../context/SiteContentContext';

import { supabase } from '../../supabase/supabaseClient';
import type { Offer } from '../../types/offer';

import styles from './OfferBanner.module.css';

const OfferBanner = () => {
    const [offer, setOffer] = useState<Offer[] | null>(null);
    const { content } = useSiteContent();
    const getContent = (key: string, fallback = '') => content[key] ?? fallback;

    useEffect(() => {
        // Fetch active offers that are currently valid (within start and end date)
        const fetchOffer = async () => {
            const now = new Date().toISOString();

            const { data, error } = await supabase
                .from('offers')
                .select('*')
                .eq('active', true)
                .lte('start_date', now)
                .gte('end_date', now)
                .order('start_date', { ascending: false })
                .limit(1);

            if (error) {
                console.error('Error fetching offer:', error.message);
            } else {
                console.log('Fetched offer:', data);
                setOffer(data);
            }
        };

        fetchOffer();
    }, []);

    if (!offer || offer.length === 0)
        return (
            <div className={styles.offerBanner}>
                <p>{getContent('site_offer_default')}</p>
            </div>
        );

    return (
        <div className={styles.offerBanner}>
            {offer.map((o) => (
                <p key={o.id}>
                    {o.message} <strong className={styles.code}>'{o.code}'</strong>
                    <br />
                </p>
            ))}
        </div>
    );
};

export default OfferBanner;
