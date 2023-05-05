import axios from "axios";
import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

function ConvertButton({ from, to, setFinalValue, amount }) {
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  const handleResult = () => {
    //1st get result of from
    console.log("i am going to run");
    console.log(from);
    axios
      .get(
        `https://api.freecurrencyapi.com/v1/latest?apikey=qjhakAlWnrw0XTIYpytGzZRE76bIqNRNQzzOeEV2&currencies=${from}%2C${to}`,
        {}
      )
      .then(function (response) {
        const data = response.data.data;

        const firstKey = Object.keys(data)[0];
        const secondKey = Object.keys(data)[1];
        const firstValue = data[firstKey];
        const secondValue = data[secondKey];
        setFromValue(firstValue);
        setToValue(secondValue);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    console.log(amount);
    //now do calculations
    //calculation formula ->
    let result = (amount * fromValue) / toValue;
    result = result.toFixed(3);
    console.log(result);

    setFinalValue(result);
  };
  return (
    <View className="flex w-3/5 m-auto pt-12">
      <TouchableOpacity
        onPress={handleResult}
        className="bg-green-400 rounded-xl p-5 flex items-center justify-center"
      >
        <Text className="text-2xl font-bold text-white">Convert</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ConvertButton;
