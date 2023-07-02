import React, { useState } from "react";
import { useFonts } from 'expo-font';
import {SafeAreaView,ActivityIndicator, Button, Text, StyleSheet, View, StatusBar, Platform, Image, ImageBackground, LogBox} from 'react-native'
import AppLoading from 'expo-app-loading';
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

export default function App() {
  
  let [fontsLoaded] = useFonts({
    Arimo_400Regular,
    Arimo_400Regular_Italic,
    Arimo_700Bold,
    Arimo_700Bold_Italic,
    Sen_400Regular,
    Sen_700Bold,
    Sen_800ExtraBold,
    //'Poppins-Medium': require('./assets/Poppins/Poppins-Medium.ttf') <Image source={'./assets/corazon-removebg-preview.png'}></Image>
  });
  if (!fontsLoaded) { return (<AppLoading/>) }

  return (
    <SafeAreaView style={styles.container}>
        <View style={{position: 'relative', top: 0, left: 0, right: 0, bottom: 15, width: 300, height: 500, justifyContent: 'center', alignItems: 'center',backgroundColor: "#ADFABD", borderRadius: 25}}>
        <Image source={require('./Logo.png')} />
        <Text style={styles.text}>Loading...</Text>
        </View>
        <View style={{position: 'absolute', top: 400, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#33BE50" />
        </View>
      
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#82F59A',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent:"center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text: {
    fontFamily: 'Sen_800ExtraBold',
    fontSize: 55,
    fontWeight: 'bold',
    color: '#33BE50'
  }
});