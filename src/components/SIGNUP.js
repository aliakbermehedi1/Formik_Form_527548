import React from "react";
import {
  Formik,
  Form,
  Field,
  FieldArray,
  ErrorMessage,
  yupToFormErrors,
} from "formik";
import * as yup from "yup";
import KERRORMESSAGE from "./KERRORMESSAGE";

const validationSchema = yup.object({
  name: yup.string().required("name is required"),
  phone: yup
    .number()
    .min(1000000000, "Not valid phone number")
    .max(9999999999, "Not valid phone number")
    .required("phone is required"),
  password: yup.string().required("password is required"),
    // .matches(
    //   // "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
    //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    // )
  gender: yup.string().required("gender is required"),
  date: yup.date().required("date of birth is required"),
  income: yup
  .string()
    .min(5, "Too short")
    .max(500, "Too long string")
    .required("income is required"),
  // about: yup.string().required("name is required"),
});


// const style = {
//   // margin: '',
//   fontSize: '1.5em',
// };

// const styleError = {
//   margin: '1em 10em',
//   fontSize: '1.5em',
// };

const SIGNUP = () => {
  return (
    <div style={{backgroundImage: `url("https://www.bwfund.org/wp-content/uploads/2022/05/Copy-of-Untitled.png")`}}>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: "",
          phone: "",
          password: "",
          gender: "",
          date: "",
          income: "",
          about: "",
          social: [],
          hobbies: [],
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form>
            <h2>Customize Formik</h2>
            <br />
            <label>Name:</label>
            <Field name="name" type="text" />
            <KERRORMESSAGE name="name" />
            <br />
            <label>Phone:</label>
            <Field name="phone" type="number" />
            <KERRORMESSAGE name="phone" />
            <br />
            <label>Password:</label>
            <Field name="password" type="password" />
            {/* <KERRORMESSAGE name="password" /> */}
            <br />
            <label>Gender:</label>
            <br />
            <label>Male</label>
            <Field name="gender" value="male" type="radio" />
            <label>Female</label>
            <Field name="gender" value="female" type="radio" />
            <KERRORMESSAGE name="gender" />
            <br />
            <label>Date:</label>
            <Field name="date" type="date" />
            <KERRORMESSAGE name="date" />
            <br />
            <label>Income:</label>
            <Field name="income" as="select">
              <option value="0">0 Taka</option>
              <option value="100">100 Taka</option>
              <option value="500">500 Taka</option>
              <option value="1000">1000 Taka</option>
              <option value="10000">10000 Taka</option>
              <option value="100000">10000 Taka</option>
            </Field>
            <KERRORMESSAGE name="income" />
            <br />
            <label>About:</label>
            <Field name="about" as="textarea" />
            <KERRORMESSAGE name="about" />
            <br />
            <label>Social:</label> <br />
            <label>Facebook:</label>
            <Field name="social [0]" type="text" />
            <br />
            <label>Youtube:</label>
            <Field name="social [1]" type="text" />
            <KERRORMESSAGE name="social" />
            <br />
            <FieldArray
              name="hobbies"
              render={(arrayHelpers) => (
                <div>
                  {values.hobbies && values.hobbies.length > 0 ? (
                    values.hobbies.map((hobby, index) => (
                      <div key={index}>
                        <Field name={`hobbies.${index}`} />
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)} // remove a hobbies from the list
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                        >
                          +
                        </button>
                      </div>
                    ))
                  ) : (
                    <button type="button" onClick={() => arrayHelpers.push("")}>
                      Add Hobbies
                    </button>
                  )}
                </div>
              )}
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SIGNUP;
