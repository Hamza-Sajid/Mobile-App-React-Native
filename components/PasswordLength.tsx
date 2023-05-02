import React, { useState } from 'react'
import { View ,Text} from 'react-native'
import {Slider} from '@miblanchard/react-native-slider';


function PasswordLength({value,setValue}) {

    
  return (
    <View>

<Text className="text-sm text-gray-300 w-4/5 m-auto mt-4 uppercase">Length:{value}</Text>

<View className="flex w-4/5 m-auto bg-gray-700 rounded-lg mt-2 p-3 shadow-lg pb-6">
<Slider thumbTintColor='white' maximumTrackTintColor="#31062A" minimumTrackTintColor="white" 
   value={value}
   minimumValue={2}
   maximumValue={20}
   step={2}
    onValueChange={(value)=> setValue(value)}
   />
</View>
               
            
    </View>
  ) 
}

export default PasswordLength