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
        <section className='min-h-screen bg-background p-6'>
            <div className='container mx-auto space-y-6'>
                <div className='flex gap-x-4 gap-y-2 flex-wrap bg-white/5 p-4 rounded-lg backdrop-blur-sm'>
                    {
                        paths?.map((path) => {
                            const activeStyle = activePath !== path.path
                                ? 'bg-white/10 text-primary-light hover:bg-btn-clr/80'
                                : 'bg-primary text-white';
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
                <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default Body