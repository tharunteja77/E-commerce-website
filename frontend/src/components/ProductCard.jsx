import toast from "react-hot-toast";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

import { Link } from "react-router-dom"; // product detail page



const ProductCard = ({ product }) => {
	// console.log(product);
	const { user } = useUserStore();
	// console.log(user);
	const { addToCart } = useCartStore();
	const handleAddToCart = () => {
		if (!user) {
			toast.error("Please login to add products to cart", { id: "login" });
			return;
		} else {
			// add to cart
			addToCart(product);
		}
	};


	return (
		<div className='flex w-[220px] relative flex-col overflow-hidden rounded-lg border border-gray-100 shadow-lg h-[340px] bg-white'>
			<div className='relative mx-3 mt-3 flex items-center justify-center h-[200px] w-auto  overflow-hidden rounded-xl bg-white'>

               <Link to={`/product/${product._id}`}>
	                  <img className='object-auto w-full hover:scale-105' src={product.image} alt='product image' />
                </Link>
				
			</div>

			<div className='mt-2 px-5 pb-3'>
				<h5 className='text-base font-semibold tracking-tight text-gray-900'>{product.name}</h5>
				<p className='text-xs text-gray-700/50'>
                    {product.description.length > 27 ? product.description.slice(0, 27) + "..." : product.description}
                </p>

                <div className="inline-flex items-center mt-2 px-2 py-1 bg-green-100 text-green-800 text-sm font-medium rounded">
                         {typeof product?.rating === "number" ? product.rating.toFixed(1) : "No rating"} ★

                </div>


				<div className='mt-2 flex items-center justify-between '>
					<p>
						<span className='text-base font-bold text-red-500'>₹{Number(product.price).toLocaleString('en-IN')}</span>
					</p>

				<button
					className='flex items-center justify-center rounded-full bg-white px-3 py-2 text-center font-small
					 text-gray-500 text-xs hover:bg-gray-200 border border-gray-500/20'
					onClick={handleAddToCart}>
					Buy Now
				</button>

				</div>
			</div>
		</div>
	);
};
export default ProductCard;
