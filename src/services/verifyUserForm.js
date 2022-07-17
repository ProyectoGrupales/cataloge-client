export default function validateUserForm(input, form){
    const {name, value} = input

    const emailRegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/ // a@a.co

    switch(name){
        case 'email': 
            return {[name]: value && !emailRegExp.test(value) ? 'Email inválido' : ''};
        case 'password': 
            return {
                [name]: value && value.length<6 ? 'La contraseña debe tener al menos 6 caracteres' : '',
                rePassword:  form.rePassword !== value ? 'Las contraseñas no coinciden' : ''
            };
        case 'rePassword': 
            return {[name]: value && value!==form.password ? 'Las contraseñas no coinciden' : ''};
        default: 
            return null;
    }
}