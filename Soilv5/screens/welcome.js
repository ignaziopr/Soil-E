import React, { useEffect, useState } from "react";
import {SafeAreaView, Button, Text, StyleSheet, View, StatusBar, Platform, Image} from 'react-native';
import AppLoading from 'expo-app-loading';
import Loading from './loading';
import { useFonts } from 'expo-font';
import { 
  Sen_400Regular,
  Sen_700Bold,
  Sen_800ExtraBold 
} from '@expo-google-fonts/sen';
import { 
  Arimo_400Regular,
  Arimo_400Regular_Italic,
  Arimo_700Bold,
  Arimo_700Bold_Italic, 
} from '@expo-google-fonts/arimo';
import { 
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic, 
} from '@expo-google-fonts/ubuntu';

export default function App({navigation: {navigate}}) {

  let [fontsLoaded] = useFonts({
    Arimo_400Regular,
    Arimo_400Regular_Italic,
    Arimo_700Bold,
    Arimo_700Bold_Italic,
    Sen_400Regular,
    Sen_700Bold,
    Sen_800ExtraBold,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
    //'Poppins-Medium': require('./assets/Poppins/Poppins-Medium.ttf') <Image source={'./assets/corazon-removebg-preview.png'}></Image>
  });
  if (!fontsLoaded) { return (<AppLoading/>) }

  return (
    <SafeAreaView style={styles.container}>
      <Image
      source={require('./Logo2.png')}/>
      <View>
        <Text style={styles.titleText}>Welcome to Soil-E!</Text>
      </View>
      <View style={styles.buttonView}>
      <View style={styles.buttonFeel}>
        <Button style={styles.buttonText} color="white" title="Start now" onPress={() => navigate("Info")}/>
        </View>
        <View style={styles.buttonFeel}>
        <Button style={styles.buttonText} color="white" title="Login" onPress={() => navigate("Login")}/>
        </View>
        <View style={styles.buttonFeel}>
        <Button style={styles.buttonText} color="white" title="Sign up" onPress={() => navigate("Sign up")}/>
        </View>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'papayawhip',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent:"center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  buttonView: {
    backgroundColor: 'papayawhip',
    flexDirection:'column',
    alignContent: 'space-between',
    justifyContent:"center",
    top: 50,
    width: "90%"
  },
  buttonFeel: {
    backgroundColor: "#33BE50",
    flexDirection:'column',
    alignItems: 'center',
    justifyContent:"center",
    margin: 10,
    borderRadius: 10,
  },
  titleText: {
    textAlign: "center",
    fontSize: 55,
    color: "#33BE50",
    fontWeight:'bold',
    fontFamily:"Ubuntu_700Bold",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 30,
    color: "#A4E6C6",
    fontFamily: "Ubuntu_700Bold",
    fontWeight:'bold',
  }});
