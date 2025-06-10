import "./App.css";
import OrderSummaryComponent from "./components/order-summary-component";
import ProductListComponent from "./components/product-list-component";
import StepHeaderComponent from "./components/step-header-component";

function App() {
	return (
		<div className='min-h-screen w-full min-w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white'>
			<StepHeaderComponent />
			<div className='max-w-7xl mx-auto px-6 py-12'>
				<div className='grid lg:grid-cols-3 gap-8'>
					{/* product list */}
					<div className='lg:col-span-2 space-y-6'>
						<ProductListComponent />
					</div>
					{/* order summary - right */}
					<div className='lg:col-span-1'>
						<OrderSummaryComponent />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
