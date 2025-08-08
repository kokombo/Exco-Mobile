import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";

const OnboardingScreen2 = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>OnboardingScreen2</ThemedText>
    </ThemedView>
  );
};

export default OnboardingScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
