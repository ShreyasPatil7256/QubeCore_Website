import { useState, useEffect } from 'react'
import { supabase } from '../supabase'
import { CategoryPage } from './CategoryPage'

export function CPUs() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    supabase.from('Components').select('*').eq('category', 'CPU').then(({ data }) => {
        setProducts(data || [])
      })
  }, [])

  return <CategoryPage title="⚙️ CPUs" products={products} />
}