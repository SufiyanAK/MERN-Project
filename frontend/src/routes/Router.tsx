import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import CreateProduct from "../pages/CreateProduct"
import App from "../App"

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/create-product" element={<CreateProduct />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter