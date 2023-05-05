import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import ConvertButton from "./components/ConvertButton";
import FromTo from "./components/FromTo";
import Result from "./components/Result";

function App() {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [finalValue, setFinalValue] = useState(0);
  const [amount, setAmount] = useState();

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="bg-white  w-full">
          <View className="w-10/12 p-4">
            <Text className="text-green-500 text-4xl font-bold pt-12 ml-2">
              Currency Convertor{" "}
            </Text>
          </View>
          <FromTo
            from={from}
            setFrom={setFrom}
            to={to}
            setTo={setTo}
            amount={amount}
            setAmount={setAmount}
          />
          <ConvertButton
            from={from}
            to={to}
            setFinalValue={setFinalValue}
            amount={amount}
          />
          <Result finalValue={finalValue} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
