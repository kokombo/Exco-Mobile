import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";

const OnboardingScreen1 = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>OnboardingScreen1</ThemedText>
    </ThemedView>
  );
};

export default OnboardingScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
