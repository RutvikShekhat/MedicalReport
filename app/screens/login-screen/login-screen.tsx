import React,{useState} from "react"
import { View , StyleSheet,Alert} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import {Button, Text, Screen,TextField,  } from "../../components"
import validation from 'validation'
import ValidationComponent from 'react-native-form-validator';
//import { color, spacing } from "../../theme"


export const LoginScreen = observer(function LoginScreen() {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    

  return (
    <View style={styles.full}>
      <Text style={styles.textStyle} text="LOGIN"/>
      <TextField 
        value={email}
        style={styles.textFieldStyle}
        inputStyle={styles.textFieldInputStyle}
        placeholder="Enter Your Email"
        onChangeText={(text) => {setEmail(text)}}
      />
      <TextField 
      value={password}
        style={styles.textFieldStyle}
        placeholder="Enter Your Password"
        inputStyle={styles.textFieldInputStyle}
        onChangeText={(text) => {setPassword(text)}}
        secureTextEntry={true}
      />
       
    <Button
        style={styles.buttonStyle}
        textStyle={styles.buttonTextStyle}
        text="LogIn"
        onPress={() => {
            console.log(email);
            console.log(password);
            Alert.alert('Your Data Saved successfully')}}
    />
    </View>
  )
})
 
const styles = StyleSheet.create({
    full:{
        flex:1,
        backgroundColor: "pink"
    },
    textStyle: {
        color: 'black',
        fontSize: 30,
        alignSelf: 'center',
        marginTop: 50
    },
    textFieldStyle:{
        // height:50,
        // borderWidth:1,
        marginHorizontal: 10,
        height: 70,
        marginVertical: 20
    },
    textFieldInputStyle:{
        color: 'black',
        fontSize: 15,
        paddingStart: 10
    },
    buttonStyle:{
        marginHorizontal: 30,
        marginVertical: 40,
        backgroundColor:"green",
        height: 70
    },
    buttonTextStyle: {
        fontSize: 25,
        color:'black'
    }
    
})