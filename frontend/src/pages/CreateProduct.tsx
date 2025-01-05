import { FormEvent, useState } from 'react';
import Input from '../components/Input';
import ImageUpload from '../components/ImageUpload';

interface AddProductProps {
    name: string;
    description: string;
    price: number;
    countInStock: number;
    imageUrl: string;
}

const addProductInitialState: AddProductProps = {
    name: '',
    description: '',
    price: 0,
    countInStock: 0,
    imageUrl: ''
}

const CreateProduct = () => {
    const [formData, setFormData] = useState<AddProductProps>(addProductInitialState);

    const handleInputChange = (field: string, value: string | number) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // TODO: Add API call to create product
        console.log(formData);
    };

    return (
        <div className="max-w-2xl mx-auto p-4 ">
            <h2 className="text-2xl font-bold mb-6">Create New Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    tag='input'
                    id='name'
                    label='Product Name'
                    name='name'
                    type='text'
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                />
                <Input
                    tag='textarea'
                    id='description'
                    label='Product Description'
                    name='description'
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    isRequired
                />

                <div className="grid grid-cols-2 gap-4">
                    <Input
                        tag='input'
                        id='price'
                        label='Price'
                        name='price'
                        type='number'
                        value={formData.price}
                        onChange={(e) => handleInputChange('price', e.target.value)}
                        isRequired
                    />
                    <Input
                        tag='input'
                        id='countInStock'
                        label='Count In Stock'
                        name='countInStock'
                        type='number'
                        value={formData.countInStock}
                        onChange={(e) => handleInputChange('countInStock', e.target.value)}
                    />
                </div>

                {/* <div className="grid grid-cols-2 gap-4"> */}
                <ImageUpload
                    value={formData.imageUrl}
                    onChange={(url) => handleInputChange('imageUrl', url)}
                />
                {/* </div> */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                >
                    Create Product
                </button>
            </form>
        </div>
    );
};

export default CreateProduct;