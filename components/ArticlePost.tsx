
// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

 const FitInputComponent = (
     props: any
    ) => (
   <span {...props} contentEditable onChange={(event) => (props.value = event.target.value)}> Title </span>
 );

function ArticlePost() {
    return (
        <div className="bg-gray-100 rounded-xl shadow-lg ">
            <Formik
            initialValues={{ title: '', content: '' }}
            validate={values => {
                const errors = {};
                if (!values.title) {
                    errors.title = 'Title Required';
                } 
                if (!values.content) {
                    errors.content = 'Content Required'
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
                    <div className="bg-white rounded-t-xl border border-gray-200 py-2">
                        <div className="w-11/12 m-auto">
                            <Field className="block overflow-visible focus:bg-gray-100 text-lg w-full font-semibold focus:outline-0" name="title" component={FitInputComponent} />
                            <ErrorMessage className="text-red-600 border border-red-600 bg-red-100" name="title" component="div" />
                            <div className="text-sm font-normal text-gray-500 inline-block w-fit">
                                By Author on 10/12/2021
                            </div>
                        </div>
                    </div>
                    <div className="border border-gray-200 rounded-b-xl">
                        <div className="w-11/12 m-auto py-2">
                        <Field className="block focus:bg-gray-200 bg-gray-100 text-gray-700 w-full focus:outline-0" as={FitInputComponent} name="content" placeholder="Content" />
                        <ErrorMessage className="text-red-600 bg-red-100 border border-red-600" name="content" component="div" />
                        <div className="m-auto w-fit mt-2">
                            <button className="float-center bg-sky-500 hover:bg-sky-700 text-white rounded py-1 px-5 font-semibold" type="submit" disabled={isSubmitting}>
                                Post
                            </button>
                        </div>
                        </div>
                    </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default ArticlePost;