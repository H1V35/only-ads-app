import { Image, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Collapsible } from "@/components/collapsible";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useRouter } from "expo-router";
import Button from "@/components/button";

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
          <Button onPress={() => router.navigate("/banner-ads")}>
            See more
          </Button>
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
});
