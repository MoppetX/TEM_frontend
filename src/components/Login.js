import React from 'react';
// import { Formik } from 'formik';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';

// import ReactDOM from 'react-dom';
// import { Router, Link } from '@reach/router';
// import { Link } from '@reach/router';

const inputStyle = {
  fontSize: '3rem',
};

const Login = ({ values, errors, touched, isSubmitting }) => {
  return (
    <div>
      <Form id={'login'}>
        <div>
          {touched.email && errors.email && <p>{errors.email}</p>}
          <label htmlFor="user-email">E-mail:</label>
          <Field
            type="email"
            name="email"
            id="user-email"
            placeholder={'Your Email'}
            style={inputStyle}
          />
        </div>
        <br />
        <div>
          {touched.password && errors.password && <p>{errors.password}</p>}
          <label htmlFor="password">Password:</label>
          <Field
            type="password"
            name="password"
            id="user-password"
            placeholder={'your password'}
            style={inputStyle}
          />
        </div>
        <br />
        <label htmlFor="newsletter">
          <Field
            type={'checkbox'}
            name={'newsletter'}
            checked={values.newsletter}
          />
          Join our newsletter
        </label>
        <br />
        <Field component={'select'} name={'plan'}>
          <option value="free">Free</option>
          <option value="premium">Premium</option>
        </Field>

        <button type={'submit'} disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    </div>
  );
};

// withFormik: higher Order function; returns a function
// pay attention to the immediate invocation at the TAIL END
const FormikLogin = withFormik({
  // the props being passed here could be data from you DB
  // TODO SAI: what does this mean for my setup?
  mapPropsToValues({ email, password, newsletter, plan }) {
    return {
      email: email || '',
      password: password || '',
      newsletter: newsletter || false,
      plan: plan || 'premium',
    };
  },
  validationSchema: yup.object().shape({
    // error messages!
    email: yup
      .string()
      .email('Email not valid')
      .required('Email is required'),
    password: yup
      .string()
      .min(12, 'Password must be 12 characters or longer')
      .required('Password is required'),
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      if (values.email === 'andrew@test.io') {
        setErrors({ email: 'That Email is already taken' });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 3000);
    // this is where you'd make a graphQL/HTP request or run some JS
    console.log('handleSubmit');
    console.log(values);
  },
})(Login);

export default FormikLogin;
