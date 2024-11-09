import AdContainer from "@/components/ad-container";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useRef } from "react";
import { Platform, StyleSheet } from "react-native";
import {
  BannerAd,
  TestIds,
  useForeground,
} from "react-native-google-mobile-ads";

export default function BannerAdsScreen() {
  const bannerRef = useRef<BannerAd>(null);

  useForeground(() => {
    Platform.OS === "ios" && bannerRef.current?.load();
  });

  return (
    <ThemedView style={{ flex: 1 }}>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Banner Ads</ThemedText>
        <ThemedText>
          A Banner only takes up a limited area of the application and displays
          an advert within the area.
        </ThemedText>

        <ThemedView style={styles.sectionContainer}>
          <AdContainer
            bannerRef={bannerRef}
            unitId={TestIds.BANNER}
            size={"300x600"}
          />
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
