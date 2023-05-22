import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("form", values);
      alert("Login Successful");
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Field required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Username should be an email";
      }
      if (!values.password) errors.password = "Field required";
      return errors;
    },
  });

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <h3>Welcome</h3>
            <h5>Please Login</h5>
            <label htmlFor="emailField">Username</label>
            <input
              type="text"
              id="emailField"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="form-control"
              placeholder="Enter email here..."
            />
            {formik.errors.email && (
              <div id="emailError" style={{ color: "red" }}>
                {formik.errors.email}
              </div>
            )}
          </div>
          <div className="form-group">
            <label className="password" htmlFor="pswField">
              Password
            </label>
            <input
              type="password"
              id="pswField"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Enter password here..."
              className="form-control"
            />
            {formik.errors.password && (
              <div id="pswError" style={{ color: "red" }}>
                {formik.errors.password}
              </div>
            )}
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button id="submitBtn" type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
