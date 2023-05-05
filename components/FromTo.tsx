import React, { useEffect, useState } from 'react'
import { View , Text} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
function FromTo({from, setFrom , to , setTo , amount, setAmount}) {
    const [fromselectedLanguage, setFromSelectedLanguage] = useState("lgs");
    const [toselectedLanguage, setToSelectedLanguage] = useState("lgs");
    const [Currency, setCurrency] = useState<CurrencyType>({});



    interface CurrencyType {
        [key: string]: number;
      }

      

    useEffect(() => {
        axios.get('https://api.freecurrencyapi.com/v1/latest?apikey=qjhakAlWnrw0XTIYpytGzZRE76bIqNRNQzzOeEV2', {
        })
            .then(function (response) {                
                const currencyList = Object.keys(response.data.data);
                setCurrency(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }, [0])
    





const updateResult = async(e:any)=>
{
setTo(e)
}
const firstUpdateResult = async(b:any)=>
{
    setFrom(b)
}
  return (
    <View className="w-4/5 m-auto mt-4">

        <Text className="text-xl text-black font-medium mb-2">
            From
        </Text>


        <Picker
        style={{backgroundColor:'#edebeb' , borderRadius:2 }}
  selectedValue={fromselectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    {
        setFromSelectedLanguage(itemValue)
        firstUpdateResult(itemValue)
    }
    
  }>
  
  {Object.keys(Currency).map((currency, index) => (
<Picker.Item label={currency} key={index} value={currency} /> 
      ))}

</Picker>


{/* -----------------
        TO
------------------- */}

<Text className="text-xl text-black font-medium mb-2 mt-8">
            To
        </Text>


        <Picker
        style={{backgroundColor:'#edebeb' , borderRadius:2}}
  selectedValue={toselectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    {
        setToSelectedLanguage(itemValue)
        updateResult(itemValue)
    }
    
  }>
   {Object.keys(Currency).map((currency, index) => (
<Picker.Item label={currency} key={index} value={currency} /> 
      ))}
</Picker>



{/* -----------------
        AMOUNT
------------------- */}

<Text className="text-xl text-black font-medium  mt-6">
            Amount
        </Text>

<TextInput 
keyboardType='numeric'
value={amount}
placeholder={'Enter your amount'}
    onChangeText={setAmount}
className="mt-2 w-full rounded-lg indent-3 pl-4" style={{backgroundColor:'#edebeb'}}></TextInput>
    </View>
  )
}

export default FromTo