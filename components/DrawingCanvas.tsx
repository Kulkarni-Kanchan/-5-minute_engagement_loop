import React from "react";
import { PanResponder, View } from "react-native";
import Svg, { Polyline } from "react-native-svg";

type Stroke = {
  color: string;
  points: string[];
};

type Props = {
  color: string;
  strokes: Stroke[];
  setStrokes: React.Dispatch<React.SetStateAction<Stroke[]>>;
};

export default function DrawingCanvas({ color, strokes, setStrokes }: Props) {
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,

    onPanResponderGrant: () => {
      setStrokes((prev) => [
        ...prev,
        {
          color,
          points: [],
        },
      ]);
    },

    onPanResponderMove: (event) => {
      const { locationX, locationY } = event.nativeEvent;

      setStrokes((prev) => {
        const updated = [...prev];

        const lastStroke = updated[updated.length - 1];

        if (lastStroke) {
          lastStroke.points.push(`${locationX},${locationY}`);
        }

        return [...updated];
      });
    },
  });

  return (
    <View
      style={{ flex: 1, backgroundColor: "white" }}
      {...panResponder.panHandlers}
    >
      <Svg width="100%" height="100%">
        {strokes.map((stroke, index) => (
          <Polyline
            key={index}
            points={stroke.points.join(" ")}
            fill="none"
            stroke={stroke.color}
            strokeWidth={6}
          />
        ))}
      </Svg>
    </View>
  );
}
