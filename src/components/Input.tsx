import { View, StyleSheet, TextInput } from "react-native";
import React from "react";
import { COLORS } from "@/lib/theme";

type Props = {
  placeholder: string;
  secureTextEntry?: boolean;
};

const Input = ({ placeholder, secureTextEntry }: Props) => {
  return (
    <View style={[styles.inputContainer]}>
      <TextInput
        style={{
          flex: 1,
          fontFamily: "Poppins_400Regular",
          color: COLORS["secondary-2"],
        }}
        cursorColor={COLORS["secondary-2"]}
        placeholder={placeholder}
        placeholderTextColor={COLORS["secondary-2"]}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 20,
    paddingLeft: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS["secondary-3"],
    flexDirection: "row",
    alignItems: "center",
  },
});
