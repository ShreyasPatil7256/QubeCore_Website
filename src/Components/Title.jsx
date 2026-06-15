import logo from '../assets/Logo_ecom.jpeg';

export function Title() {
  return (
    <>
      <style>{`
        .title-bar {
          display: flex;
          align-items: center;
          padding: 18px 48px;
          background: linear-gradient(135deg, #0a0f2e, #0d1b4b, #1a2a6c);
          border-bottom: 2px solid #2563eb;
          box-shadow: 0 4px 24px rgba(37, 99, 235, 0.3);
        }

        .title-logo {
          height: 52px;
          border-radius: 10px;
          border: 2px solid rgba(96, 165, 250, 0.4);
          box-shadow: 0 0 16px rgba(59, 130, 246, 0.5);
          transition: transform 0.3s;
          margin-right: 14px;
        }

        .title-logo:hover {
          transform: scale(1.05);
        }

        .title-brand {
          font-size: 28px;
          font-weight: 700;
          margin: 0;
          background: linear-gradient(90deg, #93c5fd, #ffffff);
          background-clip: text;
        }

        .title-tagline {
          font-size: 13px;
          color: #60a5fa;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin: 0;
        }
      `}</style>

      <header className="title-bar">
        <img className="title-logo" src={logo} alt="QubeCore Logo" />
        <div>
          <h1 className="title-brand">QubeCore</h1>
          <p className="title-tagline">Premium PC Components</p>
        </div>
      </header>
    </>
  );
}