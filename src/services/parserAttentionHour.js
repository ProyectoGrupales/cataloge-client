const parserHour = array => {
	return `De ${array[0][0][0]}:${array[0][0][1]}hs a ${array[0][1][0]}:${array[0][1][1]}hs y de ${array[1][0][0]}:${array[1][0][1]}hs a ${array[1][1][0]}:${array[1][1][1]}hs`;
};

export default parserHour;
