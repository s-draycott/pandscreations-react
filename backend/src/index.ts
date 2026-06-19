import { createClient } from '@supabase/supabase-js';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import Stripe from 'stripe';

dotenv.config();

type SiteImageValue =
  | string
  | { src: string; alt: string }[];

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_ANON_KEY || '';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-08-27.basil'
})

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase URL or Anon Key in environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

export const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend
app.use(cors({
  origin: process.env.FRONTEND_URL,
}));

// Health check endpoint
app.get('/api', (_req, res) => {
  res.json({ message: 'Hello from the woodworking backend!' });
});

// Fetch all site images
app.get('/api/images', async (_req, res) => {
  try {
    const { data, error } = await supabase
      .from('site_images')
      .select('name, image_url, gallery_key, alt_text');

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Database query error' });
    }

    const imagesMap = data.reduce((acc, item) => {
      acc[item.name] = {
        src: item.image_url,
        alt: item.alt_text
      };
      return acc;
    }, {} as Record<string, {
      src: string;
      alt: string;
    }>);


    const galleries = data.reduce((acc, item) => {
      if (!item.gallery_key) return acc;

      if (!acc[item.gallery_key]) {
        acc[item.gallery_key] = [];
      }

      acc[item.gallery_key].push({
        src: item.image_url,
        alt: item.alt_text
      });

      return acc;
    }, {} as Record<string, { src: string; alt: string }[]>);

    res.json({
      images: imagesMap,
      galleries,
    });

  } catch (err) {
    console.error('Unexpected error:', err);
    res.status(500).json({ error: 'Failed to fetch images' });
  }
});


// Fetch all site content
app.get('/api/content', async (_req, res) => {
  try {
    const { data, error } = await supabase
      .from('site_content')
      .select('key, content');

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Database query error' });
    }

    const contentMap = data.reduce((acc, item) => {
      acc[item.key] = item.content;
      return acc;
    }, {} as Record<string, string>);

    res.json(contentMap);
  } catch (err) {
    console.error('Unexpected error:', err);
    res.status(500).json({ error: 'Failed to fetch content' });
  }
});

// Fetch site navigation
app.get('/api/navigation', async (_req, res) => {
  try {
    const { data, error } = await supabase
      .from('nav_menu')
      .select('*')
      .eq('visible', true)
      .order('order', { ascending: true });

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Database query error' });
    }

    const topLevel = data.filter(item => item.parent_id === null);

    const navigation = topLevel.map(parent => ({
    ...parent,
    children: data.filter(child => child.parent_id === parent.id),
    }));

    res.json(navigation);
  } catch (err) {
    console.error('Unexpected error:', err);
    res.status(500).json({ error: 'Failed to fetch navigation' });
  }
});

// Additional routes can go here...

// Simple test route
app.get('/test', (_req, res) => {
  res.json({ test: 'success' });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

//STRIPE ENDPOINTS
app.post('/api/create-checkout-session', express.json(), async (req, res) => {
  const { cartItems } = req.body;

  if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
    return res.status(400).json({error: 'Cart is empty or invalid'});
  }

 try {
    const lineItems = cartItems.map(item => {
      if (!item.title || !item.price || !item.quantity) {
        throw new Error('Invalid cart item');
      }
      return {
        price_data: {
          currency: 'gbp',
          product_data: {
            name: item.title,
            description: item.description || '',
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: lineItems,
      success_url: `${process.env.FRONTEND_URL}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/cart`, // redirect back to cart
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});
