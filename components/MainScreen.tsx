import React, { useState } from "react";
import { Button, Image, Pressable, StyleSheet, Text, Vibration, View } from "react-native";
import Dice1 from "../Assets/one.png";
import Dice2 from "../Assets/two.png";
import Dice3 from "../Assets/three.png";
import Dice4 from "../Assets/four.png";
import Dice5 from "../Assets/five.png";
import Dice6 from "../Assets/six.png";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import * as Animatable from 'react-native-animatable';

function MainScreen() {
    const [currentDice, setCurrentDice] = useState(Dice2);



    // optional
    const options = {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: false,
    };

    const generateRandomDice = () => {

        ReactNativeHapticFeedback.trigger("impactLight", options);
        let value = Math.floor(Math.random() * 6 + 1);

        switch (value) {
            case 1:
                setCurrentDice(Dice1);
                break;

            case 2:
                setCurrentDice(Dice2);
                break;
            case 3:
                setCurrentDice(Dice3);
                break;
            case 4:
                setCurrentDice(Dice4);
                break;

            case 5:
                setCurrentDice(Dice5);
                break;

            case 6:
                setCurrentDice(Dice6);
                break;
            default:
                setCurrentDice(Dice2);
        }
    };

    return (
        <View className=" flex justify-center items-center m-auto">

            <Animatable.Image
                animation="bounceIn" iterationCount={2}
                source={currentDice}
                className="w-44 h-44 rounded-2xl mb-8"

            ></Animatable.Image>
            <Pressable style={styles.button} onPress={generateRandomDice}>
                <Text style={styles.text}>Play</Text>
            </Pressable>

        </View>

    );
}
export default MainScreen;



const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#212A3E',
        shadowOpacity: 2
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});