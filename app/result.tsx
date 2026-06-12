import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function ResultScreen() {
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
          fontSize: 50,
          marginBottom: 20,
        }}
      >
        🎉
      </Text>

      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        Great Artist!
      </Text>

      <Text
        style={{
          fontSize: 20,
          marginTop: 15,
          textAlign: "center",
        }}
      >
        You completed 5 minutes of creative drawing.
      </Text>

      <TouchableOpacity
        onPress={() => router.replace("/drawing" as any)}
        style={{
          marginTop: 30,
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
          Draw Again
        </Text>
      </TouchableOpacity>
    </View>
  );
}
