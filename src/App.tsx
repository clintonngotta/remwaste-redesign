import { useSelector } from "react-redux";
import "./App.css";
import FooterComponent from "./components/footer-component";
import OrderSummaryComponent from "./components/order-summary-component";
import ProductListComponent from "./components/product-list-component";
import StepHeaderComponent from "./components/step-header-component";
import type { RootState } from "./store/store";
import WasteTypeComponent from "./components/waste-type-component";
import PermitsComponent from "./components/permits-component";

function App() {
	const isLoading = useSelector((state: RootState) => state.skips.loading);
	const steps = useSelector((state: RootState) => state.skips.steps);

	return (
		<div className='min-h-screen w-full min-w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white'>
			<StepHeaderComponent />
			{steps.map((step) => {
				if (step.active && step.label === "Waste Type")
					return <WasteTypeComponent />;
				if (step.active && step.label === "Skip Size")
					return (
						<div className='max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12'>
							<div className='grid lg:grid-cols-3 gap-6 lg:gap-8'>
								{/* product list */}
								<div className='lg:col-span-2 space-y-6'>
									<ProductListComponent />
								</div>
								{/* order summary - right */}
								<div className='lg:col-span-1'>
									{isLoading !== "pending" && <OrderSummaryComponent />}
								</div>
							</div>
						</div>
					);
				if (step.active && step.label === "Permits")
					return <PermitsComponent />;
			})}

			<FooterComponent />
		</div>
	);
}

export default App;
