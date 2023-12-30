import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default button = (props) => {
  return (
    <TouchableOpacity
      style={buttonColor(props.color).button}
      onPress={props.onPress}
    >
      <Text style={buttonColor().text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const buttonColor = (color) => {
  return (style = StyleSheet.create({
    text: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#fff",
    },
    button: {
      backgroundColor: color || "#007BFF",
      padding: 15,
      borderRadius: 10,
      width: "100%",
      alignItems: "center",
      marginTop: 5,
    },
  }));
};
