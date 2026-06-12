import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        🎨 Toddler Drawing App
      </Text>

      <TouchableOpacity
        onPress={() => router.push("/drawing" as any)}
        style={{
          backgroundColor: "#4CAF50",
          paddingHorizontal: 25,
          paddingVertical: 15,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
          }}
        >
          Start Drawing
        </Text>
      </TouchableOpacity>
    </View>
  );
}
