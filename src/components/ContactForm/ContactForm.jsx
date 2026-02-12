import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { addContact } from "../../redux/contactsOps";

import css from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
});

function ContactForm() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.contacts);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      addContact({
        name: values.name.trim(),
        number: values.number.trim(),
      }),
    );

    resetForm();
  };

  return (
    <div className={css.formContainer}>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.fieldGroup}>
            <label htmlFor="name" className={css.label}>
              Name
            </label>
            <div className={css.inputWrapper}>
              <FaUser className={css.inputIcon} />
              <Field type="text" id="name" name="name" className={css.input} />
            </div>
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>

          <div className={css.fieldGroup}>
            <label htmlFor="number" className={css.label}>
              Number
            </label>
            <div className={css.inputWrapper}>
              <FaPhoneAlt className={css.inputIcon} />
              <Field
                type="tel"
                id="number"
                name="number"
                className={css.input}
              />
            </div>
            <ErrorMessage name="number" component="div" className={css.error} />
          </div>

          <button type="submit" className={css.submitButton} disabled={loading}>
            {loading ? "Adding..." : "Add Contact"}
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;
