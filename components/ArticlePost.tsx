
// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();


function ArticlePost() {
    const axios = require('axios');
    return (
        <div className="bg-gray-100 rounded-xl shadow-lg ">
            <Formik
            initialValues={{ title: '', content: '', author_name: '' }}
            validate={values => {
                const errors = {};
                if (!values.title) {
                    errors.title = 'Title Required';
                } 
                if (!values.content) {
                    errors.content = 'Content Required';
                }
                if (!values.author_name) {
                    errors.author_name = 'Author Name Required';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    console.log(values);
                    axios.post('https://travel-blog-api-778.herokuapp.com/api/create/', values)
                    .then(function (response: any) {
                        console.log(response);
                    })
                    .catch(function (error: any) {
                        console.log(error);
                    });
                    setSubmitting(false);
                }, 400);
            }}
            >
                {({ isSubmitting }) => (
                    <Form>
                    <div className="bg-white rounded-t-xl border border-gray-200 py-2">
                        <div className="w-11/12 m-auto">
                            <Field className="block overflow-visible focus:bg-gray-100 text-lg w-full font-semibold focus:outline-0" placeholder="Title" name="title" component="textarea" />
                            <ErrorMessage className="text-red-600 border border-red-600 bg-red-100" name="title" component="div" />
                            <div className="text-sm font-normal text-gray-500 inline-block w-fit">
                                
                                <div className="inline-block mr-2">
                                    By    
                                </div> 
                                
                                <Field className="focus:outline-0 focus:bg-gray-100 inline-block mr-2" placeholder="Name" name="author_name" />
                                <div className="inline-block">
                                    on 
                                    { " "+  mm + "/" + dd + "/" + yyyy}
                                </div>
                            </div>
                            <ErrorMessage className="text-red-600 border border-red-600 bg-red-100" name="author_name" component="div" />
                        </div>
                    </div>
                    <div className="border border-gray-200 rounded-b-xl">
                        <div className="w-11/12 m-auto py-2">
                        <Field className="block focus:bg-gray-200 bg-gray-100 text-gray-700 w-full focus:outline-0" component="textarea" name="content" placeholder="Content" />
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