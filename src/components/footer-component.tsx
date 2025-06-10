import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function FooterComponent() {
	const selectedSkipData = {
		id: 17933,
		size: 4,
		hire_period_days: 14,
		transport_cost: null,
		per_tonne_cost: null,
		price_before_vat: 278,
		vat: 20,
		postcode: "NR32",
		area: "",
		forbidden: false,
		created_at: "2025-04-03T13:51:46.897146",
		updated_at: "2025-04-07T13:16:52.813",
		allowed_on_road: true,
		allows_heavy_waste: true,
	};

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

					<Button className='bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25'>
						Continue to Permits
						<ArrowRight className='w-4 h-4 ml-2' />
					</Button>
				</div>
			</div>
		</div>
	);
}
