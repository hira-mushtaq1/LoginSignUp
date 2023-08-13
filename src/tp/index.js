import * as Yup from "yup";

export const signupSchema = Yup.object({
  name: Yup.string().min(2).required("Please enter your name "),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please fill the password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

//login

export const LogInSchema=Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
})

//forget password using email

export const forgetSchema=Yup.object({
    email: Yup.string().email().required("Please enter your email"),


})

//Forget using phone number

export const forgetSchemaViaPhone=Yup.object({
  phone: Yup.string().required("Please enter your Phone Number"),
})

//otp code 
export const VerificationcodeSchema=Yup.object({
  code: Yup.string().required("Please enter code to verify"),
})

//change password
export const changePasswordSchema = Yup.object({
  newPassword: Yup.string().min(6).required("Please enter New password"),
  confirm_password: Yup.string()
    .required("Confirm Password")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});