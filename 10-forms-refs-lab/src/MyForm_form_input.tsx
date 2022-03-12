import { Field, FormikProps } from 'formik'
import React from 'react'
import { FormFields } from './FormikBasicForm'

export const MyForm:React.FC<FormikProps<FormFields>> = props => {
    return (
        <form onSubmit={props.handleSubmit} onReset={props.handleReset}>
            <input 
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.email}
                name="email"
                placeholder="email"  
            />
            {props.errors.email && <div className="feedback">{props.errors.email}</div>}

            <input 
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.username}
                name="username"
                placeholder="username"  
            />
            {props.errors.username && <div className="feedback">{props.errors.username}</div>}

            <input 
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.password}
                name="password" 
                placeholder="password" 
                />
            {props.errors.password && <div className="feedback">{props.errors.password}</div>}

            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
        </form>
    )
}
