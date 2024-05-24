function LightBulb({ isOn }) {
	return (
		<div>
			{isOn ? (
				<img
					src="https://i.pinimg.com/564x/67/a1/3e/67a13e6745ab80e753908f7bad391f79.jpg"
					alt="Lights on"
				/>
			) : (
				<img
					src="https://i.pinimg.com/564x/65/5c/18/655c1872c8a69d664bf2f104a78d13a4.jpg"
					alt="Lights off"
				/>
			)}
		</div>
	);
}

export default LightBulb;
