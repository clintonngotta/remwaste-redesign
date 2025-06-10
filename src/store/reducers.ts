import {
	createAsyncThunk,
	createSlice,
	type PayloadAction,
} from "@reduxjs/toolkit";

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

interface SkipState {
	loading: "idle" | "pending" | "succeeded" | "failed";
	error: string | null;
	skipOptions: SkipOption[];
	selectedSkip: SkipOption;
	selectedSkipId?: number;
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
