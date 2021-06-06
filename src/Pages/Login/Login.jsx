import React from "react";

import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { history } from "../../Routes/history";

import { Footer } from "../../Components/Footer";
import styles from "./styles.module.scss";

const Login = () => {
  const handleSubmit = (values) => {
    axios
      .post("https://marvelcomics-posts.herokuapp.com/v1/api/auth", values)
      .then((resp) => {
        const { data } = resp;
        if (data) {
          localStorage.setItem("app-token", data);
          history.push("/");
        }
      });
  };

  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  return (
    <section className={styles.loginContainer}>
      <header className={styles.loginHeader}>
        <img
          className={styles.marvelLogo}
          src="/imgs/marvel-logo.svg"
          alt="marvel logo"
        />
        <h1>Comics Posts</h1>
      </header>
      <main>
        <div className={styles.inputWrapper}>
          <h1 className={styles.formTitle}>Login</h1>
          <Formik
            initialValues={{}}
            onSubmit={handleSubmit}
            validationSchema={validations}
          >
            <Form className={styles.form}>
              <div className={styles.formGroup}>
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
                Sign in
              </button>
              <button
                className={styles.btnSubmit}
                onClick={() => history.push("/register")}
              >
                Register
              </button>
            </Form>
          </Formik>
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default Login;
