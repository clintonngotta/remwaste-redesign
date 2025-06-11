import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import StoreProvider from "./store/StoreProvider.tsx";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<StoreProvider>
			<App />
		</StoreProvider>
		<Analytics />
	</StrictMode>
);
