import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  FlatList,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import Card from "@/components/Card";
import { COLORS } from "@/lib/theme";
import { RootStackParamList } from "@/navigation/RootNavigator";
import { BottomTabsParamList } from "@/navigation/TabNavigator";

type Props = CompositeScreenProps<
  BottomTabScreenProps<BottomTabsParamList, "Discover">,
  NativeStackScreenProps<RootStackParamList>
>;

const data = [1, 2];

export default function Discover({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.background} style="light" />
      <ScrollView style={{ paddingTop: 91 }}>
        <View style={{ paddingHorizontal: 28 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_700Bold",
                fontSize: 29,
                color: COLORS.secondary,
              }}
            >
              Explore
            </Text>

            <Feather name="search" size={32} color={COLORS["secondary-2"]} />
          </View>

          <Text
            style={{
              marginTop: 20,
              color: COLORS["secondary-1"],
              fontFamily: "Poppins_400Regular",
            }}
          >
            Explore different contents form creators
          </Text>
        </View>

        <View style={{ marginTop: 40 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 28,
            }}
          >
            <Text
              style={{
                color: COLORS.secondary,
                fontFamily: "Poppins_600SemiBold",
                fontSize: 15,
              }}
            >
              With Sport - Football
            </Text>

            <Pressable>
              <Text
                style={{
                  color: COLORS.primary,
                  fontFamily: "Poppins_400Regular",
                }}
              >
                View all
              </Text>
            </Pressable>
          </View>

          <View style={{ marginTop: 25 }}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.toString()}
              contentContainerStyle={{ gap: 20, paddingHorizontal: 28 }}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={() => <Card />}
            />
          </View>
        </View>

        <View style={{ marginTop: 40 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 28,
            }}
          >
            <Text
              style={{
                color: COLORS.secondary,
                fontFamily: "Poppins_600SemiBold",
                fontSize: 15,
              }}
            >
              With Sport - Basketball
            </Text>

            <Pressable>
              <Text
                style={{
                  color: COLORS.primary,
                  fontFamily: "Poppins_400Regular",
                }}
              >
                View all
              </Text>
            </Pressable>
          </View>

          <View style={{ marginTop: 25, marginBottom: 120 }}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.toString()}
              contentContainerStyle={{ gap: 20, paddingHorizontal: 28 }}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={() => <Card />}
            />
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
