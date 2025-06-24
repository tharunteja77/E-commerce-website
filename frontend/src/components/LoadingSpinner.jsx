const LoadingSpinner = () => {
	return (
		<div className='flex items-center justify-center min-h-screen bg-gray-900'>
			{/* <div className='relative'>
				<div className='w-20 h-20 border-emerald-200 border-2 rounded-full' />
				<div className='w-20 h-20 border-emerald-500 border-t-2 animate-spin rounded-full absolute left-0 top-0' />
				<div className='sr-only'>Loading</div>
			</div> */}
			<div className="grid grid-cols-3 gap-1">
				{[...Array(9)].map((_, i) => (
					<div
						key={i}
						className={`w-4 h-4 bg-cyan-500 animate-ping delay-${i * 100}`}
						style={{
							animationDelay: `${i * 100}ms`,
							animationDuration: "1.2s",
							animationIterationCount: "infinite",
							borderRadius: "0.125rem"
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default LoadingSpinner;
