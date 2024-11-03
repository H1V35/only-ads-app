import { Image, StyleSheet, Pressable, Text } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Collapsible } from "@/components/Collapsible";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{ color: Colors[colorScheme ?? "light"].tint }}
        >
          OnlyAds
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.descriptionContainer}>
        <ThemedText>
          This app includes example code to help you get started with your
          advertising needs.
        </ThemedText>

        <Collapsible title="Banner Ads">
          <ThemedText>
            Banner ads are partial adverts which can be integrated within your
            existing application.
          </ThemedText>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              {
                backgroundColor: Colors[colorScheme ?? "light"].tint,
                marginTop: 16,
              },
              pressed && styles.pressed,
            ]}
            onPress={() => router.navigate("/banner-ads")}
          >
            <Text
              style={[
                styles.buttonText,
                { color: colorScheme === "light" ? "#fff" : "#000" },
              ]}
            >
              See more
            </Text>
          </Pressable>
        </Collapsible>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  descriptionContainer: {
    gap: 16,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
  },
  pressed: {
    opacity: 0.6,
  },
});
