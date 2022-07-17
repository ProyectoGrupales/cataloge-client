import style from './OfficeHours.module.scss';
import SelectHour from '../selectHour/SelectHour';
import {useState, useEffect} from 'react';

const days = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo', 'feriados'];

const OfficeHours = ({ setTimeRange, hours }) => {

    return (
        <div className={style.container}>
            Horarios de atención
            {days.map((day, i)=>{
                const foundDay = hours[day]
                const [state, setState] = useState(foundDay?'on':'off');
                const [selectedRange, setRange] = useState({
                    ...foundDay || {day, startRange: '', endRange: ''}
                })

                useEffect(()=>{
                    const {startRange, endRange} = selectedRange;
                    setTimeRange({day, ...state==='off' || !(startRange||endRange) ? {remove: true} : {startRange, endRange}})
                }, [state, selectedRange])

                return (
                    <div className={style.day_container} key={i}>
                        <div className={style.toggle}>
                            <span className={style.day}>{day.charAt(0).toUpperCase() + day.slice(1)}</span>
                            <div className={`${style.slider} ${style['slider_' + state]}`} onClick={() => setState(state==='off'? 'on' : 'off')}>
                                <div className={`${style.slide_check} ${style['slide_check_' + state]}`}/>
                            </div>
                        </div>
                        <div className={style.settings}>
                            <span className={style.state}>{state==='on'? 'Abierto' : 'Cerrado'}</span>
                            <div className={`${style.service_hours} ${style['service_hours_' + state]}`}>
                                <span>de</span> 
                                <SelectHour setHour={startRange=>setRange({...selectedRange, startRange})} state={state} prefixed={foundDay?.startRange}/> 
                                <span>a</span>
                                <SelectHour setHour={endRange=>setRange({...selectedRange, endRange})} state={state} prefixed={foundDay?.endRange}/>
                            </div>
                        </div>
                    </div>
                )
            })}
            
        </div>
    )
};

export default OfficeHours;
