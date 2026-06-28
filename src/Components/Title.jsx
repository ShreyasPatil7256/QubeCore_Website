import logo from '../assets/Logo_ecom.jpeg'

export function Title() {
  return (
    <header className="title-bar">
      <img className="title-logo" src={logo} alt="QubeCore Logo" />
      <div>
        <h1 className="title-brand">QubeCore</h1>
        <p className="title-tagline">Premium PC Components</p>
      </div>
    </header>
  )
}