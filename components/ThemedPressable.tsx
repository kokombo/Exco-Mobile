import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import { IconSymbol, IconSymbolName } from "./ui/IconSymbol";

type PressableStyleType = StyleProp<ViewStyle>;
type TextStyleType = StyleProp<TextStyle>;

export type ThemedPressableProps = {
  onPress: () => void;
  style?: PressableStyleType;
  variant?: "default" | "outlined" | "dark";
  type?: "button" | "link";
  icon?: IconSymbolName;
  children: React.ReactNode;
};

const ThemedPressable = ({
  onPress,
  style,
  variant = "default",
  icon,
  children,
}: ThemedPressableProps) => {
  const colorScheme = useColorScheme();

  const defaultButtonStyle: PressableStyleType = {
    backgroundColor:
      variant === "default"
        ? Colors[colorScheme ?? "light"].tint
        : variant === "dark"
        ? "#000000"
        : "",
  };

  const defaultButtonLabelStyle: TextStyleType = {
    color:
      variant === "default"
        ? Colors[colorScheme ?? "light"].secondaryText
        : variant === "outlined"
        ? Colors[colorScheme ?? "light"].reverseText
        : "#fff",
  };

  return (
    <Pressable
      onPress={onPress}
      style={[style, styles.button, defaultButtonStyle]}
    >
      {icon && (
        <IconSymbol
          size={24}
          name={icon}
          color={
            variant === "default"
              ? Colors[colorScheme ?? "light"].secondaryText
              : variant === "outlined"
              ? Colors[colorScheme ?? "light"].reverseText
              : "#fff"
          }
          style={{ marginRight: 24 }}
        />
      )}
      <Text style={[styles.text, defaultButtonLabelStyle]}>{children}</Text>
    </Pressable>
  );
};

export default ThemedPressable;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16.5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    borderRadius: 8,
  },

  text: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 15,
  },
});
