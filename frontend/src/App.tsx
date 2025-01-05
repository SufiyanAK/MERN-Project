import { Link, Outlet } from 'react-router-dom'
import Body from './components/Body'

const paths = [
  { name: 'Home', path: '/' },
  { name: 'Create Product', path: '/create-product' }
]

const App = () => {
  return (
    <>
      <header className="w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 bg-gradient-to-r from-gradient-start to-gradient-end text-secondary flex items-center justify-between p-3">
        <Link to="/">
          <h2 className="text-xl">
            <strong className="uppercase">EStore</strong>
          </h2>
        </Link>
        <div>
          {/* <Link to="/login">
            <button className="py-2 px-4 bg-secondary text-primary rounded-md hover:bg-secondary-hover duration-150">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
              </svg>
            </button>
          </Link> */}
        </div>
      </header>
      <Body paths={paths} >
        <Outlet />
      </Body>
    </ >
  )
}

export default App