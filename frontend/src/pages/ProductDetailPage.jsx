import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";
import LoadingSpinner from "../components/LoadingSpinner";
import PeopleAlsoBought from "../components/PeopleAlsoBought";
import ProductHighlights from "../components/ProductHighlights";

const ProductDetailPage = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);

	const { user } = useUserStore();
	const { addToCart } = useCartStore();

	const handleAddToCart = () => {
		if (!user) {
			toast.error("Please login to add products to cart", { id: "login" });
			return;
		}
		addToCart(product);
	};

	const getRandomPercentageIncrease = (num) => {
		const randomPercentage = Math.random() * (40 - 10) + 10;
		return Math.round(num + (num * randomPercentage / 100));
	};

	useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // or 'auto' if you don't want smooth scroll
    }, [product]);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const res = await axios.get(`${import.meta.env.VITE_PRODUCTION_BASE_URL}/products/${id}`);
				setProduct(res.data);
			} catch (err) {
				console.error("Failed to fetch product", err);
			} finally {
				setLoading(false);
			}
		};

		fetchProduct();
	}, [id]);

	if (loading) return <LoadingSpinner />;
	if (!product) return <div className="text-center p-8">Product not found.</div>;

	const newPrice = getRandomPercentageIncrease(product.price);
	const discountPercentage = Math.round(((newPrice - product.price) / newPrice) * 100);

	return (
		<div className="min-h-screen flex flex-col">
			<div className="grid md:grid-cols-5 grid-cols-1 gap-6 max-w-6xl mx-auto my-20 p-4 bg-white rounded-lg shadow-lg border border-gray-200">
				{/* Product Image */}
				<div className="flex items-center justify-center h-[450px] rounded-xl md:col-span-2 row-span-1 md:row-span-5 ">
					<img
						src={product.image}
						alt={product.name}
						className="rounded-xl w-auto max-h-[450px] mx-auto object-full"
					/>
				</div>

				{/* Product Details */}
				<div className="md:col-span-3 row-span-1 md:row-span-4 col-start-1 md:col-start-3 p-2">
					<h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-2">
						{product.name}
					</h1>
					<p className="mt-2 text-gray-600">{product.description}</p>
					<div className="inline-flex items-center mt-4 px-2 py-1 bg-green-100 text-green-800 text-sm font-medium rounded">
						{typeof product?.rating === "number" ? product.rating.toFixed(1) : "No rating"} ★
					</div>

                    
                    <div className="mt-2 font-medium">
	                        {product.price > 1100 ? (
		                       <span className="text-green-600">Free delivery (any location in India)</span>
	                        ) : (
		                       <span className="text-gray-600">Delivery charges: ₹150 (any location in India)</span>
	                      )}
                    </div>
                    
					<div className="mt-2 mx-auto font-medium"> 
						<span className="text-green-600">Highlights: </span>
						 <ProductHighlights highlights={product.highlights} />
					</div>

					<div className="mt-4 text-2xl text-red-500 font-semibold">
						<span>₹{Number(product.price).toLocaleString("en-IN")}</span>
						<span className="line-through text-base text-red-400 font-normal ml-2">
							₹{Number(newPrice).toLocaleString("en-IN")}
						</span>
						<span className="ml-4 text-base text-[#388e3c]">{discountPercentage}% off</span>
					</div>
				</div>

				{/* Add to Cart Button */}
				<div className="md:col-span-3 col-start-1 md:col-start-3 row-start-auto md:row-start-5 mx-auto">
					<button
						onClick={handleAddToCart}
						className="w-full md:w-auto px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-lg rounded transition duration-200"
					>
						Add to Cart
					</button>
				</div>
			</div>

			{/* People Also Bought Section */}
			<div className=" w-[80%] mx-auto mb-20">
				<PeopleAlsoBought category={product.category} />
			</div>

			
		</div>
	);
};

export default ProductDetailPage;
