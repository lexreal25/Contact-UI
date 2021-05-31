import React, { Component } from 'react'
import {View, StyleSheet, SafeAreaView, Text, TextInput, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import { loginEmailAccount } from '../src/redux/actions/authActions'


class Login extends Component {

    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
        }
    }

    handleInputChange = (name, value) => {
        this.setState({
            [name] : value
        })
        console.log(value)
    }

    handleSubmit = () =>{
        const {password, confirmPassword } = this.state
        if(password !== confirmPassword){
             
        }
    }


    render() {

        const { email, password } = this.state

        return (
          <SafeAreaView style={styles.container}>
            <View style={styles.form}>
              <View style={{ marginVertical:10 }}>
                <Text
                  style={{ fontWeight: "700", fontSize: 50, color: "#5100ad" }} 
                >
                  Login
                </Text>
              </View>
              <View style={{ marginVertical:15 }}>
                <TextInput 
                    placeholder="Username" 
                    value={email}
                    onChangeText={(text) => this.handleInputChange('email', text)}
                    style={{
                        fontSize:20,
                        marginVertical:10,borderBottomWidth: 2,
                        borderBottomColor:'#020079'
                    }}
                 />
                <TextInput 
                    placeholder="Password" 
                    value={password}
                    secureTextEntry
                    onChangeText={(text) => this.handleInputChange('password', text)}
                    style={{
                        fontSize:20,
                        marginVertical:10,
                        borderBottomWidth: 2, 
                        borderBottomColor:'#020079'
                        }} 
                    />
                <TouchableOpacity style={{alignSelf:'flex-end'}}>
                  <Text style={{color:'#020079'}}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginVertical:15 }}>
                <TouchableOpacity style={styles.inputContainer} onPress={() => this.props.navigation.navigate("Signup")} >
                  <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "row",marginVertical:15 }}>
                  <Text style={{marginHorizontal:4, fontSize:17}}>Don't have an account?</Text>

                  <TouchableOpacity onPress={() => this.props.navigation.navigate("Signup")} >
                    <Text style={{color:'#5100ad', fontSize:16}} >Signup</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    form: {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    inputContainer:{
        height:40,
        backgroundColor:"#5100ad",
        borderRadius:3
    },
    loginText: {
        fontSize:20, 
        color:'#fff', 
        textAlign:'center'
    }
})

export default connect(null,{loginEmailAccount})(Login)

