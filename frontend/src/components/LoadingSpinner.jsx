const LoadingSpinner = () => {
	return (
		<div className='flex items-center justify-center min-h-screen bg-gray-900'>
			<div className="relative w-[200px] h-[200px]">
				<div className="absolute w-full h-full rounded-full border-b-8 border-[#ff00ff] animate-ring1" />
				<div className="absolute w-full h-full rounded-full border-b-8 border-[#00f7ff] animate-ring2" />
				<div className="absolute w-full h-full rounded-full border-t-8 border-[#00ff0d] animate-ring3" />
				<span className="absolute text-white left-[70px] top-[100px]">Loading...</span>
			</div>
		</div>
	);
};

export default LoadingSpinner;
