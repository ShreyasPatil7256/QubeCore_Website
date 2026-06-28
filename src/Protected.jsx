import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { supabase } from './supabase'

export default function Protected({ children }) {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null)
    })
  }, [])

  if (user === undefined) return <p>Loading…</p>
  if (!user) return <Navigate to="/login" replace />
  return children
}