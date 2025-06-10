import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

import { Check, Clock, Truck } from "lucide-react";

interface SkipOption {
	id: number;
	size: number;
	hire_period_days: number;
	transport_cost: number | null;
	per_tonne_cost: number | null;
	price_before_vat: number;
	vat: number;
	postcode: string;
	area: string;
	forbidden: boolean;
	created_at: string;
	updated_at: string;
	allowed_on_road: boolean;
	allows_heavy_waste: boolean;
	image?: string;
}
export default function ProductListComponent() {
	const [selectedSkip, setSelectedSkip] = useState(8);

	const skipOptions: SkipOption[] = [
		{
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
		},
		{
			id: 17934,
			size: 6,
			hire_period_days: 14,
			transport_cost: null,
			per_tonne_cost: null,
			price_before_vat: 305,
			vat: 20,
			postcode: "NR32",
			area: "",
			forbidden: false,
			created_at: "2025-04-03T13:51:46.897146",
			updated_at: "2025-04-07T13:16:52.992",
			allowed_on_road: true,
			allows_heavy_waste: true,
		},
		{
			id: 17935,
			size: 8,
			hire_period_days: 14,
			transport_cost: null,
			per_tonne_cost: null,
			price_before_vat: 375,
			vat: 20,
			postcode: "NR32",
			area: "",
			forbidden: false,
			created_at: "2025-04-03T13:51:46.897146",
			updated_at: "2025-04-07T13:16:53.171",
			allowed_on_road: true,
			allows_heavy_waste: true,
		},
		{
			id: 17936,
			size: 10,
			hire_period_days: 14,
			transport_cost: null,
			per_tonne_cost: null,
			price_before_vat: 400,
			vat: 20,
			postcode: "NR32",
			area: "",
			forbidden: false,
			created_at: "2025-04-03T13:51:46.897146",
			updated_at: "2025-04-07T13:16:53.339",
			allowed_on_road: false,
			allows_heavy_waste: false,
		},
		{
			id: 17937,
			size: 12,
			hire_period_days: 14,
			transport_cost: null,
			per_tonne_cost: null,
			price_before_vat: 439,
			vat: 20,
			postcode: "NR32",
			area: "",
			forbidden: false,
			created_at: "2025-04-03T13:51:46.897146",
			updated_at: "2025-04-07T13:16:53.516",
			allowed_on_road: false,
			allows_heavy_waste: false,
		},
		{
			id: 17938,
			size: 14,
			hire_period_days: 14,
			transport_cost: null,
			per_tonne_cost: null,
			price_before_vat: 470,
			vat: 20,
			postcode: "NR32",
			area: "",
			forbidden: false,
			created_at: "2025-04-03T13:51:46.897146",
			updated_at: "2025-04-07T13:16:53.69",
			allowed_on_road: false,
			allows_heavy_waste: false,
		},
		{
			id: 17939,
			size: 16,
			hire_period_days: 14,
			transport_cost: null,
			per_tonne_cost: null,
			price_before_vat: 496,
			vat: 20,
			postcode: "NR32",
			area: "",
			forbidden: false,
			created_at: "2025-04-03T13:51:46.897146",
			updated_at: "2025-04-07T13:16:53.876",
			allowed_on_road: false,
			allows_heavy_waste: false,
		},
		{
			id: 15124,
			size: 20,
			hire_period_days: 14,
			transport_cost: 248,
			per_tonne_cost: 248,
			price_before_vat: 992,
			vat: 20,
			postcode: "NR32",
			area: "",
			forbidden: false,
			created_at: "2025-04-03T13:51:40.344435",
			updated_at: "2025-04-07T13:16:52.434",
			allowed_on_road: false,
			allows_heavy_waste: true,
		},
		{
			id: 15125,
			size: 40,
			hire_period_days: 14,
			transport_cost: 248,
			per_tonne_cost: 248,
			price_before_vat: 992,
			vat: 20,
			postcode: "NR32",
			area: "",
			forbidden: false,
			created_at: "2025-04-03T13:51:40.344435",
			updated_at: "2025-04-07T13:16:52.603",
			allowed_on_road: false,
			allows_heavy_waste: false,
		},
	];
	return (
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
				skipOptions.map((skip) => (
					<Card
						key={skip.id}
						className={`group cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
							selectedSkip === skip.id
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
											src={skip.image || "/placeholder.svg"}
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
									{selectedSkip === skip.id ? (
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
