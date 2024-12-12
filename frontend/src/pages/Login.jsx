import { Field, Form, Formik } from "formik";
import React from "react";

const Login = () => {
  return (
    <Formik initialValues={{ login: "", password: "" }}>        
      <Form>
      <div className="form-group">
        <label htmlFor="login">Login</label>
        <Field
          type="login"
          name="login"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <Field
          type="password"
          name="password"
          className="form-control"
        />
      </div>
      <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};

export default Login;
