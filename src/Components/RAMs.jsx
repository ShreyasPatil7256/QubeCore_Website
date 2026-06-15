import { useState, useEffect } from 'react'
import { supabase } from '../supabase'
import { CategoryPage } from './CategoryPage'

export function RAMs() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    supabase.from('Components').select('*').eq('category', 'RAM').then(({ data }) => {
        setProducts(data || [])
      })
  }, [])

  return <CategoryPage title="📦 RAM" products={products} />
}