import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { StyleSheet } from "react-native";

const EventsTabScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>EventsTabScreen</ThemedText>
    </ThemedView>
  );
};

export default EventsTabScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
