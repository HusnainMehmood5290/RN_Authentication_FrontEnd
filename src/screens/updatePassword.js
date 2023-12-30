import { View, Text, ActivityIndicator } from "react-native";
import UserInput from "../components/userInput";
import styles from "../constraints/styleSheet";
import yupUpdatePass from "../constraints/yupUpdatePass";
import { useState } from "react";
import { Formik } from "formik";
import ErrorText from "../components/errorText";
import SpinnerButton from "../components/spinner";
import { useNavigation } from "@react-navigation/native";

const UpdatePass = (props) => {
  const [isLoading, setIsLoadinng] = useState(false);
  const navigation = useNavigation();
  const changePass = async (values) => {
    navigation.navigate("login");
  };
  return (
    <Formik
      validationSchema={yupUpdatePass}
      initialValues={{ pass: "", confirmPass: "" }}
      onSubmit={changePass}
    >
      {({ handleChange, values, errors, handleSubmit }) => (
        <View style={styles.container}>
          <UserInput
            placeholder="Enter New Password"
            value={values.pass}
            onChangeText={handleChange("pass")}
          />
          {errors.pass && <ErrorText msg={errors.pass} />}
          <UserInput
            placeholder="Confirm Password"
            value={values.confirmPass}
            onChangeText={handleChange("confirmPass")}
          />
          {errors.confirmPass && <ErrorText msg={errors.confirmPass} />}
          <SpinnerButton
            isLoading={isLoading}
            title="submit"
            onPress={handleSubmit}
          />
        </View>
      )}
    </Formik>
  );
};

export default UpdatePass;
