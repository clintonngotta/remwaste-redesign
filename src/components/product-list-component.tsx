"use client";
import { useEffect } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Check, Clock, Truck } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { getSkipOptions, type SkipOption } from "@/store/reducers";
import LoadinSkeletonComponent from "./products-loadin-skeletom";

export default function ProductListComponent() {
	const dispatch = useDispatch<AppDispatch>();
	const skipOptions = useSelector(
		(state: RootState) => state.skips.skipOptions
	);
	const selectedSkip = useSelector(
		(state: RootState) => state.skips.selectedSkip
	);

	const isLoading = useSelector((state: RootState) => state.skips.loading);

	const fetchSkips = async () => {
		await dispatch(getSkipOptions("NR32"));
	};

	useEffect(() => {
		fetchSkips();
	}, []);

	const setSelectedSkip = (id: number) => {
		dispatch({ type: "skips/selectSkip", payload: id });
	};

	return isLoading === "pending" ? (
		<div className='flex flex-col  h-full'>
			<LoadinSkeletonComponent />
			<LoadinSkeletonComponent />
			<LoadinSkeletonComponent />
			<LoadinSkeletonComponent />
		</div>
	) : (
		<div className='space-y-4'>
			{skipOptions.length === 0 ? (
				<Card className='bg-gray-800/50 border border-gray-700'>
					<CardContent className='p-12 text-center'>
						<h3 className='text-xl font-semibold text-gray-300 mb-2'>
							No skips found
						</h3>
					</CardContent>
				</Card>
			) : (
				skipOptions.map((skip: SkipOption) => (
					<Card
						key={skip.id}
						className={`group cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
							selectedSkip.id === skip.id
								? "bg-gradient-to-r from-blue-900/50 to-blue-800/30 border-2 border-blue-500 shadow-xl shadow-blue-500/20"
								: "bg-gray-800/50 border border-gray-700 hover:border-gray-600 hover:bg-gray-800/70"
						}`}
						onClick={() => setSelectedSkip(skip.id)}>
						<CardContent className='p-6'>
							<div className='flex items-center space-x-6'>
								{/* Skip Image */}
								<div className='relative flex-shrink-0'>
									<div className='w-32 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg overflow-hidden shadow-lg'>
										<img
											src={skip.image || "/placeholder.webp"}
											alt={skip.size + " Yard Skip"}
											loading='lazy'
											width={128}
											height={96}
											className='w-full h-full object-cover'
										/>
									</div>
									<Badge className='absolute -top-2 -right-2 bg-blue-600 hover:bg-blue-600 text-white font-bold'>
										{skip.size} Yards
									</Badge>
								</div>

								{/* Skip Details */}
								<div className='flex-1 min-w-0'>
									<div className='flex items-start justify-between mb-2'>
										<h3 className='text-xl font-bold text-white group-hover:text-blue-400 transition-colors'>
											{skip.size} Yard Skip
										</h3>
										<div className='text-right'>
											<div className='text-2xl font-bold text-blue-400'>
												£{skip.price_before_vat + skip.vat}
											</div>
											<div className='text-sm text-gray-400'>inc. VAT</div>
										</div>
									</div>

									<p className='text-gray-300 text-sm mb-3 line-clamp-2'>
										{skip.hire_period_days} days hire period.
									</p>

									<div className='flex items-center space-x-4 text-sm text-gray-400'>
										<div className='flex items-center space-x-1'>
											<Clock className='w-4 h-4' />
											<span>{skip.hire_period_days} days</span>
										</div>
										<div className='flex items-center space-x-1'>
											<Truck className='w-4 h-4' />
											<span>Free delivery</span>
										</div>
									</div>

									{/* Tags */}
									<div className='flex flex-wrap gap-1 mt-2'>
										{skip.allowed_on_road && (
											<Badge
												variant='secondary'
												className='text-xs bg-gray-700 text-gray-300 hover:bg-gray-600'>
												Allowed on road
											</Badge>
										)}
										{skip.allows_heavy_waste && (
											<Badge
												variant='secondary'
												className='text-xs bg-gray-700 text-gray-300 hover:bg-gray-600'>
												Allows Heavy Waste
											</Badge>
										)}
									</div>
								</div>

								{/* Selection Indicator */}
								<div className='flex-shrink-0'>
									{selectedSkip.id === skip.id ? (
										<div className='w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center'>
											<Check className='w-4 h-4 text-white' />
										</div>
									) : (
										<div className='w-6 h-6 border-2 border-gray-600 rounded-full group-hover:border-blue-500 transition-colors' />
									)}
								</div>
							</div>
						</CardContent>
					</Card>
				))
			)}
		</div>
	);
}
