import { Title } from './Title'
import { NavBar } from './NavBar'

export function Layout({ children }) {
  return (
    <>
      <Title />
      <NavBar />
      {children}
    </>
  )
}