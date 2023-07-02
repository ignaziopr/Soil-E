import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, Alert, Image, TouchableOpacity} from 'react-native';

export default function App({navigation: {navigate}}) {
  
  const [loader, setLoader] = useState(false);

  return (
    (loader) ? <Loading/> :
    <SafeAreaView style={styles.container}>
      <View style={styles.alt}>
    <Image
        source={require('./Logo2.png')}
        style={styles.leftc}
    />
    </View>
      <Text style={styles.titleText}>Here are some recommendations for cover crops!</Text>
    <View>
    <Text style={styles.InputText}>Winter Rye</Text>
    <Text style={styles.InputText2}>Seed from late summer to midfall in Hardiness Zones 3 to 7 and from fall to midwinter in Zones 8 and warmer.  Along with conservation tillage practices, rye provides soil protection on sloping fields and holds soil loss to a tolerable level.</Text>
    <Text style={styles.InputText}>Crimson Clover</Text>
    <Text style={styles.InputText2}>Seed six to eight weeks before the average date of first frost at 15 to 18 lb./A drilled, 22 to 30 lb./A broadcast. As with other winter legumes, the ideal date varies with elevation. Don’t plant too early or crimson clover will go to seed in the fall and not regrow in spring until the soil warms up enough to germinate seeds./</Text>
    <Text style={styles.InputText}>Sweet Clover</Text>
    <Text style={styles.InputText2}>Sweetclover appears to have a greater ability to extract potassium, phosphorus and other soil nutrients from insoluble minerals than most other cover crops.</Text>
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
    top: 0,},InputText2: {
      textAlign: "center",
      fontSize: 12,
      color: "#000000",
      fontFamily: 'Sen_800ExtraBold',
      fontWeight:'bold',
      top: 0,},
  leftc: {
    width: '20%',
    height:"100%",
    marginLeft: 150,
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