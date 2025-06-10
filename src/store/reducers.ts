import {
	createAsyncThunk,
	createSlice,
	type PayloadAction,
} from "@reduxjs/toolkit";
import type { LucideIcon } from "lucide-react";
import {
	MapPin,
	Trash2,
	Truck,
	Shield,
	Calendar,
	CreditCard,
} from "lucide-react";
export interface SkipOption {
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

export interface SkipStep {
	icon: LucideIcon;
	label: string;
	active?: boolean;
	completed?: boolean;
}
interface SkipState {
	loading: "idle" | "pending" | "succeeded" | "failed";
	error: string | null;
	skipOptions: SkipOption[];
	selectedSkip: SkipOption;
	selectedSkipId?: number;
	steps: SkipStep[];
	selectedStep: string;
	nextStep: string;
	previousStep: string;
}
const initialState: SkipState = {
	loading: "idle",
	error: null,
	skipOptions: [],
	selectedSkip: {
		id: 0,
		size: 0,
		hire_period_days: 0,
		transport_cost: null,
		per_tonne_cost: null,
		price_before_vat: 0,
		vat: 0,
		postcode: "",
		area: "",
		forbidden: false,
		created_at: "",
		updated_at: "",
		allowed_on_road: false,
		allows_heavy_waste: false,
	},
	steps: [
		{ icon: MapPin, label: "Location", completed: true },
		{ icon: Trash2, label: "Waste Type", completed: true },
		{ icon: Truck, label: "Skip Size", active: true },
		{ icon: Shield, label: "Permits", completed: false },
		{ icon: Calendar, label: "Schedule", completed: false },
		{ icon: CreditCard, label: "Payment", completed: false },
	],
	selectedStep: "Skip Size",
	nextStep: "Permits",
	previousStep: "Waste Type",
	selectedSkipId: 0,
};

const api_base_url = "https://app.wewantwaste.co.uk";

export const getSkipOptions = createAsyncThunk(
	"skips/getSkipOptions",
	async (postcode: string = "NR32"): Promise<SkipOption[]> => {
		const response = await fetch(
			`${api_base_url}/api/skips/by-location?postcode=${postcode}&area=Lowestoft`
		);
		if (!response.ok) {
			throw new Error("Failed to fetch skip options");
		}
		return response.json();
	}
);

const skipSlice = createSlice({
	name: "skips",
	initialState,
	reducers: {
		selectSkip: (state: SkipState, action: PayloadAction<number>) => {
			const selectedSkip = state.skipOptions.find(
				(skip) => skip.id === action.payload
			);
			if (selectedSkip) {
				state.selectedSkip = selectedSkip;
				state.selectedSkipId = selectedSkip.id;
			} else {
				state.selectedSkip = {} as SkipOption;
				state.selectedSkipId = undefined;
			}
		},

		nextStep: (state: SkipState) => {
			const currentStepIndex = state.steps.findIndex((step) => step.active);

			if (currentStepIndex >= 0 && currentStepIndex < state.steps.length - 1) {
				state.steps = state.steps.map((step, index) => {
					if (index === currentStepIndex) {
						return { ...step, active: false, completed: true };
					} else if (index === currentStepIndex + 1) {
						return { ...step, active: true };
					}
					return step;
				});
			}
			state.previousStep = state.steps[currentStepIndex]?.label || "";
			state.nextStep = state.steps[currentStepIndex + 2]?.label || "";
			state.selectedStep = state.steps[currentStepIndex + 1]?.label || "";
		},
		previousStep: (state: SkipState) => {
			const currentStepIndex = state.steps.findIndex((step) => step.active);

			if (currentStepIndex > 0) {
				state.steps = state.steps.map((step, index) => {
					if (index === currentStepIndex) {
						return { ...step, active: false };
					} else if (index === currentStepIndex - 1) {
						return { ...step, active: true, completed: true };
					}
					return step;
				});
			}
			state.selectedStep = state.steps[currentStepIndex - 1]?.label || "";
			state.nextStep = state.steps[currentStepIndex]?.label || "";
			state.previousStep = state.steps[currentStepIndex - 2]?.label || "";
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getSkipOptions.pending, (state: SkipState) => {
			state.loading = "pending";
			state.error = null;
		});
		builder.addCase(getSkipOptions.fulfilled, (state: SkipState, action) => {
			state.loading = "succeeded";
			state.skipOptions = action.payload;
			state.error = null;
		});
		builder.addCase(getSkipOptions.rejected, (state: SkipState, action) => {
			state.loading = "failed";
			state.error = action.error.message || "Failed to fetch skip options";
		});
	},
});
export const { selectSkip } = skipSlice.actions;
export default skipSlice.reducer;
