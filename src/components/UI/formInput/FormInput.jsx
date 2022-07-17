import style from './FormInput.module.scss';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function FormInput({type, name, placeholder, value, error, onChange, label, area}) {
    const [viewPassword, setViewPassword] = useState(false);

    const inputProps={type: viewPassword? 'text':type, name, placeholder, onChange, value: value && value[name]}

    const togglePassword = e => {
        e.preventDefault()
        setViewPassword(!viewPassword)
    }

    return (
        <div className={style.container}>
            <label htmlFor={name}>{label}</label>
            <div className={style.input}>
                {area?<textarea {...inputProps}/>:<input {...inputProps}/>}
                {type === 'password' && 
                    <span onClick={togglePassword} className={style.button}>
                        {viewPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </span>}
            </div>
            {error && <span className={style.error}>{error[name]}</span>}
        </div>
    )
}