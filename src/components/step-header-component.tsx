import {
	MapPin,
	Trash2,
	Truck,
	Shield,
	Calendar,
	CreditCard,
	Check,
} from "lucide-react";

export default function StepHeaderComponent() {
	const steps = [
		{ icon: MapPin, label: "Location", completed: true },
		{ icon: Trash2, label: "Waste Type", completed: true },
		{ icon: Truck, label: "Skip Size", active: true },
		{ icon: Shield, label: "Permits", completed: false },
		{ icon: Calendar, label: "Schedule", completed: false },
		{ icon: CreditCard, label: "Payment", completed: false },
	];

	return (
		<div className='border-b border-gray-700/50 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10'>
			<div className='min-w-full px-6 py-6'>
				<div className='flex items-center justify-center mb-6'>
					<div className='flex items-center space-x-2'>
						{steps.map((step, index) => {
							const Icon = step.icon;
							return (
								<div key={step.label} className='flex items-center'>
									<div
										className={`flex items-center space-x-3 px-4 py-2 rounded-full transition-all duration-300 ${
											step.active
												? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
												: step.completed
												? "bg-green-600 text-white"
												: "bg-gray-700 text-gray-400"
										}`}>
										<Icon className='w-4 h-4' />
										<span className='text-sm font-medium hidden sm:block'>
											{step.label}
										</span>
										{step.completed && <Check className='w-4 h-4' />}
									</div>
									{index < steps.length - 1 && (
										<div
											className={`w-8 h-0.5 mx-2 transition-colors duration-300 ${
												step.completed ? "bg-green-600" : "bg-gray-700"
											}`}
										/>
									)}
								</div>
							);
						})}
					</div>
				</div>
				{/* Header Text */}
				<div className='text-center'>
					<h1 className='font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
						Choose Your Skip Size
					</h1>
					<p className='text-gray-400 text-lg max-w-2xl mx-auto'>
						Select the skip size that best suits your needs
					</p>
				</div>
			</div>
		</div>
	);
}
