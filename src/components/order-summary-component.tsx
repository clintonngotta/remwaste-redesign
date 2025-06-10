import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { RootState } from "@/store/store";
import { Check } from "lucide-react";
import { useSelector } from "react-redux";

export default function OrderSummaryComponent() {
	const selectedSkipData = useSelector(
		(state: RootState) => state.skips.selectedSkip
	);

	return (
		<div className='lg:sticky lg:top-32'>
			<Card className='bg-gray-800/50 border border-gray-700'>
				<CardContent className='p-6'>
					<h3 className='text-xl font-bold mb-4 text-center text-white '>
						Order Summary
					</h3>

					{selectedSkipData.id ? (
						<div className='space-y-4'>
							{/* Selected Skip Preview */}
							<div className='bg-gray-900/50 rounded-lg p-4'>
								<div className='flex items-center space-x-3 mb-3'>
									<div className='w-12 h-9 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg overflow-hidden shadow-lg'>
										<img
											src={selectedSkipData.image || "/placeholder.webp"}
											alt={selectedSkipData.size + " Yard Skip"}
											loading='lazy'
											width={128}
											height={96}
											className='w-full h-full object-cover'
										/>
									</div>

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
					) : (
						<p className='text-white'>
							Please select a skip to see the order summary.
						</p>
					)}
					<Separator className='bg-gray-700 my-4' />
				</CardContent>
			</Card>
		</div>
	);
}
