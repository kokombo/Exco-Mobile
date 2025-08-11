import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  Image,
  StyleSheet,
  View,
  type ImageSourcePropType,
} from "react-native";
import ThemedPressable from "./ThemedPressable";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { IconSymbol } from "./ui/IconSymbol";

type OnboardingContainerProps = {
  image: ImageSourcePropType;
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
      <Image source={image} style={styles.image} />

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
        <ThemedText>{description}</ThemedText>
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
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 72,
    paddingBottom: 50,
    paddingHorizontal: 16,
  },

  image: {
    height: "50%",
    width: "100%",
    borderRadius: 16,
  },

  step: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    gap: 8,
  },

  textContainer: {
    gap: 16,
  },

  title: {},

  description: {},
});
