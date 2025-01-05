import { FC, ReactNode, useState } from "react"
import { Link, useLocation } from "react-router-dom";

type pathProps = {
    name: string,
    path: string
}

interface BodyProps {
    children: ReactNode;
    paths?: pathProps[];
}

const Body: FC<BodyProps> = ({ children, paths }) => {
    const location = useLocation();
    const [activePath, setActivePath] = useState<string | undefined>(location.pathname)

    const handlePathChange = (path: string) => {
        setActivePath(path)
    }

    return (
        <section className='min-h-screen bg-background-light dark:bg-background-dark p-6 transition-all duration-300'>
            <div className='container mx-auto space-y-6'>
                <div className='flex gap-x-4 gap-y-2 flex-wrap bg-white/50 dark:bg-white/5 p-4 rounded-lg backdrop-blur-sm shadow-lg'>
                    {
                        paths?.map((path) => {
                            const activeStyle = activePath !== path.path
                                ? 'bg-white dark:bg-white/10 text-gray-800 dark:text-primary-light hover:bg-btn-clr-light hover:text-white dark:hover:bg-btn-clr-dark'
                                : 'bg-btn-clr-light dark:bg-btn-clr-dark text-white';
                            return (
                                <Link
                                    key={path.name}
                                    to={`${path.path}`}
                                >
                                    <button
                                        onClick={() => handlePathChange(path.path)}
                                        className={`${activeStyle} px-6 py-3 text-sm sm:text-base min-w-[180px] rounded-md shadow-lg font-medium transition-all duration-300 ease-in-out hover:shadow-xl`}
                                    >
                                        {path.name}
                                    </button>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="bg-white/50 dark:bg-white/5 rounded-lg p-6 backdrop-blur-sm shadow-lg">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default Body