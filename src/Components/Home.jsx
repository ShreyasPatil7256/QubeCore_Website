import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from '../supabase'

export default function Home() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setUser(data.session?.user ?? null))
  }, [])

  return (
    <div className="home-wrapper">
      <div className="home-hero">
        <span className="home-eyebrow">Simple. Secure. Fast.</span>
        <h1>Build your PC,<br />the right way.</h1>
        <p>Premium PC components for builders, gamers, and professionals.<br />Sign up free, no credit card needed.</p>
        <div className="home-btn-row">
          {user ? (
            <Link className="home-btn" to="/Body">Go to Dashboard →</Link>
          ) : (
            <>
              <Link className="home-btn" to="/signup">Get started</Link>
              <Link className="home-btn home-btn-ghost" to="/login">Sign in</Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}