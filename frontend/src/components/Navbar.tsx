import { Link } from "react-router-dom"
import lightModeIcon from "../../public/icons/lightModeIcon.svg"
import darkModeIcon from "../../public/icons/darkModeIcon.svg"
import { useTheme } from "../context/ThemeContext"

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="w-full bg-gradient-to-r from-gradient-start to-gradient-end dark:bg-black/20 backdrop-filter backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 text-gray-800 dark:text-white flex items-center justify-between p-4 transition-all duration-300 shadow-md">
            <Link to="/">
                <h2 className="text-2xl font-bold">
                    <span className="">E</span>Store
                </h2>
            </Link>
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-600 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 shadow-md"
            >
                <img
                    src={theme === 'light' ? darkModeIcon : lightModeIcon}
                    alt="Toggle Mode"
                    className="w-6 h-6"
                />
            </button>
        </header>
    )
}

export default Navbar