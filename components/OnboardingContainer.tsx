import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image, StyleSheet, View } from "react-native";
import ThemedPressable from "./ThemedPressable";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { IconSymbol } from "./ui/IconSymbol";

type OnboardingContainerProps = {
  image: string;
  number: number;
  title: string;
  description: string;
  buttonLabel?: string;
  onPress: () => void;
};

const OnboardingContainer = ({
  image,
  number,
  title,
  description,
  buttonLabel = "Next",
  onPress,
}: OnboardingContainerProps) => {
  const colorScheme = useColorScheme();

  return (
    <ThemedView style={styles.container}>
      <Image src={image} style={styles.image} />

      <View style={styles.step}>
        {[...Array(3)].map((_, index) => (
          <IconSymbol
            key={index}
            size={12}
            name="circle.fill"
            color={
              number === index + 1
                ? Colors[colorScheme ?? "light"].tint
                : Colors[colorScheme ?? "light"].icon
            }
          />
        ))}
      </View>

      <View style={styles.textContainer}>
        <ThemedText type="title">{title}</ThemedText>
        <ThemedText type="subtitle">{description}</ThemedText>
      </View>

      <ThemedPressable onPress={onPress}>{buttonLabel}</ThemedPressable>
    </ThemedView>
  );
};

export default OnboardingContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: 24,
    paddingHorizontal: 16,
  },

  image: {
    height: 335,
    width: 343,
    maxWidth: "100%",
  },

  step: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    gap: 8,
  },

  textContainer: {},

  title: {},

  description: {},
});
