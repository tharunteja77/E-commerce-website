import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LogIn, Mail, Lock, ArrowRight, Loader } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { login, loading } = useUserStore();

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(email, password);
		login(email, password);
	};

    useEffect(() => {
	    window.scrollTo({ top: 0, behavior: 'smooth' }); // or 'auto' if you don't want smooth scroll
	}, []);

	return (
		<div className='flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
			<motion.div
				className='sm:mx-auto sm:w-full sm:max-w-md'
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
                <h2 className="py-2 text-center text-4xl font-bold text-orange-400">
                    Login to y<span className="relative inline-block pb-1">
                    <span className="relative z-10 pb-1">our ac</span>
                    <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 rounded-full z-0 translate-y-1"></span>
                    </span>count
                </h2>			</motion.div>

			<motion.div
				className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
			>
				<div className='bg-white/20 backdrop-blur-md py-8 px-4 shadow-2xl shadow-black sm:rounded-lg sm:px-10'>
					<form onSubmit={handleSubmit} className='space-y-6'>
						<div>
							<label htmlFor='email' className='block text-sm font-medium text-gray-500'>
								Email address
							</label>
							<div className='mt-1 relative rounded-md shadow-sm'>
								<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
									<Mail className='h-5 w-5 text-gray-400' aria-hidden='true' />
								</div>
								<input
									id='email'
									type='email'
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className=' block w-full px-3 py-2 pl-10 bg-white/30 backdrop-blur-md border border-gray-200 
									rounded-md shadow-sm
									 placeholder-gray-400 focus:outline-none focus:ring-emerald-500 
									 focus:border-emerald-500 sm:text-sm text-black'
									placeholder='you@example.com'
								/>
							</div>
						</div>

						<div>
							<label htmlFor='password' className='block text-sm font-medium text-gray-500'>
								Password
							</label>
							<div className='mt-1 relative rounded-md shadow-sm'>
								<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
									<Lock className='h-5 w-5 text-gray-400' aria-hidden='true' />
								</div>
								<input
									id='password'
									type='password'
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className=' block w-full px-3 py-2 pl-10 bg-white/30 backdrop-blur-md border border-gray-200 
									rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm text-black'
									placeholder='••••••••'
								/>
							</div>
						</div>

						<button
							type='submit'
							className='w-4/5 mx-auto flex justify-center py-2 px-4 border border-transparent 
							rounded-md shadow-sm text-sm font-medium text-white bg-green-600
							 hover:bg-green-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2
							  focus:ring-emerald-500 transition duration-150 ease-in-out disabled:opacity-50'
							disabled={loading}
						>
							{loading ? (
								<>
									<Loader className='mr-2 h-5 w-5 animate-spin' aria-hidden='true' />
									Loading...
								</>
							) : (
								<>
									<LogIn className='mr-2 h-5 w-5' aria-hidden='true' />
									Login
								</>
							)}
						</button>
					</form>

					<p className='mt-8 text-center text-sm text-gray-400'>
						Not a member?{" "}
						<Link to='/signup' className='font-medium text-emerald-400 hover:text-emerald-300'>
							Sign up now <ArrowRight className='inline h-4 w-4' />
						</Link>
					</p>
				</div>
			</motion.div>
		</div>
	);
};
export default LoginPage;
