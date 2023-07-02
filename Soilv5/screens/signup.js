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
    const [email, onChangeEmail] = useState("email");
    const [user, onChangeUser] = useState("username");
    const [pass, onChangePass] = useState("password");
    const [conpass, onChangeConPass] = useState("confirm password");
  
  
    const disableButton = (email,user,pass,conpass) => {
      for (let i = 0; i < email.length; i++) {
        if (email[i] == " ") { return true;}
      }
      for (let i = 0; i < user.length; i++) {
        if (email[i] == " ") { return true;}
      }
      for (let i = 0; i < pass.length; i++) {
        if (pass[i] == " ") { return true;}
      }
      for (let i = 0; i < conpass.length; i++) {
        if (conpass[i] == " ") { return true;}
      }
      if (email.length == 0 || user.length == 0 || pass.length == 0 || conpass.length == 0) return true;
      else if (pass=="password") return true;
      return false;
    }

    const [loader, setLoader] = useState(false);

    const checkEmailAndPass = () => {
      (pass == conpass) ? sendUserAndPass() : TryAgainScreen()}

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
            <Text style={styles.title}>Sign up!</Text>
          </View>
          <LinearGradient colors={['#33be50', '#82f59a']} start={{x: 0,y: 0}}
           end={{x: 0.75,y: 1}} style={{width:'100%',height:20,justifyContent: 'center',alignItems: 'center',marginTop: 0}}></LinearGradient>
          <View style={styles.miniContainer}>
            <View style={styles.innerContainers}>
              <Text style={styles.inputs}>Email Address:</Text>
              <TextInput style={styles.inputs} onChangeText={onChangeEmail} placeholder={"type your email here"} />
            </View>
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
            <View style={styles.innerContainers}>
              <Text style={styles.inputs}>Confirm Password:</Text>
              <TextInput style={styles.inputs} secureTextEntry={true} onChangeText={onChangeConPass} placeholder={"type your password here"} />
            </View>
            <LinearGradient colors={['#33be50', '#82f59a']} start={{x: 0,y: 0}}
           end={{x: 0.75,y: 1}} style={{width:'100%',height:20,justifyContent: 'center',alignItems: 'center',marginTop: 20}}></LinearGradient>
          </View>
          <View style={styles.buttonArea}>
            <TouchableOpacity onPress= { () => { checkEmailAndPass()}} disabled={disableButton(email,user, pass, conpass)}>
              <Text style={disableButton(email,user,pass,conpass) ? styles.buttonTextDisabled : styles.buttonTextEnabled}>Press to Sign up!</Text>
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
        marginTop: 40,
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
        marginTop: 0,
        marginBottom: 20,
        backgroundColor: '#FFEFED',
        height: '54%',
        width: '100%',
        justifyContent: "space-evenly",
        alignItems:"flex-start",
        flexGrow:1,
      },
      innerContainers: {
        height:'30%',
        justifyContent: "space-around",
        alignContent: "space-between"
      },
      textFields: {
        backgroundColor: '#33BE50',
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