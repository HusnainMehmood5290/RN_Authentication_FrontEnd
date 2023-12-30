import { Text, StyleSheet } from "react-native";

const Heading = (props) => {
  return <Text style={style.heading}>{props.value}</Text>;
};
const style = StyleSheet.create({
  heading: {
    fontSize: 28,
    marginBottom: 20,
    color: "#333",
    fontWeight: "bold",
  },
});
export default Heading;
