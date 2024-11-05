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
        if (typeof children === "function") {
          const child = children({ pressed });
          if (typeof child === "string") {
            return <Text style={[...baseTextStyle, textStyle]}>{child}</Text>;
          }
          return child;
        }

        if (typeof children === "string") {
          return <Text style={[...baseTextStyle, textStyle]}>{children}</Text>;
        }

        return children;
      }}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
  },
  disabled: {
    opacity: 0.5,
  },
  pressed: {
    opacity: 0.6,
  },
});
