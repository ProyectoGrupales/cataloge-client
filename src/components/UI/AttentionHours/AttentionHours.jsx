import { useState } from 'react';
import style from './AttentionHours.module.scss';

export default function AttentionHours({hours, simple}){
	const [ open, toggle ] = useState(false);

	const days = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado']
	const date = new Date().getDay()
	const currentDay = hours.find(e=>e.day===days[date])

	let closestDay
	for(let i=date; i<days.length+date; i++){
		for(let j=0; j<hours.length; j++){
			if(hours[j]?.day === days[i%7]){
				closestDay = hours[j]
				break
			}
		}
		if(closestDay) break
	}

	return (
		<div className={style.container}>
			<span>
				{currentDay? `Abierto ⋅ Cierra a las ${currentDay.endRange}` : `Cerrado ⋅ Abre el ${closestDay?.day} a las ${closestDay?.startRange} hrs`}
				{!simple && <button className={style.button} onClick={()=>toggle(!open)}>{!open?'▼':'▲'}</button>}
			</span>
			{open && !simple && 
				<div className={style.list}>
					{hours.map(e=>{
                        const startRange = e.startRange.split(':').map(number=>number.length === 1 ? (`0${number}`) : number).join(':')
                        const endRange = e.endRange.split(':').map(number=>number.length === 1 ? (`0${number}`) : number).join(':')
						return (
							<div key={e.day}>
								<span className={style.title}>{e.day}</span>
								<span>{startRange} hrs - {endRange} hrs</span>
							</div>
						)
					})}
				</div>
			}
		</div>
	)
};