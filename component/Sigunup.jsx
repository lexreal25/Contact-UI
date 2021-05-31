import React, { Component } from 'react'
import {View, SafeAreaView, StyleSheet,Text, TextInput, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import { createEmailAccount, registerError } from '../src/redux/actions/authActions'


class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleInputChange = (name, value) => {
        this.setState({
            [name] : value
        })
        console.log(value)
    }

    handleSubmit = () => {
      const { email, password, confirmPassword } = this.state
      if(email || password === ''){
        alert('fields cannot be empty')
      }
      else if(password !== confirmPassword ){
        alert("passwords do not match")
      }else{
        this.props.navigation.navigate("Info")
      }
      
    }
    
    render() {
        const {email, password, confirmPassword, auth } = this.state
        return (
          <SafeAreaView style={styles.container}>
            <View style={styles.form}>
              <View style={{ marginVertical:10 }}>
                <Text
                  style={{ fontWeight: "700", fontSize: 50, color: "#5100ad" }} 
                >
                  Signup
                </Text>
              </View>
              <View style={{ marginVertical:20 }}>
                {
                  auth.error.register &&
                  <Text style={{color:'red'}}>{auth.error.register}</Text>
                }
                <TextInput 
                    placeholder="Username" 
                    autoCapitalize='none'
                    value={email}
                    onChangeText={(text) => this.handleInputChange('email', text)}
                    style={styles.input} 
                />
                
                <TextInput 
                    placeholder="Password" 
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => this.handleInputChange('password', text)}
                    style={styles.input}
                />

                <TextInput 
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={(text) => this.handleInputChange('confirmPassword', text)}
                    style={styles.input} 
                />
                
                <TouchableOpacity style={{alignSelf:'flex-end'}}>
                  <Text style={{color:'#020079'}}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginVertical:15 }}>
                <TouchableOpacity 
                    style={{
                        height:40,
                        backgroundColor:"#5100ad",
                        borderRadius:3
                    }}
                    onPress={this.handleSubmit}
                >
                  <Text style={{fontSize:20, color:'#fff', textAlign:'center'}}>Signup</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "row",marginVertical:15 }}>
                  <Text style={{marginHorizontal:4, fontSize:17}}>Already have an account?</Text>
                  <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                    <Text style={{color:'#5100ad', fontSize:16}}>Login</Text>
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
    input:{
        fontSize:17,
        marginVertical:15,
        borderBottomWidth: 2,
        borderBottomColor:'#020079'
    }
})

//function to handle error
const mapStateToProp = (state) => {
  return { auth: state }
}



export default connect(mapStateToProp, {createEmailAccount, registerError})(Signup)
