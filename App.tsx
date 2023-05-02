import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import MainCard from "./components/MainCard";
import PasswordLength from "./components/PasswordLength";
import Setting from "./components/Setting";




function App() {
  
  const [value,setValue] = useState(2);

  const [text,setText] = useState("[AS*p**82*^*\*]")
  return (
    
   <SafeAreaView>
    <ScrollView>
      <View className="bg-gray-800 h-screen">
<MainCard text={text} setText={setText}/>
<PasswordLength value={value} setValue={setValue}/>
<Setting length={value}  setText={setText}/>
</View>
    </ScrollView>
   </SafeAreaView>
   
  );
}


export default App;
