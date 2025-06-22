import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "../lib/axios";
import toast from "react-hot-toast";
import LoadingSpinner from "./LoadingSpinner";

const PeopleAlsoBought = ({ category }) => {
	const [recommendations, setRecommendations] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchRecommendations = async () => {
			try {
				const res = await axios.get(`/products/recommendations?category=${category}`);
				setRecommendations(res.data);
			} catch (error) {
				console.error("Failed to load recommendations:", error);
				toast.error("Failed to load recommendations");
			} finally {
				setIsLoading(false);
			}
		};

		if (category) {
			fetchRecommendations();
		}
	}, [category]);

	if (isLoading) return <LoadingSpinner />;

	return (
		<div className="mt-8">
			<h2 className="py-2 text-center text-4xl font-bold text-orange-400">
                    Simil<span className="relative inline-block pb-1">
                    <span className="relative z-10 pb-1">ar Produ</span>
                    <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 rounded-full z-0 translate-y-1"></span>
                    </span>cts
                </h2>
		   <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{recommendations.map((product) => (
				<div key={product._id} className="flex justify-center">
					<ProductCard product={product} />
				</div>
			))}
		   </div>
		</div>
	);
};

export default PeopleAlsoBought;
