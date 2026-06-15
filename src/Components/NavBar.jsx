import { useState } from 'react'
import { supabase } from '../supabase'

const CATEGORIES = [
  { label: 'GPU',         route: '/GPUs' },
  { label: 'CPU',         route: '/CPUs' },
  { label: 'RAM',         route: '/RAMs' },
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
    if (!form.category)    { setError('Please select a category.'); return }
    if (!form.Price)       { setError('Price is required.'); return }

    setLoading(true)
    const { error: dbErr } = await supabase.from('Components').insert([{ ...form, Price: parseFloat(form.Price) }])
    setLoading(false)

    if (dbErr) {
      setError(dbErr.message)
    } else {
      // Navigate to the matching category page so user sees the new card
      const route = CATEGORIES.find(c => c.label === form.category)?.route || '/'
      window.location.href = route
    }
  }

  return (
    <>
      <style>{`
        .modal-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.75);
          display: flex; align-items: center; justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(4px);
        }
        .modal-box {
          background: linear-gradient(135deg, #0d1b4b, #0f2060);
          border: 1px solid rgba(37,99,235,0.4);
          border-radius: 16px;
          padding: 32px;
          width: 100%; max-width: 440px;
          max-height: 90vh; overflow-y: auto;
          box-shadow: 0 24px 80px rgba(0,0,0,0.6);
        }
        .modal-header {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 24px;
        }
        .modal-title { font-size: 20px; font-weight: 800; color: #93c5fd; margin: 0; }
        .modal-close {
          background: none; border: none; color: #64748b;
          font-size: 20px; cursor: pointer; padding: 4px;
          transition: color 0.2s;
        }
        .modal-close:hover { color: #e2e8f0; }
        .modal-field { margin-bottom: 16px; text-align: left; }
        .modal-label {
          display: block; font-size: 11px; font-weight: 700;
          color: #60a5fa; margin-bottom: 6px;
          text-transform: uppercase; letter-spacing: 0.6px;
        }
        .modal-input, .modal-select, .modal-textarea {
          width: 100%; padding: 10px 13px;
          background: rgba(6,13,36,0.8);
          border: 1px solid rgba(37,99,235,0.35);
          border-radius: 8px; color: #e2e8f0; font-size: 14px;
          outline: none; box-sizing: border-box;
          transition: border-color 0.2s; font-family: inherit;
        }
        .modal-input:focus, .modal-select:focus, .modal-textarea:focus {
          border-color: rgba(96,165,250,0.7);
        }
        .modal-select option { background: #0d1b4b; }
        .modal-textarea { resize: vertical; min-height: 72px; }
        .img-preview {
          margin-top: 10px; width: 100%; height: 130px;
          object-fit: cover; border-radius: 8px;
          border: 1px solid rgba(37,99,235,0.3);
        }
        .modal-error { color: #f87171; font-size: 13px; margin: 0 0 12px; text-align: left; }
        .modal-footer { display: flex; gap: 10px; justify-content: flex-end; margin-top: 8px; }
        .modal-cancel {
          padding: 10px 22px; background: transparent;
          border: 1px solid rgba(37,99,235,0.4); color: #93c5fd;
          border-radius: 8px; font-size: 14px; font-weight: 600;
          cursor: pointer; transition: border-color 0.2s;
        }
        .modal-cancel:hover { border-color: #60a5fa; }
        .modal-submit {
          padding: 10px 26px;
          background: linear-gradient(135deg, #1d4ed8, #2563eb);
          color: white; border: none; border-radius: 8px;
          font-size: 14px; font-weight: 700; cursor: pointer;
          box-shadow: 0 2px 16px rgba(37,99,235,0.4);
          transition: box-shadow 0.2s, opacity 0.2s;
        }
        .modal-submit:hover { box-shadow: 0 0 28px rgba(37,99,235,0.7); }
        .modal-submit:disabled { opacity: 0.6; cursor: not-allowed; }
      `}</style>

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
            <input
              className="modal-input" name="name"
              value={form.name} onChange={handleChange}
            />
          </div>

          <div className="modal-field">
            <label className="modal-label">Image URL</label>
            <input
              className="modal-input" name="image"
              value={form.image} onChange={handleChange}
            />
            {form.image && (
              <img
                className="img-preview" src={form.image} alt="preview"
                onError={e => e.target.style.display = 'none'}
              />
            )}
          </div>

          <div className="modal-field">
            <label className="modal-label">Description</label>
            <textarea
              className="modal-textarea" name="description"
              value={form.description} onChange={handleChange}
            />
          </div>

          <div className="modal-field">
            <label className="modal-label">Price (₹) *</label>
            <input
              className="modal-input" name="Price"
              type="number" min="0" step="0.01"
              value={form.Price} onChange={handleChange}
            />
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
    </>
  )
}

export function NavBar() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 48px;
          background: #0d1b4b;
          border-bottom: 1px solid rgba(37,99,235,0.3);
        }
        .navbar-links { display: flex; gap: 4px; }
        .navbar a {
          color: #93c5fd; text-decoration: none;
          font-size: 15px; font-weight: 500;
          padding: 14px 22px; transition: color 0.2s; display: inline-block;
        }
        .navbar a:hover { color: #ffffff; }
        .add-product-btn {
          background: linear-gradient(135deg, #1d4ed8, #2563eb);
          color: white; border: none;
          padding: 9px 20px; border-radius: 8px;
          font-size: 14px; font-weight: 700; cursor: pointer;
          box-shadow: 0 0 16px rgba(37,99,235,0.35);
          transition: box-shadow 0.2s, transform 0.15s;
          white-space: nowrap;
        }
        .add-product-btn:hover {
          box-shadow: 0 0 28px rgba(37,99,235,0.7);
          transform: translateY(-1px);
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="/About">About</a>
          <a href="/MotherBoards">Motherboards</a>
          <a href="/CPUs">CPUs</a>
          <a href="/GPUs">GPUs</a>
          <a href="/RAMs">RAM</a>
        </div>
        <button className="add-product-btn" onClick={() => setShowModal(true)}>
          + Add Your Product
        </button>
      </nav>

      {showModal && <AddProductModal onClose={() => setShowModal(false)} />}
    </>
  )
}