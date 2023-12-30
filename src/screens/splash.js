import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("login");
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Live Chat APP</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff", // Set your desired background color
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000", // Set your desired text color
  },
});

export default Splash;
