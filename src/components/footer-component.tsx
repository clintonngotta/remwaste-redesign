import { Button } from "@/components/ui/button";
import type { AppDispatch, RootState } from "@/store/store";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

export default function FooterComponent() {
	const selectedSkipData = useSelector(
		(state: RootState) => state.skips.selectedSkip
	);
	const nextStep = useSelector((state: RootState) => state.skips.nextStep);
	const previousStep = useSelector(
		(state: RootState) => state.skips.previousStep
	);

	const dispatch = useDispatch<AppDispatch>();

	const handleBackClick = async () => {
		await dispatch({ type: "skips/previousStep" });
	};

	const handleContinueClick = async () => {
		await dispatch({ type: "skips/nextStep" });
	};
	return (
		<div className='border-t border-gray-700/50 bg-gray-900/50 backdrop-blur-sm sticky bottom-0'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 py-4'>
				<div className='flex items-center justify-between'>
					<Button
						variant='outline'
						size='sm'
						className='border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white'
						onClick={handleBackClick}>
						<ArrowLeft className='w-4 h-4 mr-2 text-blue-600' />
						<span className='hidden sm:inline text-blue-600'>
							Back To {previousStep}
						</span>
					</Button>
					{selectedSkipData.id ? (
						<div className='hidden md:flex flex-col items-center space-x-4 text-sm'>
							<p>
								Imagery and information shown throughout this website may not
								reflect the exact shape or size specification, colours may vary,
								options and/or accessories may be featured at additional cost.
							</p>
							{selectedSkipData && (
								<>
									<span className='text-gray-400'>Selected:</span>
									<span className='font-medium'>
										{selectedSkipData.size} Yard Skip
									</span>
									<span className='text-blue-400 font-bold'>
										£{selectedSkipData.price_before_vat + selectedSkipData.vat}
									</span>
								</>
							)}
						</div>
					) : (
						<div className='hidden md:flex items-center space-x-4 text-sm'>
							<span className='text-gray-400'>No skip selected</span>
						</div>
					)}
					{/* Continue Button */}

					<Button
						size='sm'
						className='bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25'
						onClick={handleContinueClick}>
						<span className='hidden sm:inline'>Continue to {nextStep}</span>
						<span className='sm:hidden'>Continue</span>
						<ArrowRight className='w-4 h-4 ml-2' />
					</Button>
				</div>
			</div>
			{/* Mobile Summary Drawer - Only visible on small screens */}
			{selectedSkipData && (
				<div className='fixed bottom-16 left-0 right-0 bg-gray-800 border-t border-gray-700 p-3 flex items-center justify-between lg:hidden z-10'>
					<div className='flex items-center space-x-3'>
						<div className='w-8 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded'></div>
						<div>
							<div className='font-medium text-sm'>
								{selectedSkipData.size} Yard Skip
							</div>
							<div className='text-blue-400 font-bold text-sm'>
								£{selectedSkipData.price_before_vat + selectedSkipData.vat}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
