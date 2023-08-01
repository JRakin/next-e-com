import CustomButton from "@/components/Buttons/CustomButton";
import TextInput from "@/components/FormInputs/TextInput";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const initialValue = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().min(6).required("Password is required"),
});

const SignInForm = () => {
  return (
    <Box sx={{ width: "400px" }} boxShadow={1} px={3} py={4}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "red",
            border: "1px solid red",
            borderRadius: "50%",
          }}
        >
          <FontAwesomeIcon icon={faLock} />
        </Box>
        <Typography
          sx={{
            textAlign: "center",
          }}
          variant="h5"
        >
          Sign in
        </Typography>
      </Box>
      <Formik
        initialValues={initialValue}
        onSubmit={() => console.log()}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <TextInput name="email" label="Email" fullWidth />
            <TextInput name="password" label="Password" fullWidth />
            <CustomButton clickType="submit" buttonText="Sign in" />
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default SignInForm;
