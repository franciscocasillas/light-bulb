import "./App.css";
import { useState } from "react";
import LightSwitch from "./components/LightSwitch";
import LightBulb from "./components/LightBulb";

function App() {
	const [isLightOn, setIsLightOn] = useState(false);

	const handleToggleLight = () => {
		setIsLightOn(!isLightOn);
	};

	return (
		<div>
			<LightBulb isOn={isLightOn} />
			<LightSwitch isOn={isLightOn} toggleLight={handleToggleLight} />
		</div>
	);
}

export default App;
