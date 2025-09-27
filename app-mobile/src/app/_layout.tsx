import { Slot } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import "../../global.css";
import { Image, Text, View } from "react-native";

export default function RootLayout() {
  return (
    <LinearGradient
      colors={["#8B6ECE", "#5A3E9E", "#5A3E9E"]}
      locations={[0, 0.35, 0.5]}
      className="flex-1"
    >
      <View className="flex-1 items-center justify-start pt-20">
        <Slot />
      </View>
    </LinearGradient>
  );
}
