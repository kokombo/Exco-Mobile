import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";

const GamesTabScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>GamesTabScreen</ThemedText>
    </ThemedView>
  );
};

export default GamesTabScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
