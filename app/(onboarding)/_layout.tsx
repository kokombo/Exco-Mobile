import { Stack } from "expo-router";

const OnboardingLayout = () => {
  return (
    <Stack screenOptions={{ gestureEnabled: true }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="2" options={{ headerShown: false }} />
      <Stack.Screen name="3" options={{ headerShown: false }} />
      <Stack.Screen name="signin" options={{ headerShown: false }} />
      <Stack.Screen name="connect-wallet" options={{ headerShown: false }} />
    </Stack>
  );
};

export default OnboardingLayout;
