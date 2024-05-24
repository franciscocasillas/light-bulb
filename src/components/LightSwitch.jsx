function LightSwitch({ isOn, toggleLight }) {
	return <button onClick={toggleLight}>{isOn ? "Turn Off" : "Turn On"}</button>;
}

export default LightSwitch;
