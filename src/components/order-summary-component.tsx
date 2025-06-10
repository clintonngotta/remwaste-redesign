import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

export default function OrderSummaryComponent() {
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
		<div className='sticky top-32'>
			<Card className='bg-gray-800/50 border border-gray-700'>
				<CardContent className='p-6'>
					<h3 className='text-xl font-bold mb-4 text-center text-white '>
						Order Summary
					</h3>

					{selectedSkipData && (
						<div className='space-y-4'>
							{/* Selected Skip Preview */}
							<div className='bg-gray-900/50 rounded-lg p-4'>
								<div className='flex items-center space-x-3 mb-3'>
									<div className='w-12 h-9 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded'></div>
									<div>
										<div className='flex flex-row font-semibold text-blue-600'>
											<span>{selectedSkipData.size} Skip Yard</span>
											<span className='ml-16'>
												£{selectedSkipData.price_before_vat}
											</span>
										</div>
										<div className='text-sm text-white/40'>
											{selectedSkipData.hire_period_days} days hire Period
										</div>
									</div>
								</div>
							</div>

							<Separator className='bg-gray-700' />

							{/* Price Breakdown */}
							<div className='space-y-2'>
								<div className='flex justify-between'>
									<span className='text-gray-400'>Skip hire</span>
									<span className='text-white'>
										£ {selectedSkipData.price_before_vat}
									</span>
								</div>
								<div className='flex justify-between'>
									<span className='text-gray-400'>Vat</span>

									<div className='text-xs text-white text-center'>
										£ {selectedSkipData.vat}
									</div>
								</div>

								<Separator className='bg-gray-700' />
								<div className='flex justify-between text-lg font-bold'>
									<span className='text-blue-400'>Total</span>
									<span className='text-blue-400'>
										£ {selectedSkipData.price_before_vat + selectedSkipData.vat}
									</span>
								</div>
							</div>

							{/* Features */}
							<div className='bg-blue-900/20 rounded-lg p-4 space-y-2'>
								<div className='text-sm font-medium text-blue-400 mb-2'>
									What's included:
								</div>
								<div className='space-y-1 text-sm text-gray-300'>
									<div className='flex items-center space-x-2'>
										<Check className='w-3 h-3 text-green-400' />
										<span>Free delivery & collection</span>
									</div>
									<div className='flex items-center space-x-2'>
										<Check className='w-3 h-3 text-green-400' />
										<span>
											{selectedSkipData.hire_period_days} day hire period
										</span>
									</div>
									<div className='flex items-center space-x-2'>
										<Check className='w-3 h-3 text-green-400' />
										<span>Waste disposal included</span>
									</div>
									<div className='flex items-center space-x-2'>
										<Check className='w-3 h-3 text-green-400' />
										<span>No hidden fees</span>
									</div>
								</div>
							</div>
						</div>
					)}
				</CardContent>
			</Card>
		</div>
	);
}
