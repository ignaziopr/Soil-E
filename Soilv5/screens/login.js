import React, { useState } from 'react';
import Loading from './loading';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, Alert, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function UserScreen({navigation: {navigate}}) {

    const TryAgainScreen = () => {
    Alert.alert("Did you misspell your password the second time?",["Bet"]);
    }
    const ShowMainScreen = () => {
    Alert.alert("You are a verified user.","Congrats!",["Proceed"]);
    }
    const [user, onChangeUser] = useState("username");
    const [pass, onChangePass] = useState("password");
  
    const disableButton = (user,pass) => {
      for (let i = 0; i < user.length; i++) {
        if (user[i] == " ") { return true;}
      }
      for (let i = 0; i < pass.length; i++) {
        if (pass[i] == " ") { return true;}
      }
      if (user.length == 0 || pass.length == 0) return true;
      else if (pass=="password") return true;
      return false;
    }

    const [loader, setLoader] = useState(false);

    const sendUserAndPass = () => {
      setLoader(true);
      fetch('https:/endpoint/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'},
          body: JSON.stringify({
            'username': user,
            'password': pass})});
    };

    const getLoginFromApi = () => {
      setLoader(true);
      answer = fetch('https:/endpoint/')
        .then((response) => response.json())
        .then((json) => {
          navigate("Info")
          setLoader(false);
          return json.success;
        })
        .catch((error) => {
          console.error(error);
        });
    };
  

    return (
      (loader) ? <Loading/> :
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.title}>Login!</Text>
          </View>
           <LinearGradient colors={['#33be50', '#82f59a']} start={{x: 0,y: 0}}
           end={{x: 0.75,y: 1}} style={{width:'100%',height:20,justifyContent: 'center',alignItems: 'center',}}></LinearGradient>
          <View style={styles.miniContainer}>
            <View style={styles.innerContainers}>
              <Text style={styles.inputs}>Username:</Text>
              <TextInput style={styles.inputs} onChangeText={onChangeUser} placeholder={"type your username here"} />
            </View>
            <View style={styles.innerContainers}>
              <Text style={styles.inputs}>Password:</Text>
              <View>
              <TextInput style={styles.inputs} secureTextEntry={true} onChangeText={onChangePass} placeholder={"type your password here"} />
              </View>
            </View>
          </View>
            <LinearGradient colors={['#33be50', '#82f59a']} start={{x: 0,y: 0}}
           end={{x: 0.75,y: 1}} style={{width:'100%',height:20,justifyContent: 'center',alignItems: 'center',}}></LinearGradient>
          <View style={styles.buttonArea}>
            <TouchableOpacity onPress= { () => { sendUserAndPass()}} disabled={disableButton(user,pass)}>
              <Text style={disableButton(user,pass) ? styles.buttonTextDisabled : styles.buttonTextEnabled}>Press to Login!</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
    );}
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'papayawhip',
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 30,
        color: '#33BE50',
      },
      secondTitle: {
        fontSize: 25,
        color: '#33BE50',
      },
      userPass: {
        fontStyle: 'italic',
        fontSize: 20,
        color: '#33BE50',
      },
      miniContainer: {
        marginBottom: 0,
        backgroundColor: '#FFEFED',
        height: '45%',
        width: '100%',
        justifyContent: "space-evenly",
        alignItems:"flex-start",
        flexGrow:1,
      },
      innerContainers: {
        height:'30%',
        justifyContent: "space-around",
      },
      textFields: {
        backgroundColor: 'green',
      },
      inputs: {
        color: '#33BE50',
        fontWeight: "600",
        fontSize: 20,
        marginLeft: 30,
      },
      buttonArea: {
        backgroundColor: "#33BE50",
        flexDirection:'column',
        alignItems: 'center',
        justifyContent:"center",
        margin: 25,
        borderRadius: 10,
        width: '50%',
        height: '5%',
      },
      buttonTextDisabled: {
        color: 'gray',
        fontSize: 20,
      },
      buttonTextEnabled: {
        color: 'white',
        fontSize: 20,
      },
  });