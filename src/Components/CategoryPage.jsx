import { useState } from 'react'

export function CategoryPage({ title, products }) {
  return (
    <>
      <style>{`
        .page-wrapper {
          background: #060d24;
          min-height: 100vh;
          color: #e2e8f0;
          padding: 48px;
        }
        .page-title {
          font-size: 36px;
          font-weight: 800;
          background: linear-gradient(90deg, #60a5fa, #ffffff);
          -webkit-background-clip: text;
          background-clip: text;
          margin-bottom: 32px;
          text-align: center;
        }
        .products-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          justify-content: center;
        }
        .product-card {
          background: linear-gradient(135deg, #0d1b4b, #0f2060);
          border: 1px solid rgba(37, 99, 235, 0.25);
          border-radius: 14px;
          overflow: hidden;
          width: 240px;
          text-align: center;
          transition: transform 0.25s, box-shadow 0.25s;
          display: flex;
          flex-direction: column;
        }
        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(37, 99, 235, 0.35);
        }
        .product-img-wrap {
          height: 160px;
          background: linear-gradient(135deg, #060d24, #0a1540);
          flex-shrink: 0;
        }
        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .product-img-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 42px;
        }
        .product-body {
          padding: 18px 18px 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .product-name { font-size: 16px; font-weight: 700; color: #93c5fd; margin-bottom: 6px; }
        .product-desc { font-size: 13px; color: #64748b; margin-bottom: 12px; flex: 1; line-height: 1.5; }
        .product-price { font-size: 18px; font-weight: 700; color: #60a5fa; margin-bottom: 16px; }
        .buy-btn {
          background: linear-gradient(135deg, #1d4ed8, #2563eb);
          color: white;
          border: none;
          padding: 10px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: box-shadow 0.2s;
        }
        .buy-btn:hover { box-shadow: 0 0 20px rgba(37,99,235,0.6); }
        .page-empty {
          text-align: center;
          padding: 80px 0;
          color: #475569;
          font-size: 16px;
        }
      `}</style>

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
    </>
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
        <div className="product-price">
          ₹{Number(product.Price)}
        </div>
        <button className="buy-btn">Add to Cart</button>
      </div>
    </div>
  )
}