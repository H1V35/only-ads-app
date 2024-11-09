import {
  StyleSheet,
  Pressable,
  Text,
  StyleProp,
  TextStyle,
  PressableProps,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/use-color-scheme";

interface ButtonProps extends PressableProps {
  disabled?: boolean;
  textStyle?: StyleProp<TextStyle>;
}

export default function Button({
  style,
  children,
  disabled,
  textStyle,
  ...props
}: ButtonProps) {
  const colorScheme = useColorScheme();
  const baseButtonStyle = [
    styles.button,
    { backgroundColor: Colors[colorScheme ?? "light"].tint },
    disabled && styles.disabled,
  ];
  const baseTextStyle = [
    styles.text,
    { color: colorScheme === "light" ? "#fff" : "#000" },
  ];

  return (
    <Pressable
      style={({ pressed }) => [
        ...baseButtonStyle,
        pressed && !disabled && styles.pressed,
        typeof style === "function" ? style({ pressed }) : style,
      ]}
      disabled={disabled}
      {...props}
    >
      {({ pressed }) => {
        const content =
          typeof children === "function" ? children({ pressed }) : children;

        if (typeof content === "string") {
          return <Text style={[...baseTextStyle, textStyle]}>{content}</Text>;
        }

        return content;
      }}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
  },
  disabled: {
    opacity: 0.5,
  },
  pressed: {
    opacity: 0.6,
  },
});
