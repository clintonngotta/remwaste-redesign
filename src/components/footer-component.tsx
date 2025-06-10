import { Button } from "@/components/ui/button";
import type { RootState } from "@/store/store";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSelector } from "react-redux";

export default function FooterComponent() {
	const selectedSkipData = useSelector(
		(state: RootState) => state.skips.selectedSkip
	);

	return (
		<div className='border-t border-gray-700/50 bg-gray-900/50 backdrop-blur-sm sticky bottom-0'>
			<div className='max-w-7xl mx-auto px-6 py-4'>
				<div className='flex items-center justify-between'>
					<Button
						variant='outline'
						className='border-gray-600 text-blue-600 hover:bg-gray-800 hover:text-white'>
						<ArrowLeft className='w-4 h-4 mr-2' />
						Back
					</Button>
					{selectedSkipData.id ? (
						<div className='hidden md:flex items-center space-x-4 text-sm'>
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

					<Button className='bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25'>
						Continue to Permits
						<ArrowRight className='w-4 h-4 ml-2' />
					</Button>
				</div>
			</div>
		</div>
	);
}
