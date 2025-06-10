# RemWaste Redesign

A modern React + Redux Toolkit web application for skip hire selection and checkout.

## Features

- **Skip Selection:** Browse and select skip sizes with real-time pricing.
- **Step Header:** Visual progress bar for the multi-step order process.
- **Redux Toolkit:** State management for skip options and selection.
- **API Integration:** Fetches skip options from a remote API.
- **Responsive UI:** Built with Tailwind CSS and Lucide icons.

## Project Structure

```
src/
  components/
    product-list-component.tsx   # Skip selection UI, fetches skips from API
    step-header-component.tsx    # Progress header for checkout steps
    products-loadin-skeletom.tsx # Loading skeleton for skip list
  store/
    reducers.ts                  # Redux slice for skips (fetch, select)
    store.ts                     # Redux store setup (combineReducers, etc.)
  ...
```

## Tech STack

- **Vite:** Lightning-fast build tool and dev server.
- **React:** Component-based UI library.
- **Tailwind CSS v4:** Utility-first CSS framework for rapid UI development.
- **shadcn/ui:** Accessible, customizable React component library.
- **Redux Toolkit:** Simplified state management for React and data fetching.

## How It Works

- On load, `ProductListComponent` dispatches `getSkipOptions` to fetch skips for a postcode.
- Skip options are displayed as cards; clicking a card selects it.
- `StepHeaderComponent` shows the current step in the order process.
- Redux state (`skips`) holds skip options, loading state, and the selected skip.

## API

- Fetches skip options from:  
  [https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft](https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft)

## Development

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run locally:**
   ```sh
   npm run dev
   ```
3. **Deploy:**  
   The app is ready for deployment on [Vercel](https://remwaste-redesign.vercel.app/).

4. ## Next Steps
   adding search and filter funtionalities by rate,size and days
