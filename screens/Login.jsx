import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Apple from '../assets/apple.png'
import Google from '../assets/image1.png'
import Facebook from '../assets/facebooklogo.png'

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#fafafd"}}>
        <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeName}>Jobizz</Text>
            <Text style={styles.welcome}>Welcome Back👋</Text>
            <Text style={styles.welcomeText}>Let's log in. Apply to jobs</Text>
        </View>

        <View style={styles.InputContainer}>
            <TextInput style={styles.input} placeholder='Name' />
            <TextInput style={styles.input} placeholder='Email'/>
            <TouchableOpacity style={{padding: 20, backgroundColor: "#356899", borderRadius: 10, marginTop: 15}} onPress={()=> navigation.navigate("Home")}>
                <Text style={{textAlign: "center", color: "white", fontSize: 18}}>Log in</Text>
            </TouchableOpacity>
        </View>
        <View>
            <View/>
            <Text style={{marginTop: 60, textAlign: 'center', fontSize: 20, color: 'gray'}}>Or continue with</Text>
            <View/>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity>
                <Image source={Apple} style={{width: 120, height: 120}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={Google} style={{width: 120, height: 120}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={Facebook} style={{width: 120, height: 120}}/>
            </TouchableOpacity>
            
        </View>
        <View style={{display: "flex", flexDirection:'row', gap: 5, alignItems: 'center', justifyContent: 'center', marginTop: 60}}>
            <Text style={{fontSize: 20}}>Don't have an account?</Text>
            <Text style={{fontSize: 20, fontWeight: '700', color: '#356899'}}>Register</Text>
        </View>
    </SafeAreaView>
   
  )
}

export default Login

const styles = StyleSheet.create({
    welcomeContainer: {
        marginTop: 120,
        marginHorizontal: 40,
        display: "flex",
        flexDirection: "column",
        gap: 1,
    },
    welcomeName: {
        fontSize: 50,
        color: "#356899",
        fontWeight: "bold"
    },
    welcome: {
        fontSize: 55,
        fontWeight: "bold"
    },
    welcomeText: {
        color: "gray",
        fontSize: 18
    },
    InputContainer: {
        marginTop: 60,
        width: "90%",
        marginHorizontal: 20

    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        width: "100%",
        padding: 15,
        marginBottom: 17,
        borderRadius: 10,
        fontSize: 22,
    },
})