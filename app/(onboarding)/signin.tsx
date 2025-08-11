import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { StyleSheet, Text } from "react-native";

const Signin = () => {
  return (
    <ThemedView style={styles.container}>
      <Text>Signin</Text>
    </ThemedView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
