import { Image, Text, View } from "react-native";
import MenuOptions from "../components/menu/menu-options";

export default function Index() {
  return (
    <View className="flex-1 w-full items-center justify-center p-8">
      <Text className="text-5xl font-bold text-white my-16">PKHeX</Text>
      <Image
        className="w-[300px] h-[300px]"
        source={require("@/assets/images/master-ball.png")}
      />
      <MenuOptions />
    </View>
  );
}
