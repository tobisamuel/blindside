import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "@/lib/theme";

export default function More() {
  return (
    <View style={styles.container}>
      <Text>More</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 43,
  },
});
