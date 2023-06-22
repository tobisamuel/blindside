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

type Props = NativeStackScreenProps<RootStackParamList, "Registration">;

export default function Registration({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.background} style="light" />
      <ScrollView>
        <Text style={styles.heading}>Create an account</Text>
        <Text style={styles.text}>Let’s get you started on Blindeside! 👀</Text>

        <View style={{ marginTop: 57, rowGap: 34 }}>
          <Input placeholder="Email" />
          <Input placeholder="Password" secureTextEntry={true} />
        </View>

        <View style={{ marginTop: 57, rowGap: 34 }}>
          <Button title="SIGN UP" />

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
              Already have an account?
            </Text>

            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  color: COLORS["secondary-2"],
                  fontFamily: "Poppins_400Regular",
                }}
              >
                Sign In
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
