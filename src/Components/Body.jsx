export function Body() {
  return (
    <>
      <style>{`
        .body-wrapper {
          background: #060d24;
          min-height: 100vh;
          color: #e2e8f0;
        }

        .hero {
          text-align: center;
          padding: 80px 48px 60px;
          border-bottom: 1px solid rgba(37, 99, 235, 0.2);
        }

        .hero h1 {
          font-size: 52px;
          font-weight: 800;
          margin: 0 0 16px;
          background: linear-gradient(90deg, #60a5fa, #93c5fd, #ffffff);
          background-clip: text;
          letter-spacing: -1.5px;
        }

        .hero p {
          font-size: 18px;
          color: #64748b;
          margin: 0 0 32px;
        }

        .hero-btn {
          display: inline-block;
          padding: 14px 36px;
          background: linear-gradient(135deg, #1d4ed8, #2563eb);
          color: white;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          box-shadow: 0 0 20px rgba(37, 99, 235, 0.4);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .hero-btn:hover {
          box-shadow: 0 0 32px rgba(37, 99, 235, 0.7);
        }

        .categories {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          padding: 60px 48px;
          justify-content: center;
        }

        .card {
          background: linear-gradient(135deg, #0d1b4b, #0f2060);
          border: 1px solid rgba(37, 99, 235, 0.25);
          border-radius: 14px;
          padding: 32px 24px;
          text-align: center;
          width: 220px;
          transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(37, 99, 235, 0.35);
          border-color: rgba(96, 165, 250, 0.6);
        }

        .card-icon {
          font-size: 40px;
          margin-bottom: 14px;
        }

        .card h2 {
          font-size: 20px;
          font-weight: 700;
          color: #93c5fd;
          margin: 0 0 8px;
        }

        .card p {
          font-size: 14px;
          color: #64748b;
          margin: 0;
          line-height: 1.5;
        }
      `}</style>

      <div className="body-wrapper">

        <section className="hero">
          <h1>Welcome to QubeCore</h1>
          <p>Your one-stop shop for premium PC components</p>
          <a href="#" className="hero-btn">Shop Now</a>
        </section>

        <section className="categories">

          <div className="card">
            <div className="card-icon">🖥️</div>
            <h2>Motherboards</h2>
            <p>High-performance boards for every build</p>
          </div>

          <div className="card">
            <div className="card-icon">⚡</div>
            <h2>GPUs</h2>
            <p>Next-gen graphics for gaming and workstations</p>
          </div>

          <div className="card">
            <div className="card-icon">🔲</div>
            <h2>CPUs</h2>
            <p>Powerful processors for every workload</p>
          </div>

          <div className="card">
            <div className="card-icon">📦</div>
            <h2>RAM</h2>
            <p>Fast, reliable memory modules</p>
          </div>

        </section>

      </div>
    </>
  );
}