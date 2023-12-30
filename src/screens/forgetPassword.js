import { View, ActivityIndicator, Text } from "react-native";
import UserInput from "../components/userInput";
import styles from "../constraints/styleSheet";
import { useState } from "react";
import SpinnerButton from "../components/spinner";
import { useNavigation } from "@react-navigation/native";

const ForgetPass = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoadinng] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [email, setEmail] = useState();
  const checkEmail = async () => {
    navigation.navigate("updatePassword");
  };
  return (
    <View style={styles.container}>
      <UserInput
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Enter Your Email"
      />
      {emailError && (
        <Text style={{ color: "red", marginBottom: 5 }}>
          Email doesn't exist
        </Text>
      )}
      <SpinnerButton
        title="submit"
        onPress={checkEmail}
        isLoading={isLoading}
      />
    </View>
  );
};

export default ForgetPass;
