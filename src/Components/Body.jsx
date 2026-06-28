import { useState, useEffect } from 'react'
import { supabase } from '../supabase'

export function Body() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setUser(data.session?.user ?? null))
  }, [])

  return (
    <div className="body-wrapper">
      <section className="hero">
        <h1>Welcome to QubeCore</h1>
        <p>Your one-stop shop for premium PC components</p>
        <a href="/MotherBoards" className="hero-btn">Shop Now</a>
      </section>

      <section className="categories">
        <a href="/MotherBoards" style={{ textDecoration: 'none' }}>
          <div className="card">
            <div className="card-icon">🖥️</div>
            <h2>Motherboards</h2>
            <p>High-performance boards for every build</p>
          </div>
        </a>

        <a href="/GPUs" style={{ textDecoration: 'none' }}>
          <div className="card">
            <div className="card-icon">⚡</div>
            <h2>GPUs</h2>
            <p>Next-gen graphics for gaming and workstations</p>
          </div>
        </a>

        <a href="/CPUs" style={{ textDecoration: 'none' }}>
          <div className="card">
            <div className="card-icon">🔲</div>
            <h2>CPUs</h2>
            <p>Powerful processors for every workload</p>
          </div>
        </a>

        <a href="/RAMs" style={{ textDecoration: 'none' }}>
          <div className="card">
            <div className="card-icon">📦</div>
            <h2>RAM</h2>
            <p>Fast, reliable memory modules</p>
          </div>
        </a>
      </section>
    </div>
  )
}