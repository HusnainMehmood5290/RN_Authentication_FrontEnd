import React, { useState } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import Heading from "../components/heading";
import Button from "../components/button";
import UserInput from "../components/userInput";
import styles from "../constraints/styleSheet";
import yupSignupSchema from "../constraints/yupSignupSchema";
import { Formik } from "formik";
import ErrorText from "../components/errorText";
import Spinner from "../components/spinner";
import { useNavigation } from "@react-navigation/native";
export default SignupScreen = (props) => {
  const [isLoading, setIsLoadinng] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const navigation = useNavigation();
  const SignUp = async (values) => {
    setIsLoadinng(true);
    setIsLoadinng(false);
    navigation.navigate("splash");
  };

  return (
    <Formik
      validationSchema={yupSignupSchema}
      initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
      onSubmit={SignUp}
    >
      {({ handleSubmit, errors, values, handleChange }) => (
        <View style={styles.container}>
          <Heading value="Create an Account" />
          {emailError && (
            <Text style={{ color: "red" }}>
              Email is Already exist Try Another or Login
            </Text>
          )}
          <UserInput
            placeholder="Enter First name"
            value={values.fname}
            onChangeText={handleChange("fname")}
          />
          {errors.fname && <ErrorText msg={errors.fname} />}
          <UserInput
            placeholder="Enter Last name"
            value={values.lname}
            onChangeText={handleChange("lname")}
          />
          {errors.lname && <ErrorText msg={errors.lname} />}
          <UserInput
            placeholder="Enter Email"
            value={values.email}
            onChangeText={handleChange("email")}
          />
          {errors.email && <ErrorText msg={errors.email} />}
          <UserInput
            placeholder="Enter Password"
            value={values.pass}
            onChangeText={handleChange("pass")}
          />
          {errors.pass && <ErrorText msg={errors.pass} />}
          <Spinner
            title="Sign Up"
            onPress={handleSubmit}
            isLoading={isLoading}
          />

          <Text style={{ padding: 8 }}>Already Have an account?</Text>
          <Button
            title="Login"
            onPress={() => {
              navigation.navigate("login");
            }}
            color="#28a745"
          />
        </View>
      )}
    </Formik>
  );
};
