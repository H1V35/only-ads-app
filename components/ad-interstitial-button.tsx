import Button from "@/components/button";
import { setStatusBarHidden } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  AdEventType,
  InterstitialAd,
  TestIds,
} from "react-native-google-mobile-ads";

export default function AdInterstitialButton() {
  const [interstitial, setInterstitial] = useState<InterstitialAd | null>(null);
  const [loading, setLoading] = useState(true);

  const createAd = () => {
    setLoading(true);

    const newInterstitial = InterstitialAd.createForAdRequest(
      TestIds.INTERSTITIAL
    );

    const onAdLoaded = () => {
      setLoading(false);
    };

    const onAdError = (error: Error) => {
      console.error("Error loading interstitial ad:", error);
      setLoading(false);
      newInterstitial.removeAllListeners();
    };

    const onAdOpened = () => {
      setStatusBarHidden(true);
    };

    const onAdClosed = () => {
      setStatusBarHidden(false);
      newInterstitial.removeAllListeners();
      setInterstitial(null);
      createAd();
    };

    newInterstitial.addAdEventListener(AdEventType.LOADED, onAdLoaded);
    newInterstitial.addAdEventListener(AdEventType.ERROR, onAdError);
    newInterstitial.addAdEventListener(AdEventType.OPENED, onAdOpened);
    newInterstitial.addAdEventListener(AdEventType.CLOSED, onAdClosed);

    newInterstitial.load();
    setInterstitial(newInterstitial);
  };

  useEffect(() => {
    createAd();

    return () => {
      if (interstitial) {
        interstitial.removeAllListeners();
      }
    };
  }, []);

  const handleShowAd = () => {
    if (interstitial) {
      interstitial.show();
      setTimeout(() => {
        setLoading(true);
      }, 100);
    }
  };

  return (
    <Button disabled={loading} onPress={handleShowAd}>
      {loading ? "Loading..." : "Show Interstitial"}
    </Button>
  );
}
