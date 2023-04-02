import React from 'react';
import { Field, Form, Formik } from 'formik';
import image3 from '../assets/image3.jpg';

export default function Contact() {
  const handleSubmit = (values) => {
    console.log(values);
  };

  const fields = [
    {
      name: 'Name',
      type: 'text',
    },
    {
      name: 'Email',
      type: 'text',
    },
    {
      name: 'Phone',
      type: 'text',
    },
    {
      name: 'Message',
      type: 'text',
    },
  ];

  return (
    <div className="d-flex w-100 vh-100 position-relative" id="Contact">
      <div className="d-flex flex-column justify-content-center align-items-start col-8 bg-gray-100 position-relative">
        <div className="d-flex flex-column align-items-start font-poppins mb-5 w-50 position-relative start-15">
          <h1 className="m-0 fw-bold text-gray-300">Get in touch</h1>
          <h1 className="m-0 fw-bold text-orange">We are hiring!</h1>
        </div>

        <Formik
          onSubmit={handleSubmit}
          initialValues={{
            Name: '',
            Email: '',
            Phone: '',
            Message: '',
          }}
          validate={(values) => {
            const errors = {};
            if (!values.Name) {
              errors.Name = 'Name required!';
            }

            if (!values.Email) {
              errors.Email = 'Email required!';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i.test(values.Email)
            ) {
              errors.Email = 'Please enter a valid email';
            }

            if (!values.Message) {
              errors.Message = 'Message required!';
            }
            return errors;
          }}
        >
          {({ touched, errors, isValid }) => (
            <Form className="w-50 position-relative start-15">
              <div className="d-flex flex-column w-100">
                {fields.map(({ name, type }) => (
                  <div className="my-3 w-100" key={name}>
                    <Field
                      placeholder={name}
                      className="input-form bg-gray-100 py-2 w-100"
                      name={name}
                      type={type}
                      as={name === 'Message' ? 'textarea' : null}
                    />
                    {touched[name] && errors[name] && (
                      <p className="text-danger my-1">{errors[name]}</p>
                    )}
                  </div>
                ))}
                <button
                  className="bg-orange border-0 text-light col-3 rounded-pill py-3 px-4 mt-4"
                  type="submit"
                  disabled={!isValid}
                >
                  Send
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="col-4 bg-gray-200"></div>
      <img
        src={image3}
        alt="Sunset"
        className="vw-30 position-absolute top-50 end-0 translate-middle"
      />
    </div>
  );
}
