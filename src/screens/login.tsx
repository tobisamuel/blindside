import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import Input from "@/components/Input";
import Button from "@/components/button";
import { COLORS } from "@/lib/theme";
import { RootStackParamList } from "@/navigation/RootNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function Login({ navigation }: Props) {
  const goToHome = () => {
    navigation.navigate("Home", { screen: "Discover" });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.background} style="light" />
      <ScrollView>
        <Text style={styles.heading}>Welcome back!</Text>
        <Text style={styles.text}>You stopped training for a minute 👀</Text>

        <View style={{ marginTop: 57, rowGap: 34 }}>
          <Input placeholder="Email" />
          <Input placeholder="Password" secureTextEntry={true} />
          <Text
            style={{
              color: COLORS["secondary-2"],
              fontFamily: "Poppins_400Regular",
              alignSelf: "flex-end",
            }}
          >
            Forgot Password ?
          </Text>
        </View>

        <View style={{ marginTop: 57, rowGap: 34 }}>
          <Button title="LOG IN" onPress={goToHome} />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Text
              style={{
                color: COLORS["secondary-2"],
                fontFamily: "Poppins_400Regular",
                alignSelf: "center",
              }}
            >
              Don’t have an account?
            </Text>

            <Pressable onPress={() => navigation.navigate("Registration")}>
              <Text
                style={{
                  color: COLORS["secondary-2"],
                  fontFamily: "Poppins_400Regular",
                }}
              >
                Sign Up
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 43,
  },
  heading: {
    marginTop: 140,
    fontSize: 22,
    fontFamily: "Poppins_500Medium",
    color: COLORS.secondary,
  },
  text: {
    marginTop: 18,
    fontFamily: "Poppins_300Light",
    opacity: 0.79,
    color: COLORS["secondary-1"],
  },
});
