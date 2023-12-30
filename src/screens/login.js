import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Heading from "../components/heading";
import UserInput from "../components/userInput";
import SpinnerButton from "../components/spinner";
import Button from "../components/button";
import ErrorText from "../components/errorText";
import styles from "../constraints/styleSheet";
import yupLoginSchema from "../constraints/yupLoginSchema";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
export default LoginScreen = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoadinng] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const timeOutLoaer = () => {
    setTimeout(() => {
      setIsLoadinng(false);
      alert("try Again");
    }, 5000);
  };
  const Login = async (values) => {
    setIsLoadinng(true);
    // timeOutLoaer();  optional for delays
    navigation.navigate("dashboard");
  };
  return (
    <Formik
      initialValues={{ email: "", pass: "" }}
      validationSchema={yupLoginSchema}
      onSubmit={Login}
    >
      {({ handleChange, handleSubmit, errors, values }) => (
        <View style={styles.container}>
          <Heading value="Login" />
          <UserInput
            placeholder="Enter Email"
            onChangeText={handleChange("email")}
            value={values.email}
          />

          {errors.email && <ErrorText msg={errors.email} />}
          <UserInput
            placeholder="Enter Password"
            onChangeText={handleChange("pass")}
            value={values.pass}
          />
          {errors.pass && <ErrorText msg={errors.pass} />}
          {emailError && (
            <ErrorText msg="Email or Password is incorrect try again or signup" />
          )}
          <SpinnerButton
            title="Login"
            onPress={handleSubmit}
            isLoading={isLoading}
          />
          <Button
            title="Sign Up"
            onPress={() => {
              navigation.navigate("signup");
            }}
            color="#28a745"
          />
          <TouchableOpacity
            style={{ width: "100%", alignItems: "flex-end", marginTop: 7 }}
            onPress={() => {
              navigation.navigate("forgetPassword");
            }}
          >
            <Text
              style={{
                textDecorationLine: "underline",
                color: "blue",
                paddingBottom: 8,
              }}
            >
              Forget Password?
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};
