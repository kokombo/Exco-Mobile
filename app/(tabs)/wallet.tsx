import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";

const WalletTabScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>WalletTabScreen</ThemedText>
    </ThemedView>
  );
};

export default WalletTabScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
