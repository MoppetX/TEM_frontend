/*  */

import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Link } from '@reach/router';
// import { Link } from '@reach/router';
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { EditorState } from 'draft-js';
// import { RichEditor } from './RichEditor';
// import { Debug } from '../Debug';

const initialValues = {
  friends: [
    {
      name: '',
      email: '',
    },
  ],
  editorState: new EditorState.createEmpty(),
};

const RecipeForm = () => {
  return (
    <div id={'recipe-form'} className="recipe-form">
      <h1>Invite Friends</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          friends: Yup.array().of(
            Yup.object({
              name: Yup.string().required('Required'),
              email: Yup.string()
                .email('Invalid Email')
                .required('Required'),
            }),
          ),
        })}
        onSubmit={values => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
        {/*{({ values, isSubmitting, setFieldValue }) => (*/}
        {({ values, isSubmitting }) => (
          <Form>
            {/* TODO: the field array would be nice to use for adding ingredients */}
            <FieldArray name={'friends'}>
              {/* render prop */}
              {({ push, remove }) => (
                <React.Fragment>
                  {values.friends &&
                    values.friends.length > 0 &&
                    values.friends.map((friend, index) => (
                      <div className="row" key={index}>
                        <div className="col">
                          {/* TODO SAI: huh? Formik supports Low Dash */}
                          <Field name={`friends[${index}].name`}>
                            {/* TODO SAI: what is this? */}
                            {/*{({ field, form }) => (*/}
                            {({ field }) => (
                              <input
                                {...field}
                                type={'text'}
                                placeholder={'Jane Doe'}
                              />
                            )}
                          </Field>
                          {/* need to pass the same thing you passed to your field */}
                          <ErrorMessage name={`friends[${index}].name`}>
                            {msg => <div className={'field-error'}>{msg}</div>}
                          </ErrorMessage>
                        </div>
                        <div className="col">
                          <Field
                            name={`friends[${index}].email`}
                            type={'email'}
                            placeholder={'jane@doe.com'}
                          />
                        </div>
                        <ErrorMessage name={`friends[${index}].email`}>
                          {msg => <div className={'field-error'}>{msg}</div>}
                        </ErrorMessage>
                        <div className="col">
                          <button type={'button'} onClick={() => remove(index)}>
                            X
                          </button>
                        </div>
                      </div>
                    ))}
                  <button
                    type={'button'}
                    className={'secondary'}
                    onClick={() => push({ name: '', email: '' })}
                  >
                    Add Friend
                  </button>
                </React.Fragment>
              )}
            </FieldArray>
            <button type={'submit'} disabled={isSubmitting}>
              Invite
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RecipeForm;

// editorState: new Editorstate.createEmpty()
