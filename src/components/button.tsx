import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "@/lib/theme";

type Props = {
  title: string;
  onPress?: () => void;
};

const Button = ({ title, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={{ fontFamily: "Poppins_500Medium", color: "#fff" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 20,
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: COLORS["primary-2"],
  },
});
