import React from "react";

import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { history } from "../../Routes/history";

import { Footer } from "../../Components/Footer";
import styles from "./styles.module.scss";

const baseUrl = process.env.baseURL || "http://localhost:8080";

const Register = () => {
  const handleSubmit = (values) => {
    axios.post(`${baseUrl}/v1/api/user`, values).then((resp) => {
      const { data } = resp;
      if (data) {
        localStorage.setItem("app-token", data);
        history.push("/login");
      }
    });
  };

  const validations = yup.object().shape({
    firstName: yup.string().min(3, "Too Short!").max(50, "To Long!"),
    lastName: yup.string().min(3, "Too Short!").max(50, "To Long!"),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  return (
    <section className={styles.registerContainer}>
      <header className={styles.registerHeader}>
        <img
          className={styles.marvelLogo}
          src="/imgs/marvel-logo.svg"
          alt="marvel logo"
        />
        <h1>Comics Posts</h1>
      </header>
      <div className={styles.inputWrapper}>
        <h1 className={styles.formTitle}>Register</h1>
        <Formik
          initialValues={{}}
          onSubmit={handleSubmit}
          validationSchema={validations}
        >
          <Form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName">FirstName:</label>
              <Field
                name="firstName"
                className={styles.formField}
                type="text"
              />
              <ErrorMessage
                component="span"
                name="firstName"
                className={styles.formError}
              />
              <label htmlFor="lastName">LastName:</label>
              <Field name="lastName" className={styles.formField} type="text" />
              <ErrorMessage
                component="span"
                name="lastName"
                className={styles.formError}
              />
              <label htmlFor="email">Email:</label>
              <Field name="email" className={styles.formField} type="email" />
              <ErrorMessage
                component="span"
                name="email"
                className={styles.formError}
              />
              <label htmlFor="password">Password:</label>
              <Field
                name="password"
                className={styles.formField}
                type="password"
              />
              <ErrorMessage
                component="span"
                name="password"
                className={styles.formError}
              />
            </div>
            <button className={styles.btnSubmit} type="submit">
              Register
            </button>
          </Form>
        </Formik>
      </div>
      <Footer />
    </section>
  );
};

export default Register;
