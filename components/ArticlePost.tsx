
// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function ArticlePost() {
    return (
        <div className="bg-gray-100 rounded-xl border border-gray-200 shadow-lg py-2 px-4">
            <div className="text-gray-600 pt-1">
                Content
            </div>
            <h1>Any place in your app!</h1>
            <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                errors.email = 'Required';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
            >
                {({ isSubmitting }) => (
                    <Form>
                    <Field className="bg-gray-100 border border-gray-200 text-lg w-full font-semibold focus:outline-0" type="text" name="email" placeholder="Title" />
                    <ErrorMessage className="text-red-600 border border-red-600" name="email" component="div" />
                    <div className="text-sm font-normal text-gray-600 inline-block w-fit">
                        By Author on 10/12/2021
                    </div>
                    <Field className="block bg-gray-100 border border-gray-200 w-full focus:outline-0" type="text" name="password" placeholder="Content" />
                    <ErrorMessage name="password" component="div" />
                    <div className="m-auto w-fit">
                        <button className="float-center bg-sky-500 hover:bg-sky-700 text-white rounded py-1 px-5 font-semibold" type="submit" disabled={isSubmitting}>
                            Post
                        </button>
                    </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default ArticlePost;