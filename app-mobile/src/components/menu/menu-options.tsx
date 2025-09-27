import { Text, View } from "react-native";
import Button from "../buttons/button";
import { Paperclip, Save, SendHorizontal } from "lucide-react-native";
import { useState } from "react";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";

const MenuOptions = () => {
  const [tab, setTab] = useState<"file" | "tools">("file");
  const [fileInfo, setFileInfo] = useState<string | null>(null);

  async function handleOpenFile() {
    const res = await DocumentPicker.getDocumentAsync({
      type: "*/*",
      copyToCacheDirectory: true,
    });

    if (res.canceled) {
      setFileInfo("Nenhum arquivo selecionado");
      return;
    }

    if (res.type === "success") {
      const fileContent = await FileSystem.readAsStringAsync(res.uri, {
        encoding: FileSystem.EncodingType.Base64, // ou UTF8 dependendo do tipo
      });

      console.log("Arquivo carregado:", res.name, res.size);
      console.log("Conteúdo base64:", fileContent.slice(0, 100)); // debug
    }
  }

  return (
    <View className="w-full my-16 bg-[#FFF0F6] py-10 rounded-[30px] mx-16">
      <View className="flex-row items-center border-b border-gray-300 px-10">
        <Button
          onPress={() => setTab("file")}
          className={`flex-1 rounded-t-[15px] ${
            tab === "file" ? "border-b-4 border-purple-600" : "bg-purple-100"
          }`}
        >
          <Text
            className={`text-4xl font-semibold ${
              tab === "file" ? "text-purple-600" : "text-neutral-500"
            }`}
          >
            File
          </Text>
        </Button>
        <Button
          onPress={() => setTab("tools")}
          className={`flex-1 rounded-t-[15px]  ${
            tab === "tools" ? "border-b-4 border-purple-600" : "bg-purple-100"
          }`}
        >
          <Text
            className={`text-4xl font-semibold ${
              tab === "tools" ? "text-purple-600" : " text-neutral-500"
            }`}
          >
            Tools
          </Text>
        </Button>
      </View>
      <View className="mt-5 px-8">
        {tab === "file" ? (
          <>
            <Button
              onPress={handleOpenFile}
              className="w-full flex-row py-5 gap-3 mb-5 shadow rounded-[50px]"
            >
              <Paperclip color="#6B4EAE" size={32} strokeWidth={2} />
              <Text className="text-primary-purple font-bold text-3xl">
                Open...
              </Text>
            </Button>
            <Button
              onPress={() => {}}
              className="w-full flex-row py-5 gap-3 mb-5 shadow rounded-[50px]"
            >
              <Save color="#6B4EAE" size={32} strokeWidth={2} />
              <Text className="text-primary-purple font-bold text-3xl">
                Save PKM
              </Text>
            </Button>
            <Button
              onPress={() => {}}
              className="w-full flex-row py-5 gap-3 mb-5 shadow rounded-[50px]"
            >
              <SendHorizontal color="#6B4EAE" size={32} strokeWidth={2} />
              <Text className="text-primary-purple font-bold text-3xl">
                Export SAV...
              </Text>
            </Button>
            <Button
              onPress={() => {}}
              className="w-full flex-row py-5 gap-3 mb-5 shadow rounded-[50px]"
            >
              <Text className="text-primary-purple font-bold text-3xl">
                Quit
              </Text>
            </Button>
            {fileInfo && (
              <Text className="text-center text-purple-600 mt-4 text-lg">
                {fileInfo}
              </Text>
            )}
          </>
        ) : (
          <>
            <Text className="text-2xl text-purple-600 font-bold mb-5">
              Tools em breve ⚙️
            </Text>
            {/* Aqui você adiciona as opções da aba Tools depois */}
          </>
        )}
      </View>
    </View>
  );
};

export default MenuOptions;
