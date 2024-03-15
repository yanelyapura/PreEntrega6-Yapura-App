import * as Yup from 'yup';

const signupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Ingresa un correo electrónico válido')
        .required('El correo electrónico es obligatorio'),
    password: Yup.string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .required('La contraseña es obligatoria'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
        .required('Debes confirmar tu contraseña'),
});

export default signupSchema;
