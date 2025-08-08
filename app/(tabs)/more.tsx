import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";

const MoreTabScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>MoreTabScreen</ThemedText>
    </ThemedView>
  );
};

export default MoreTabScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
