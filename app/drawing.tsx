import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import DrawingCanvas from "../components/DrawingCanvas";

type Stroke = {
  color: string;
  points: string[];
};

export default function DrawingScreen() {
  const [color, setColor] = useState("black");

  const [timeLeft, setTimeLeft] = useState(300);

  const [strokes, setStrokes] = useState<Stroke[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);

          router.replace("/result" as any);

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 22,
          textAlign: "center",
          marginTop: 20,
          fontWeight: "bold",
        }}
      >
        Time Left: {timeLeft}s
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginVertical: 15,
        }}
      >
        <TouchableOpacity onPress={() => setColor("red")}>
          <Text style={{ fontSize: 35 }}>🔴</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setColor("blue")}>
          <Text style={{ fontSize: 35 }}>🔵</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setColor("green")}>
          <Text style={{ fontSize: 35 }}>🟢</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setColor("black")}>
          <Text style={{ fontSize: 35 }}>⚫</Text>
        </TouchableOpacity>

        {/* Eraser */}
        <TouchableOpacity onPress={() => setColor("white")}>
          <Text style={{ fontSize: 35 }}>🧽</Text>
        </TouchableOpacity>
      </View>

      {/* Clear Button */}
      <TouchableOpacity
        onPress={() => setStrokes([])}
        style={{
          alignSelf: "center",
          backgroundColor: "#FF4444",
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 10,
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          Clear Drawing
        </Text>
      </TouchableOpacity>

      <DrawingCanvas color={color} strokes={strokes} setStrokes={setStrokes} />
    </View>
  );
}
