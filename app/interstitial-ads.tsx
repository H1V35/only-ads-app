import AdInterstitialButton from "@/components/ad-interstitial-button";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { StyleSheet } from "react-native";

export default function InterstitialAdsScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Interstitial Ads</ThemedText>
        <ThemedText>
          These type of ads are programmatically loaded and then shown at a
          suitable point during your application flow (e.g. after a level on a
          gaming app has been completed, or game over).
        </ThemedText>
        <ThemedText>
          The ads can be preloaded in the background to ensure they're ready to
          go when needed.
        </ThemedText>

        <ThemedView style={styles.sectionContainer}>
          <AdInterstitialButton />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    margin: 32,
    overflow: "hidden",
  },
  sectionContainer: {
    marginTop: 16,
  },
});
