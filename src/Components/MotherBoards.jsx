import { useState, useEffect } from 'react'
import { supabase } from '../supabase'
import { CategoryPage } from './CategoryPage'

export function MotherBoards() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    supabase.from('Components').select('*').eq('category', 'Motherboard').then(({ data }) => {
        setProducts(data || [])
      })
  }, [])

  return <CategoryPage title="🖥️ Motherboards" products={products} />
}