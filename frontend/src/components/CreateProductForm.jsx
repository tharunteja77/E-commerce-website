import { useState } from "react";
import { motion } from "framer-motion";
import { PlusCircle, Loader } from "lucide-react";
import { useProductStore } from "../stores/useProductStore";



const categories = ["jeans", "t-shirts", "shoes", "glasses", "jackets", "suits", "bags", "laptops", "watches", "gaming", "keyboards & accessories", "headphones & earpods", "camera & accessories"];

const CreateProductForm = () => {
	const [newProduct, setNewProduct] = useState({
		name: "",
		description: "",
		highlights:"",
		seller:"",
		price: "",
		rating: "",
		category: "",
		image: "",
	});

	const { createProduct, loading } = useProductStore();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await createProduct(newProduct);
			setNewProduct({ name: "", description: "", highlights:"", seller:"", price: "", rating:"", category: "", image: "" });
			
		} catch {
			console.log("error creating a product");
		}
	};

	const handleImageChange = (e) => { 
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();

			reader.onloadend = () => {
				setNewProduct({ ...newProduct, image: reader.result });
			};

			reader.readAsDataURL(file); // base64
		}
	};

	return (
		<motion.div
			className='bg-white/20 backdrop-blur-md py-8 shadow-2xl shadow-black rounded-lg p-8 mb-8 max-w-xl mx-auto'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
		>
			<h2 className='text-2xl font-semibold mb-6 text-orange-500'>Create New Product</h2>

			<form onSubmit={handleSubmit} className='space-y-4'>
				<div>
					<label htmlFor='name' className='block text-sm font-medium text-gray-500'>
						Product Name
					</label>
					<input
						type='text'
						id='name'
						name='name'
						value={newProduct.name}
						onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
						className='mt-1 block w-full bg-white/30 backdrop-blur-md border border-gray-200 rounded-md shadow-sm py-2
						 px-3 text-gray-500 focus:outline-none focus:ring-1
						focus:ring-emerald-500 focus:border-emerald-100'
						required
					/>
				</div>

				<div>
					<label htmlFor='description' className='block text-sm font-medium text-gray-500'>
						Description
					</label>
					<textarea
						id='description'
						name='description'
						value={newProduct.description}
						onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
						rows='3'
						className='mt-1 block w-full bg-white/30 backdrop-blur-md border border-gray-200 rounded-md shadow-sm py-2
						 px-3 text-gray-500 focus:outline-none focus:ring-1
						focus:ring-emerald-500 focus:border-emerald-100'
						required
					/>
				</div>
				<div>
					<label htmlFor='highlights' className='block text-sm font-medium text-gray-500'>
						Highlights
					</label>
					<textarea
                    	id='highlights'
                    	name='highlights'
                    	value={newProduct.highlights}
                    	onChange={(e) => setNewProduct({ ...newProduct, highlights: e.target.value })}
                    	placeholder="e.g. Premium Leather, Lightweight, Breathable Material"
						rows='3'
						className='mt-1 block w-full bg-white/30 backdrop-blur-md border border-gray-200 rounded-md shadow-sm py-2
						 px-3 text-gray-500 focus:outline-none focus:ring-1
						focus:ring-emerald-500 focus:border-emerald-100'
						required
                    />

				</div>

                <div>
                  <label htmlFor='seller' className='block text-sm font-medium text-gray-500'>
                    Seller Trait
                  </label>
                  <input
                    type='text'
                    id='seller'
                    name='seller'
                    value={newProduct.seller}
                    onChange={(e) => setNewProduct({ ...newProduct, seller: e.target.value })}
                    className='mt-1 block w-full bg-white/30 backdrop-blur-md border border-gray-200 rounded-md shadow-sm py-2
						 px-3 text-gray-500 focus:outline-none focus:ring-1
						focus:ring-emerald-500 focus:border-emerald-100'
                    required
                  />
                </div>


				<div>
					<label htmlFor='price' className='block text-sm font-medium text-gray-500'>
						Price(₹)
					</label>
					<input
						type='number'
						id='price'
						name='price'
						value={newProduct.price}
						onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
						step='0.01'
						className='mt-1 block w-full bg-white/30 backdrop-blur-md border border-gray-200 rounded-md shadow-sm py-2
						 px-3 text-gray-500 focus:outline-none focus:ring-1
						focus:ring-emerald-500 focus:border-emerald-100'
						required
					/>
				</div>

				<div>
                    <label htmlFor='rating' className='block text-sm font-medium text-gray-500'>
                           Rating (0–5)
                    </label>
                    <input
                        type='number'
                        id='rating'
                        name='rating'
                        value={newProduct.rating}
                        onChange={(e) => setNewProduct({ ...newProduct, rating: parseFloat(e.target.value) || 0 })}
                        step='0.1'
                        min='0'
                        max='5'
                        className='mt-1 block w-full bg-white/30 backdrop-blur-md border border-gray-200 rounded-md shadow-sm py-2
						 px-3 text-gray-500 focus:outline-none focus:ring-1
						focus:ring-emerald-500 focus:border-emerald-100'
                        required
                    />
                </div>


				<div>
					<label htmlFor='category' className='block text-sm font-medium text-gray-500'>
						Category
					</label>
					<select
						id='category'
						name='category'
						value={newProduct.category}
						onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
						className='mt-1 block w-full bg-white/30 backdrop-blur-md border border-gray-200 rounded-md shadow-sm py-2
						 px-3 text-gray-500 focus:outline-none focus:ring-1
						focus:ring-emerald-500 focus:border-emerald-100'
						required
					>
						<option value=''>Select a category</option>
						{categories.map((category) => (
							<option key={category} value={category}>
								{category}
							</option>
						))}
					</select>
				</div>

				<div className="mt-4">
                	<input
                		type="file"
                		id="image"
                		accept="image/*"
                		onChange={handleImageChange}
                		className="hidden"
                	/>
                	<label
                		htmlFor="image"
                		className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-white/30 hover:bg-white/40 transition"
                	>
                		{newProduct.image ? (
                			<img
                				src={newProduct.image}
                				alt="Preview"
                				className="h-full object-contain rounded-md"
                			/>
                		) : (
                			<div className="flex flex-col items-center"> 
                                <p className="text-sm text-gray-500">Click to upload image</p>
                				<img
                					src="https://res.cloudinary.com/dpt0bztac/image/upload/v1756927789/upload_logo_c7hl2p.png"
                					alt="Upload"
                					className="h-[120px] mb-2 opacity-70"
                				/>
                				
                			</div>
                		)}
                	</label>
                </div>


				<button
					type='submit'
					className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md 
					shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 
					focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50'
					disabled={loading}
				>
					{loading ? (
						<>
							<Loader className='mr-2 h-5 w-5 animate-spin' aria-hidden='true' />
							Loading...
						</>
					) : (
						<>
							<PlusCircle className='mr-2 h-5 w-5' />
							Create Product
						</>
					)}
				</button>
			</form>
		</motion.div>
	);
};
export default CreateProductForm;
