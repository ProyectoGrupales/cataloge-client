import style from './SelectHour.module.scss';
import { useState, useEffect } from 'react';

const SelectHour = ({ setHour, state, prefixed }) => {

	let prefixedHour, prefixedMin
	if(prefixed) [prefixedHour, prefixedMin] = prefixed.split(':');
	
	const [time, setTime] = useState({
		hour: prefixedHour||'',
		min: prefixedMin||'',
	})

	useEffect(()=>{
		const {hour, min} = time;
		if(state==='on') setHour((hour || min)? (hour + ':' + min) : '');
	}, [time, state])

	const hours = [...Array(24).keys()]
    const minutes = [...Array(6).keys()].map(min=>min*10)

	return (
		<div className={style.container}>
			<select onChange={e => setTime({...time, hour: e.target.value})}>
				<option value=''>--</option>
				{hours.map(hour => (
					<option selected={Number(prefixedHour)===hour} value={hour} key={hour}>
						{hour<10? '0'+hour : hour}
					</option>
				))}
			</select>

			<p className={style.twoPoints}>:</p>

			<select onChange={e => setTime({...time, min: e.target.value})}>
				<option value=''>--</option>
				{minutes.map(minutes => (
					<option selected={Number(prefixedMin)===minutes} value={minutes} key={minutes}>
						{minutes<10? '0'+minutes : minutes}
					</option>
				))}
			</select>

			<p>hrs</p>
		</div>
	)
};

export default SelectHour;
