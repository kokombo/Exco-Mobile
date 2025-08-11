import ThemedPressable from "@/components/ThemedPressable";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { StyleSheet, View } from "react-native";

const ConnectWallet = () => {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.buttonWrapper}>
        <ThemedPressable onPress={() => {}}>Continue</ThemedPressable>

        <ThemedPressable variant="outlined" onPress={() => {}}>
          I don&apos;t have a wallet
        </ThemedPressable>
      </View>
    </ThemedView>
  );
};

export default ConnectWallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 104,
    paddingHorizontal: 16,
  },

  buttonWrapper: {
    gap: 16,
  },
});
