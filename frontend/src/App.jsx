import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const PurchaseSuccessPage = lazy(() => import("./pages/PurchaseSuccessPage"));
const PurchaseCancelPage = lazy(() => import("./pages/PurchaseCancelPage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));

import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { useUserStore } from "./stores/useUserStore";
import { useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import { useCartStore } from "./stores/useCartStore";
import Footer from "./components/Footer";


function App() {
	const { user, checkAuth, checkingAuth } = useUserStore();
	const { getCartItems } = useCartStore();
	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	useEffect(() => {
		if (!user) return;

		getCartItems();
	}, [getCartItems, user]);

	if (checkingAuth) return <LoadingSpinner />;

	return (
		<div className='min-h-screen bg-gray-900 text-white relative overflow-hidden'>
			{/* Background gradient */}
			<div className='absolute inset-0 overflow-hidden'>
				<div className='absolute inset-0'>
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-white" />
				</div>
			</div>

			<div className='relative z-50 pt-20'>
				<Navbar />
				<Suspense fallback={<LoadingSpinner />}>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/signup' element={!user ? <SignUpPage /> : <Navigate to='/' />} />
					<Route path='/login' element={!user ? <LoginPage /> : <Navigate to='/' />} />
					<Route
						path='/secret-dashboard'
						element={user?.role === "admin" ? <AdminPage /> : <Navigate to='/login' />}
					/>
					<Route path='/category/:category' element={<CategoryPage />} />
					<Route path='/cart' element={user ? <CartPage /> : <Navigate to='/login' />} />
					<Route
						path='/purchase-success'
						element={user ? <PurchaseSuccessPage /> : <Navigate to='/login' />}
					/>
					<Route path='/purchase-cancel' element={user ? <PurchaseCancelPage /> : <Navigate to='/login' />} />

					<Route path='/product/:id' element={<ProductDetailPage />} />

				</Routes>
				</Suspense>
				<Footer />
			</div>
			<Toaster />
		</div>
	);
}

export default App;
