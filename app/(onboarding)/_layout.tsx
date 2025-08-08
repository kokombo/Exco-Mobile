import { Stack } from "expo-router";
import React from "react";

const OnboardingLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="1" options={{ headerShown: false }} />
      <Stack.Screen name="2" options={{ headerShown: false }} />
      <Stack.Screen name="3" options={{ headerShown: false }} />
    </Stack>
  );
};

export default OnboardingLayout;
