import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";

const OnboardingScreen3 = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>OnboardingScreen3</ThemedText>
    </ThemedView>
  );
};

export default OnboardingScreen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
