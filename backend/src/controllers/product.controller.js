import Product from "../models/product.model.js";

const getProduct = async (req, res) => {
    try {
        const products = await Product.find();

        if (products.length === 0) {
            return res.status(404).json({ success: false, message: 'No products found' });
        }

        res.status(200).json({ success: true, data: products, message: 'Products fetched successfully' });
    } catch (error) {
        console.log(`Error: ${error.message}`);
        res.status(500).json({ success: false, error: 'Server error' });
    }
}

const addProduct = async (req, res) => {
    try {
        const { name, price, description, image, countInStock } = req.body;

        if (!name || !price || !description || !countInStock || !image) {
            return res.status(400).json({ error: 'All fields are required', success: false });
        }

        const product = new Product({
            name,
            price,
            description,
            countInStock,
            imageUrl: image
        });

        const createdProduct = await product.save();

        res.status(201).json({ success: true, data: createdProduct, message: 'Product created successfully' });
    } catch (error) {
        console.log(`Error: ${error.message}`);
        res.status(500).json({ success: false, error: 'Server error' });
    }
}

const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;

        if (!productId) {
            return res.status(400).json({ success: false, message: 'Product ID is required' });
        }

        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        const { name, price, description, image, countInStock } = req.body;

        if (!name || !price || !description || !countInStock || !image) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        const updatedProduct = await Product.findByIdAndUpdate(productId, {
            $set: {
                name,
                price,
                description,
                countInStock,
                imageUrl: image
            }
        }, { new: true });

        res.status(200).json({ success: true, data: updatedProduct, message: 'Product updated successfully' });
    } catch (error) {
        console.log('error in Updating product', error.message);
        res.status(500).json({ success: false, error: 'Server error' });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;

        if (!productId) {
            return res.status(400).json({ success: false, message: 'Product ID is required' });
        }

        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        const deletedProduct = await Product.findByIdAndDelete(productId);

        res.status(200).json({ success: true, data: deletedProduct, message: 'Product deleted successfully' });

    } catch (error) {
        console.log(`Error: ${error.message}`);
        res.status(500).json({ success: false, error: 'Server error' });
    }
}

export { getProduct, addProduct, updateProduct, deleteProduct };