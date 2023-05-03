import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import * as Animatable from 'react-native-animatable';
import MainScreen from "./components/MainScreen";
function App() {
  return(

    <SafeAreaView>
      <ScrollView>
        
        <View className="flex flex-1 bg-blue-100  h-screen">
          <Animatable.Text 
          animation={'slideInDown'}

          className="pt-12 text-center text-3xl font-bold  text-gray-900 ">Dice Rolling App</Animatable.Text>
        <MainScreen/>
        </View>
      </ScrollView>
    </SafeAreaView>
   
  );
}


export default App;
