import React,{useState} from "react"
import { View , StyleSheet, Alert} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import {Button, Text, Screen,TextField,  } from "../../components"
//import { color, spacing } from "../../theme"
//import { screensEnabled } from "react-native-screens"


export const SignupScreen = observer(function SignupScreen() {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [number, setNumber] = useState("")
    const [familynumber, setFamilynumber] = useState("")

  return (
    <View style={styles.full}>
      <Text style={styles.textStyle} text="SIGNUP"/>
      <TextField 
        value={firstname}
        style={styles.textFieldStyle}
        inputStyle={styles.textFieldInputStyle}
        placeholder="Enter Your FirstName"
        onChangeText={(text) => {setFirstname(text)}}
      />
      <TextField 
        value={lastname}
        style={styles.textFieldStyle}
        inputStyle={styles.textFieldInputStyle}
        placeholder="Enter Your LastName"
        onChangeText={(text) => {setLastname(text)}}
      />
      <TextField 
        value={email}
        style={styles.textFieldStyle}
        inputStyle={styles.textFieldInputStyle}
        placeholder="Enter Your Email"
        onChangeText={(text) => {setEmail(text)}}
      />
      <TextField 
        value={number}
        style={styles.textFieldStyle}
        inputStyle={styles.textFieldInputStyle}
        placeholder="Enter Your Number"
        onChangeText={(text) => {setNumber(text)}}
        
      />
      <TextField 
        value={familynumber}
        style={styles.textFieldStyle}
        inputStyle={styles.textFieldInputStyle}
        placeholder="Enter Your FamilyNumber"
        onChangeText={(text) => {setFamilynumber(text)}}
      />
      <TextField 
      value={password}
        style={styles.textFieldStyle}
        placeholder="Enter Your Password"
        inputStyle={styles.textFieldInputStyle}
        secureTextEntry={true}
        onChangeText={(text) => {setPassword(text)}}
      />
       
    <Button
        style={styles.buttonStyle}
        textStyle={styles.buttonTextStyle}
        text="SignUp"
        onPress={() => {
          console.log(firstname);
          console.log(lastname);
          console.log(number);
          console.log(familynumber);
          console.log(email);
          console.log(password);
            navigation.navigate('login')
           }}
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
        height: 50,
        marginVertical: 20
    },
    textFieldInputStyle:{
        color: 'black',
        fontSize: 15,
        paddingStart: 10
    },
    buttonStyle:{
        marginHorizontal: 50,
        marginVertical: 60,
        backgroundColor:"green",
        height: 70
    },
    buttonTextStyle: {
        fontSize: 25,
        color:'black'
    }
    
})