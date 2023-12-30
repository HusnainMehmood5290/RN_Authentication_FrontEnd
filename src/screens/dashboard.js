import { Button, Text, View } from "react-native";
import styles from "../constraints/styleSheet";
import Heading from "../components/heading";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Heading value="Welcome To Dashboard" />
    </View>
  );
};
export default Dashboard;
