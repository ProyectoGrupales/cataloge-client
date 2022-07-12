const parserHour = array => {
	// Esto es AM

	if (array[0][0][0])
		return `De ${array[0][0][0]}:${array[0][0][1]}hs a ${array[0][1][0]}:${array[0][1][1]}hs y de ${array[1][0][0]}:${array[1][0][1]}hs a ${array[1][1][0]}:${array[1][1][1]}hs`;
};

export default parserHour;

/*
Posible maquetación
for (let day in attention_hour.days){
	if(day){
		AM, PM
	}
}

attention_hour:{
	lunes:NULL,
	martes:NULL,
	miercoles:NULL,
	jueves:NULL,
	sabado:{
		AM: [[1,1], [1,1] ], 
		PM: [[1,1],[1,1]]
	},
	domingo:{
		AM: [[2,2], [2,2] ], 
		PM: [[0,0],[0,0]]
	}
	lunes_viernes:{
		AM: [[1,1], [1,1] ], 
		PM: [[1,1],[1,1]]
	}
}

*/
