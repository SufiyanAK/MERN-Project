import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header className="w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 bg-gradient-to-r from-gradient-start to-gradient-end text-secondary flex items-center justify-between p-3">
            <Link to="/">
                <h2 className="text-xl">
                    <strong className="uppercase">EStore</strong>
                </h2>
            </Link>
            <div>
            </div>
        </header>
    )
}

export default Navbar