import { Field, Form, FormikProps } from 'formik'
import React from 'react'
import { DisplayFormikState } from './DisplayFormikState';
import { FormFields, validateEmail } from './FormikBasicForm'



export const MyForm:React.FC<FormikProps<FormFields>> = props => {
    const { errors, touched, isValidating } = props;
    return (
        <Form>
            <Field name="email" placeholder="Email" validate={validateEmail} />
            {touched.email && errors.email && <div className="feedback">{errors.email}</div>}

            <Field name="username" placeholder="Username" />
            {touched.username && errors.username && <div className="feedback">{errors.username}</div>}
            
            <Field name="password" placeholder="Password" />
            {touched.password && errors.password && <div className="feedback">{errors.password}</div>}

            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
            <DisplayFormikState />
        </Form>

    )
}
