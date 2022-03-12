import { FieldValidator, Formik } from 'formik'
import React from 'react'
import { MyForm } from './MyForm';
import * as Yup from 'yup';


export interface FormFields {
    email: string;
    password: string;
    username: string;
}

export interface FormErrors {
    email?: string;
    password?: string;
    username?: string;
}

const validate = (values: FormFields): FormErrors => {
    const errors: FormErrors = {};

    if (!values.username) {
        errors.username = 'Username is required';
    } else if (values.username.length < 3) {
        errors.username = 'Username should be at least two characters long.';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(values.password)) {
        errors.password = 'Invalid password';
    }
    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
         errors.email = 'Invalid email address';
    }
    return errors;
}

export const validateEmail: FieldValidator = (email: string) => {
    return new Promise<string | void>(resolve => {
        setTimeout(() => {
            if (['admin@my.com', 'ivan@gmail.com', 'me@my.com'].includes(email)) {
                // return 'Email is already registered.';
                resolve('Email is already registered.');
            }
            resolve()
        }, 1000);
    });
}

const SIGNUP_SCHEMA = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Too Short!')
        .max(15, 'Too Long!')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Invalid password - should conatin at least 1 digit and 1 special sign")
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
});

const EMPTY_USER: FormFields = { email: "", password: "", username: "" }

export const FormikBasicForm = () => {
    return (
        <Formik<FormFields>
            initialValues={EMPTY_USER}
            validate={validate}
            // validationSchema={SIGNUP_SCHEMA}
            // validateOnChange={false}
            onSubmit={
                async (values, actions) => {
                    await new Promise(resolve => setTimeout(resolve, 500));
                    actions.resetForm({
                        values: EMPTY_USER,
                        // you can also set the other form states here
                    });
                    setTimeout(() => alert(JSON.stringify(values)), 0)
                }
            }>
            {props => (<MyForm {...props} />)}
        </Formik>
    )
}
