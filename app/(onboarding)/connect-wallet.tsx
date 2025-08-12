import ThemedPressable from "@/components/ThemedPressable";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const ConnectWallet = () => {
  const router = useRouter();
  return (
    <ThemedView style={styles.container}>
      <View style={styles.form}>
        <ThemedText type="title">Connect your Primary Wallet</ThemedText>

        <View style={styles.inputsWrapper}>
          {["Phantom", "Sollet", "Slope", "Solflare"].map((item, index) => (
            <View key={index} style={styles.field}>
              <TouchableOpacity style={styles.input} />
              <ThemedText>{item}</ThemedText>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.buttonWrapper}>
        <ThemedPressable onPress={() => router.push("/(tabs)/explore")}>
          Continue
        </ThemedPressable>

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

  form: {
    gap: 64,
  },

  inputsWrapper: {
    gap: 24,
  },

  input: {
    height: 24,
    width: 24,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 2,
  },

  field: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
});
