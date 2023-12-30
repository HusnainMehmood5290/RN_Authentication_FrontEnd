import * as yup from "yup";

const UpdatePassSchema = yup.object().shape({
  pass: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPass: yup
    .string()
    .oneOf([yup.ref("pass"), null], "Passwords must match") // Ensure it matches the 'pass' field
    .required("Confirm password is required"), // Ensure it's not empty
});

module.exports = UpdatePassSchema;
