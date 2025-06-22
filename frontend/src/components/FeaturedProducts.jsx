import { useEffect, useState } from "react";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useUserStore } from "../stores/useUserStore";

const FeaturedProducts = ({ featuredProducts }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(4);

	const { addToCart } = useCartStore();
	const { user } = useUserStore();

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) setItemsPerPage(1);
			else if (window.innerWidth < 1024) setItemsPerPage(2);
			else if (window.innerWidth < 1280) setItemsPerPage(3);
			else setItemsPerPage(4);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) => prevIndex - itemsPerPage);
	};

	const isStartDisabled = currentIndex === 0;
	const isEndDisabled = currentIndex >= featuredProducts.length - itemsPerPage;

	return (
		<div className='py-16'>
			<div className='container mx-auto px-4'>
				<h2 className="py-8 text-center text-4xl font-bold text-orange-400">
                    Featur<span className="relative inline-block pb-1">
                    <span className="relative z-10 pb-1">ed Pro</span>
                    <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 rounded-full z-0 translate-y-1"></span>
                    </span>ducts
                </h2>
				<div className='relative'>
					<div className='overflow-hidden'>
						<div
							className='flex transition-transform duration-300 ease-in-out'
							style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
						>
							{featuredProducts?.map((product) => (
								<div key={product._id} className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex-shrink-0 px-2'>
									<div className=' bg-white bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-xl border border-gray-500/30'>
										<div className='overflow-hidden'>
                                          <Link to={`/product/${product._id}`}> 
											<img
												src={product.image}
												alt={product.name}
												className='w-64 mx-auto my-2 h-64 object-full transition-transform duration-300 ease-in-out hover:scale-110'
											/>
	                                       </Link>
										</div>
										<div className='p-4'>
											<h3 className='text-lg font-semibold mb-2 text-gray-700'>{product.name}</h3>
											<p className='text-xs text-gray-700/50'>
                                                  {product.description.length > 27 ? product.description.slice(0, 27) + "..." : product.description}
                                            </p>
											<div className="inline-flex items-center mt-2 px-2 py-1 bg-green-100 text-green-800 text-sm font-medium rounded">
                                                      {typeof product?.rating === "number" ? product.rating.toFixed(1) : "No rating"} ★
                                            </div>
											<p className='text-red-500 font-medium mb-4 py-2'>
												₹{Number(product.price).toLocaleString('en-IN')}
											</p>
											<button
													onClick={() => {
														if (!user) {
														toast.error("Please login to add products to cart.", { id: "login" });
														return;
														}
														addToCart(product);
														
													}}
													className='w-full bg-emerald-600 hover:bg-emerald-500 text-gray-50 font-semibold py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center'
													>
													<ShoppingCart className='w-5 h-5 mr-2' />
													Add to Cart
											</button>

										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<button
						onClick={prevSlide}
						disabled={isStartDisabled}
						className={`absolute top-1/2 -left-4 transform -translate-y-1/2 p-2 rounded-full transition-colors duration-300 ${
							isStartDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-500"
						}`}
					>
						<ChevronLeft className='w-6 h-6' />
					</button>

					<button
						onClick={nextSlide}
						disabled={isEndDisabled}
						className={`absolute top-1/2 -right-4 transform -translate-y-1/2 p-2 rounded-full transition-colors duration-300 ${
							isEndDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-500"
						}`}
					>
						<ChevronRight className='w-6 h-6' />
					</button>
				</div>
			</div>
		</div>
	);
};
export default FeaturedProducts;
