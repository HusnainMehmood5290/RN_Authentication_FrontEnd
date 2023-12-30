import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import splashScreen from "../screens/splash";
import signup from "../screens/signup";
import login from "../screens/login";
import forgetPassword from "../screens/forgetPassword";
import updatePassword from "../screens/updatePassword";
import Dashboard from "../screens/dashboard";
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="splash"
        component={splashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="signup" component={signup} />
      <Stack.Screen name="login" component={login} />
      <Stack.Screen name="forgetPassword" component={forgetPassword} />
      <Stack.Screen name="updatePassword" component={updatePassword} />
      <Stack.Screen name="dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
