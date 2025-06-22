import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";
import HeroCarousel from "../components/HeroCarousel";

const categories = [
	{ href: "/jeans", name: "Jeans", imageUrl: "/category/jeans.jpg" },
	{ href: "/t-shirts", name: "T-shirts", imageUrl: "/category/tshirts.webp" },
	{ href: "/shoes", name: "Shoes", imageUrl: "/category/shoes.jpg" },
	{ href: "/glasses", name: "Glasses", imageUrl: "/category/glasses.jpg" },
	{ href: "/jackets", name: "Jackets", imageUrl: "/category/jackets.jpg" },
	{ href: "/suits", name: "Suits", imageUrl: "/category/suits.jpg" },
	{ href: "/bags", name: "Bags", imageUrl: "/category/bags.jpg" },
	{ href: "/laptops", name: "Laptops", imageUrl: "/category/laptops.jpg" },
	{ href: "/watches", name: "Watches", imageUrl: "/category/watches.jpg" },
	{ href: "/gaming", name: "Gaming", imageUrl: "/category/gaming.jpg" },
	{ href: "/keyboards & accessories", name: "Keyboard and Accesories", imageUrl: "/category/keyboards.jpg" },
	{ href: "/headphones & earpods", name: "Headphones & Earpods", imageUrl: "/category/headphones.jpeg" },
	{ href: "/camera & accessories", name: "Camera & Accessories", imageUrl: "/category/cameras.jpeg" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);


	return (
		<div className='relative min-h-screen text-white overflow-hidden bg-white'>
			<div></div>


           {/* carousel component */}
			<div className='w-full flex justify-center items-center bg-white'>
				<div className='w-full max-w-6xl'>
					<HeroCarousel />
				</div>
			</div>


			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
				<h2 className="py-2 text-center text-4xl font-bold text-orange-400">
                    Explore O<span className="relative inline-block pb-1">
                    <span className="relative z-10 pb-1">ur Categor</span>
                    <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 rounded-full z-0 translate-y-1"></span>
                    </span>ies
                </h2>
				<p className='text-center text-xl text-gray-400 mb-12'>
					Discover the latest trends in fashion & Explore new arrivals in electronics % accessories...
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
		</div>
	);
};
export default HomePage;
