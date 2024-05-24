import "./App.css";
import { useState } from "react";
import LightSwitch from "./components/LightSwitch";

function App() {
	const [isLightOn, setIsLightOn] = useState(false);

	const handleToggleLight = () => {
		setIsLightOn(!isLightOn);
	};

	return (
		<div>
			<LightSwitch isOn={isLightOn} toggleLight={handleToggleLight} />
		</div>
	);
}

export default App;
