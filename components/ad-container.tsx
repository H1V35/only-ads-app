import { StyleSheet, Text, View } from "react-native";
import { BannerAd, RequestOptions } from "react-native-google-mobile-ads";

interface AdContainerProps {
  bannerRef?: React.RefObject<BannerAd>;
  requestOptions?: RequestOptions;
  size: string;
  unitId: string;
}

export default function AdContainer({
  bannerRef,
  requestOptions,
  size,
  unitId,
}: AdContainerProps) {
  return (
    <View style={styles.container}>
      <BannerAd
        ref={bannerRef}
        requestOptions={requestOptions}
        size={size}
        unitId={unitId}
      />
      <Text style={styles.placeholder}>ADVERTISING</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    position: "relative",
  },
  placeholder: {
    color: "#767676",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 1.5,
    position: "absolute",
    zIndex: -10,
  },
});
