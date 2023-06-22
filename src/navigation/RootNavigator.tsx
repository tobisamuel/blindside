import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigator, { BottomTabsParamList } from "./TabNavigator";
import Login from "@/screens/login";
import Registration from "@/screens/registration";

export type RootStackParamList = {
  Login: undefined;
  Registration: undefined;
  Home: NavigatorScreenParams<BottomTabsParamList>;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Home" component={TabNavigator} />
    </Stack.Navigator>
  );
}
