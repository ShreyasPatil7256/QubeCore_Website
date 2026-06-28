import { useState } from 'react'

export function CategoryPage({ title, products }) {
  return (
    <div className="page-wrapper">
      <h1 className="page-title">{title}</h1>

      {products.length === 0 ? (
        <div className="page-empty">
          <span style={{ fontSize: 48, display: 'block', marginBottom: 12 }}>📦</span>
          No products here yet. Use "Add Your Product" to add one!
        </div>
      ) : (
        <div className="products-grid">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  )
}

function ProductCard({ product }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="product-card">
      <div className="product-img-wrap">
        {!imgError && product.image ? (
          <img
            className="product-img"
            src={product.image}
            alt={product.name}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="product-img-placeholder">🔩</div>
        )}
      </div>
      <div className="product-body">
        <div className="product-name">{product.name}</div>
        <div className="product-desc">{product.description || ''}</div>
        <div className="product-price">₹{Number(product.Price)}</div>
        <button className="buy-btn">Add to Cart</button>
      </div>
    </div>
  )
}