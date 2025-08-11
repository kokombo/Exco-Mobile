import ThemedPressable from "@/components/ThemedPressable";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const ConnectWallet = () => {
  return (
    <ThemedView style={styles.container}>
      <View>
        <ThemedText type="title">Connect your Primary Wallet</ThemedText>

        <View>
          {["phantom", "sollet", "slope", "solflare"].map((item, index) => (
            <View key={item}>
              <TextInput style={styles.input} />
              <ThemedText>{item}</ThemedText>
            </View>
          ))}
        </View>
      </View>

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
    justifyContent: "space-between",
    paddingTop: 84,
    paddingBottom: 104,
    paddingHorizontal: 16,
  },

  buttonWrapper: {
    gap: 16,
  },

  input: {},
});
