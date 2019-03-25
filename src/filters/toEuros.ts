const toEuros = (value: number): string => {
	const price = `${value.toFixed(2)} €`;

	return price.replace('.', ',');
};

export default toEuros;
