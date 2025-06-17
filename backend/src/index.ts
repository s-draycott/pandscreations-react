import { createClient } from '@supabase/supabase-js';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase URL or Anon Key in environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
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
      .select('name, image_url');

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Database query error' });
    }

    const imagesMap = data.reduce((acc, item) => {
      acc[item.name] = item.image_url;
      return acc;
    }, {} as Record<string, string>);

    res.json(imagesMap);
  } catch (err) {
    console.error('Unexpected error:', err);
    res.status(500).json({ error: 'Failed to fetch images' });
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
