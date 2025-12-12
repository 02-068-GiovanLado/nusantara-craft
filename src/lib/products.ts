import { supabase } from '@/lib/supabase';
import type { Product } from '@/lib/supabase';

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }

  return data || [];
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('featured', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching featured products:', error);
    return [];
  }

  return data || [];
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', category)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }

  return data || [];
}

export async function getCategoryCounts() {
  const products = await getProducts();
  
  const counts = {
    'Bags': products.filter(p => p.category === 'Bags').length,
    'Apparel': products.filter(p => p.category === 'Apparel').length,
    'Accessories': products.filter(p => p.category === 'Accessories').length,
    'Home Decor': products.filter(p => p.category === 'Home Decor').length,
  };

  return counts;
}
