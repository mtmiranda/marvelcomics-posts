import React from "react";

import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { history } from "../../Routes/history";

import styles from "./styles.module.scss";

const Register = () => {
  const handleSubmit = (values) => {
    axios.post("http://localhost:8080/v1/api/user", values).then((resp) => {
      const { data } = resp;
      if (data) {
        localStorage.setItem("app-token", data);
        history.push("/login");
      }
    });
  };

  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  return (
    <section className={styles.registerContainer}>
      <div className={styles.inputWrapper}>
        <Formik
          initialValues={{}}
          onSubmit={handleSubmit}
          validationSchema={validations}
        >
          <Form className={styles.form}>
            <div className={styles.formGroup}>
              <Field name="firstName" className={styles.formField} />
              <ErrorMessage
                component="span"
                name="firstName"
                className={styles.formError}
              />
            </div>
            <div className={styles.formGroup}>
              <Field name="lastName" className={styles.formField} />
              <ErrorMessage
                component="span"
                name="lastName"
                className={styles.formError}
              />
            </div>
            <div className={styles.formGroup}>
              <Field name="email" className={styles.formField} />
              <ErrorMessage
                component="span"
                name="email"
                className={styles.formError}
              />
            </div>
            <div className={styles.formGroup}>
              <Field name="password" className={styles.formField} />
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
    </section>
  );
};

export default Register;
