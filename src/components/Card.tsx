import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "@/lib/theme";

type Props = {};

const Card = ({}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/card.png")} style={{ width: "100%" }} />

      <View style={styles.bottom}>
        <Text style={{ color: COLORS.primary, textTransform: "uppercase" }}>
          Exercise
        </Text>

        <Text
          style={{
            color: COLORS["secondary-1"],
            fontFamily: "Poppins_500Medium",
          }}
        >
          Foot Cordination and catching the ball
        </Text>

        <View
          style={{
            marginTop: 8,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              source={require("@/assets/avatar.png")}
              style={{ width: 17, height: 17, borderRadius: 17 / 2 }}
            />

            <Text
              style={{
                color: COLORS["secondary-1"],
                fontFamily: "Poppins_500Medium",
                fontSize: 9,
              }}
            >
              Karim Benzema
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Ionicons
              name="football-outline"
              size={20}
              color={COLORS.secondary}
            />
            <Ionicons
              name="american-football-outline"
              size={20}
              color={COLORS.secondary}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    // width: 263,
    borderRadius: 8,
  },
  bottom: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomStartRadius: 8,
    borderBottomEndRadius: 8,
    backgroundColor: "#29292F",
  },
});
