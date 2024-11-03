import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";

export default function BannerAdsScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Banner Ads</ThemedText>
        <ThemedText>
          A Banner only takes up a limited area of the application and displays
          an advert within the area.
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    gap: 8,
    overflow: "hidden",
  },
});
