import { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';

import { supabase } from '../../supabase/supabaseClient';

import styles from './GalleryComponent.module.css';

type GalleryProps = {
    table: string;
    orderColumn?: string;
};

type GalleryItem = {
    id: string;
    image_url: string;
    title?: string;
    order: number;
};

//Use state always returns an array with two values - the first value is going to be the state, the second is the function that allows you to update the state. You can call these whatever you want
//tha value within the use state is the default value which we set to be an empty array

const Gallery = ({ table, orderColumn }: GalleryProps) => {
    const [images, setImages] = useState<GalleryItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true);

            let query = supabase.from(table).select('id, image_url, title, order').limit(1000);
            if (orderColumn) {
                query = query.order(orderColumn, { ascending: false });
            }

            //this is the execution of the query - it returns an object of data(the rows from the database) and error
            const { data, error } = await query;

            if (error) {
                console.error('Error fetching gallery from ${table}:', error.message);
                setLoading(false);
                return;
            }

            console.log('Supabase data:', data);
            console.log('Number of images:', data?.length);

            setImages(data || []);
            setLoading(false);
        };

        fetchImages();
    }, [table, orderColumn]);

    if (loading) return <p>Loading images...</p>;

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className={styles.gallery}
            columnClassName={styles.galleryColumn}
        >
            {images.map((item) => (
                <div key={item.id}>
                    <img
                        src={item.image_url}
                        alt={item.title || 'Gallery'}
                        className={styles.image}
                        loading="lazy"
                        style={{ backgroundColor: '#f0f0f0' }}
                    />
                </div>
            ))}
        </Masonry>
    );
};

export default Gallery;
