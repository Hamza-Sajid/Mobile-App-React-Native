import React, { useState } from 'react'
import { Clipboard, Text, View, Modal, Button, Alert, ToastAndroid } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

function MainCard({ text, setText }) {

  const copyText = () => {
    // Copy the text to the clipboard.
    Clipboard.setString(text);
    showToast()
  };
  const showToast = () => {
    ToastAndroid.show('Password Is Copied!', ToastAndroid.SHORT);
  };
  return (
    <View className="mt-12">

      <Text className="text-2xl font-bold text-gray-300 w-4/5 m-auto">Generate Passwords 🔑</Text>

      <Text className="text-sm text-gray-300 w-4/5 m-auto mt-4 uppercase">Generated Password</Text>
      <TouchableOpacity>
        <View

          className="flex w-4/5 m-auto bg-gray-700 rounded-lg mt-2 p-3 shadow-lg pb-6">


          <Text onPress={copyText} selectable className="text-xl text-center mt-4 text-white font-extrabold">{text}</Text>


        </View>
      </TouchableOpacity>

    </View>
  )
}

export default MainCard;