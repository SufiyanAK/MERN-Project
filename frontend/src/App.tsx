import { Outlet } from 'react-router-dom'
import Body from './components/Body'
import Navbar from './components/Navbar'
import { ThemeProvider } from './context/ThemeContext'

const paths = [
  { name: 'Home', path: '/' },
  { name: 'Create Product', path: '/create-product' }
]

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Body paths={paths} >
        <Outlet />
      </Body>
    </ThemeProvider>
  )
}

export default App