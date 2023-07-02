import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, Image, Alert, TouchableOpacity} from 'react-native';
import Loading from './loading';


export default function App({navigation: {navigate}}) {

  const VALID_CROPS = ["grapes","almonds","tomatoes","lettuce","strawberry","rice","corn","wheat","cotton","carrots"]

  function addCrop(crop) {
    if (VALID_CROPS.filter(x => x == crop.toLowerCase()).length > 0) {
    croplist.push(crop)
    console.log(croplist)
    let setVersion = new Set(croplist);
    let updated = Array.from(setVersion);
    console.log(updated)
    setCropList(updated);}
    else console.log("Not a valid crop.")
  }

  function submitCrops() {
    setLoader(true);
    fetch('https:/endpoint/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'},
        body: JSON.stringify({
          'crops': croplist})});
    setLoader(true);
      answer = fetch('https:/endpoint/')
        .then((response) => response.json())
        .then((json) => {
          navigate("Recommendations")
          setLoader(false);
          return json.success;
        })
        .catch((error) => {
          console.error(error);
        });
  }

  const [loader, setLoader] = useState(false);


  const [crop, onChangeCrop] = useState("");
  const [croplist, setCropList] = useState([]);

  return (
    (loader) ? <Loading/> :
    <SafeAreaView style={styles.container}>
      <View style={styles.alt}>
    <Image
        source={require('./Logo2.png')}
        style={styles.leftc}
    />
    </View>
      <Text style={styles.titleText}> Enter the crops you grew in the last harvest cycle: </Text>

      <View style={styles.sideways}>
      <TextInput onChangeText={onChangeCrop} style={styles.InputText} placeholder={"Type crop name here..."} />
      <View style={styles.buttonView}>
        <View style={styles.buttonFeel}>
      <Button color="#A4E6C6" title="Add Crop" onPress={() => addCrop(crop.trim())} />
        </View>
      </View>
      </View>
      <View style={styles.sideways}>
        <Text style={styles.InputText}>Crops Grown: {croplist.join(", ")}</Text>
      </View>
        <View style={styles.buttonFeel}>
      <Button color="#A4E6C6" title="Submit" onPress={() => navigate("Recommendations")} />
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'papayawhip',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },sideways: {
    flex: 1,
    backgroundColor: 'papayawhip',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },titleText: {
    textAlign: "center",
    fontSize: 20,
    color: "#33BE50",
    fontFamily: 'Sen_800ExtraBold',
    fontWeight:'bold',
    top: 0,
  },InputText: {
    textAlign: "center",
    fontSize: 20,
    color: "#000000",
    fontFamily: 'Sen_800ExtraBold',
    fontWeight:'bold',
    top: 0,},
  leftc: {
    width: '20%',
    height:"100%",
    resizeMode:'stretch',
    margin: 10,
  },
  alt: {
    height:'10%',
    width:"100%",
    margin:10
  },
  buttonView: {
    backgroundColor: 'papayawhip',
    flexDirection:'column',
    alignContent: 'space-between',
    justifyContent:"center",
    top: 100,
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
  buttonText: {
    textAlign: "center",
    fontSize: 30,
    color: "#A4E6C6",
    fontWeight:'bold',
  }
});