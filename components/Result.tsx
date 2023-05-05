import React from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

function Result({ finalValue }) {
  return (
    <View className="mt-4">
      <Text className="text-xl w-4/5 flex m-auto mb-2">Result</Text>
      <TextInput
        placeholder="Converted amount"
        className="w-4/5 m-auto rounded-lg indent-3 pl-4 text-center"
        style={{ backgroundColor: "#edebeb" }}
      >
        <Text className="text-center font-semibold">{finalValue}</Text>
      </TextInput>
    </View>
  );
}

export default Result;
