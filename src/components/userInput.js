import { StyleSheet, TextInput } from "react-native";

export default userInput = (props) => {
  return (
    <TextInput
      style={style}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
    />
  );
};

const style = StyleSheet.create({
  height: 50,
  width: "100%",
  borderColor: "#ccc",
  borderWidth: 1,
  marginVertical: 5,
  padding: 15,
  borderRadius: 10,
});
