import { useState, useEffect } from 'react'
import { supabase } from '../supabase'
import { CategoryPage } from './CategoryPage'

export function GPUs() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    supabase.from('Components').select('*').eq('category', 'GPU').then(({ data }) => {
        setProducts(data || [])
      })
  }, [])

  return <CategoryPage title="🎮 GPUs" products={products} />
}