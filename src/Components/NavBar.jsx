import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../supabase'

const CATEGORIES = [
  { label: 'GPU', route: '/GPUs' },
  { label: 'CPU', route: '/CPUs' },
  { label: 'RAM', route: '/RAMs' },
  { label: 'Motherboard', route: '/MotherBoards' },
]

function AddProductModal({ onClose }) {
  const [form, setForm] = useState({ category: '', image: '', name: '', description: '', Price: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async () => {
    if (!form.name.trim()) { setError('Product name is required.'); return }
    if (!form.category) { setError('Please select a category.'); return }
    if (!form.Price) { setError('Price is required.'); return }

    setLoading(true)
    const { error: dbErr } = await supabase.from('Components').insert([{ ...form, Price: parseFloat(form.Price) }])
    setLoading(false)

    if (dbErr) {
      setError(dbErr.message)
    } else {
      const route = CATEGORIES.find(c => c.label === form.category)?.route || '/'
      window.location.href = route
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Add Your Product</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="modal-field">
          <label className="modal-label">Category *</label>
          <select className="modal-select" name="category" value={form.category} onChange={handleChange}>
            <option value="">Select a category</option>
            {CATEGORIES.map(c => (
              <option key={c.label} value={c.label}>{c.label}</option>
            ))}
          </select>
        </div>

        <div className="modal-field">
          <label className="modal-label">Product Name *</label>
          <input className="modal-input" name="name" value={form.name} onChange={handleChange} />
        </div>

        <div className="modal-field">
          <label className="modal-label">Image URL</label>
          <input className="modal-input" name="image" value={form.image} onChange={handleChange} />
          {form.image && (
            <img className="img-preview" src={form.image} alt="preview" onError={e => e.target.style.display = 'none'} />
          )}
        </div>

        <div className="modal-field">
          <label className="modal-label">Description</label>
          <textarea className="modal-textarea" name="description" value={form.description} onChange={handleChange} />
        </div>

        <div className="modal-field">
          <label className="modal-label">Price (₹) *</label>
          <input className="modal-input" name="Price" type="number" min="0" step="0.01" value={form.Price} onChange={handleChange} />
        </div>

        {error && <p className="modal-error">{error}</p>}

        <div className="modal-footer">
          <button className="modal-cancel" onClick={onClose}>Cancel</button>
          <button className="modal-submit" onClick={handleSubmit} disabled={loading}>
            {loading ? 'Adding…' : 'Add Product'}
          </button>
        </div>
      </div>
    </div>
  )
}

export function NavBar() {
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    navigate('/')
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-links">
          <Link to="/Body">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/MotherBoards">Motherboards</Link>
          <Link to="/CPUs">CPUs</Link>
          <Link to="/GPUs">GPUs</Link>
          <Link to="/RAMs">RAM</Link>
        </div>
        <div className="navbar-actions">
          <button className="signout-btn" onClick={handleSignOut}>Sign out</button>
          <button className="add-product-btn" onClick={() => setShowModal(true)}>
            + Add Your Product
          </button>
        </div>
      </nav>

      {showModal && <AddProductModal onClose={() => setShowModal(false)} />}
    </>
  )
}