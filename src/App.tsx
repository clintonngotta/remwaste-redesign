import "./App.css";
import { Button } from "./components/ui/button";

function App() {
	return (
		<div className='flex min-h-svh flex-col items-center justify-center'>
			<Button variant='outline'>Click me</Button>
			<h1 className='text-3xl font-bold underline text-blue'>Hello world!</h1>
		</div>
	);
}

export default App;
