import { Outlet } from 'react-router-dom'
import Body from './components/Body'
import Navbar from './components/Navbar'

const paths = [
  { name: 'Home', path: '/' },
  { name: 'Create Product', path: '/create-product' }
]

const App = () => {
  return (
    <>
      <Navbar />
      <Body paths={paths} >
        <Outlet />
      </Body>
    </ >
  )
}

export default App