import { Stack } from "expo-router";
import React from "react";

const OnboardingLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="2" options={{ headerShown: false }} />
      <Stack.Screen name="3" options={{ headerShown: false }} />
    </Stack>
  );
};

export default OnboardingLayout;
