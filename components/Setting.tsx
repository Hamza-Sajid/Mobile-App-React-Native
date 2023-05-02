import React, { useState } from 'react'
import { Text, View , Button, StyleSheet } from 'react-native'
import { Swipeable, Switch , TouchableOpacity} from 'react-native-gesture-handler';
import {
    HeaderButtons,
    HeaderButton,
    Item,
    HiddenItem,
    OverflowMenu,
  } from 'react-navigation-header-buttons';
  


function Setting({length , setText}) {
    const [isNumber, setisNumber] = useState(false);
    const [isLetter, setisLetter] = useState(false);
    const [isSymbol, setisSymbol] = useState(false);

const [isEnabled,setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    const generatePwd = ()=>
    {
        let result = '';

        let charset = '0123456789';

        if (isLetter==true) {
            charset += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
          }

          if (isSymbol == true) {
            charset += '!@#$%^&*()_+-={}[]|\\;:\'",.<>?/';
          }


          for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            result += charset[randomIndex];
          }

          setText(result)

    }
    
    
  return (
    <View>
        <Text className="text-sm text-gray-300 w-4/5 m-auto mt-4 uppercase">Settings</Text>

{/* INCLUDE A NUMBER */}
        <View className="flex flex-row justify-between items-center  w-4/5 m-auto bg-gray-700 rounded-lg mt-2 p-3 shadow-lg pb-6">
    <View>
    <Text className="text-white text-lg font-semibold">Include number</Text>
    </View>
          <View>
          <Switch onValueChange={ ()=> setisNumber(!isNumber)}        value={isNumber}    
                  thumbColor={isEnabled ? '#378BA4' : 'white'}
                  trackColor={{false: '#767577', true: '#81b0ff'}}
          />
          </View></View>

{/* INCLUDE AN LETTER */}
          <View className="flex flex-row justify-between items-center  w-4/5 m-auto bg-gray-700 rounded-lg mt-2 p-3 shadow-lg pb-6">
    <View>
    <Text className="text-white text-lg font-semibold">Include letter</Text>
    </View>
          <View>
          <Switch onValueChange={ ()=> setisLetter(!isLetter)}        value={isLetter}    
                  thumbColor={isEnabled ? '#378BA4' : 'white'}
                  trackColor={{false: '#767577', true: '#81b0ff'}}
          />
          </View></View>

{/* INCLUDE AN SYMBOL */}

          <View className="flex flex-row justify-between items-center  w-4/5 m-auto bg-gray-700 rounded-lg mt-2 p-3 shadow-lg pb-6">
    <View>
    <Text className="text-white text-lg font-semibold">Include symbol</Text>
    </View>
          <View>
          <Switch onValueChange={ ()=> setisSymbol(!isSymbol)}        value={isSymbol}    

                  thumbColor={isEnabled ? '#378BA4' : 'white'}
                  trackColor={{false: '#767577', true: '#81b0ff'}}
          />
          </View></View>

<View className="w-1/2 m-auto  mt-8 p-4 rounded-3xl shadow-2xl">
          <Button title='Generate Password' color={'black'} className=" rounded-2xl"
          onPress={()=> generatePwd()}
          ></Button>
          </View>
</View>
  )
}

export default Setting
