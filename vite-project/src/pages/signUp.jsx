// import { Fragment } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
// import useHistory from "react-router-dom";

const SignUpComponent = () => {
  const navigate = useNavigate();
  const signInPageNavigate = () => {
    navigate("/signin");
  };

  // const history = useHistory();

  const defaultValues = {
    email: "",
    password: "",
    name: "",
  };
  const validateSchema = yup.object(defaultValues).shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    terms: yup.boolean().oneOf([true], "Must agree to terms and conditions"),
  });
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);

    // history.push("/signin");
    resetForm();
    setSubmitting(false);
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <h4 className="text-primary mb-2 mt-0 text-center text-3xl font-medium leading-tight text-pink-500">
            Sign Up
          </h4>
          <Formik
            initialValues={defaultValues}
            validationSchema={validateSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="mb-2 mt-8 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                  <div className="relative h-11 w-full min-w-[200px]">
                    <label htmlFor="name"></label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Username"
                      className="border-blue-gray-200 text-blue-gray-700 placeholder-blue-gray-200 disabled:bg-blue-gray-50 h-full w-full rounded-md border bg-transparent px-3 py-3 font-sans text-sm font-normal outline-none transition-all focus:border-2 focus:border-pink-500 focus:outline-none disabled:border-0"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="mt-1 text-xs text-red-500"
                    />
                  </div>
                  <div className="relative h-11 w-full min-w-[200px]">
                    <label htmlFor="email"></label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="border-blue-gray-200 text-blue-gray-700 placeholder-blue-gray-200 disabled:bg-blue-gray-50 h-full w-full rounded-md border bg-transparent px-3 py-3 font-sans text-sm font-normal outline-none transition-all focus:border-2 focus:border-pink-500 focus:outline-none disabled:border-0"
                    />

                    <ErrorMessage
                      name="email"
                      component="div"
                      className="mt-1 text-xs text-red-500"
                    />
                  </div>
                  <div className="relative h-11 w-full min-w-[200px]">
                    <label htmlFor="password"></label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="border-blue-gray-200 text-blue-gray-700 placeholder-blue-gray-200 disabled:bg-blue-gray-50 h-full w-full rounded-md border bg-transparent px-3 py-3 font-sans text-sm font-normal outline-none transition-all focus:border-2 focus:border-pink-500 focus:outline-none disabled:border-0"
                    />

                    <ErrorMessage
                      name="password"
                      component="div"
                      className="mt-1 text-xs text-red-500"
                    />
                  </div>
                </div>
                <div className="mt-2 inline-flex items-center">
                  <Field
                    type="checkbox"
                    name="terms"
                    className="h-4 w-4 rounded"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                    I agree to the{" "}
                    <a href="#" className="text-pink-500 hover:underline">
                      Terms and Conditions
                    </a>
                  </label>
                </div>
                <ErrorMessage
                  name="terms"
                  component="div"
                  className="mt-1 text-xs text-red-500"
                />

                <button
                  className="mt-6 block w-full select-none rounded-lg bg-pink-500 px-6 py-3 text-center align-middle text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-90 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  type="submit"
                  data-ripple-light="true"
                  onClick={() => {
                    signInPageNavigate();
                  }}
                >
                  Register
                </button>
                <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                  Already have an account? &nbsp;
                  <Link
                    to="/signin"
                    className="font-semibold text-pink-500 transition-colors hover:text-blue-700"
                  >
                    Sign In
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export { SignUpComponent };
