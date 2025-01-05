import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import CreateProduct from "../components/CreateProduct"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-product" element={<CreateProduct />} />
        </Routes>
    )
}

export default Router