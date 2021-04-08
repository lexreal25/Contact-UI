import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Contact from './component/Contact'
import { contact } from './component/data'



export default function App() {

  return (
    <ScrollView>
      <View style={styles.container}>
        <FlatList
            data={contact}
            renderItem={({item}) => {
              return <Contact name={item.name} phone={item.number} />
            }}
            keyExtractor={(item) => item.number}
        />
    </View>
    {/* <View style={styles.modal}>
      <Text style={styles.addContact}>Hello</Text>
    </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
    
  },
  // modal: {
  //   position: 'relative',
  //   // top: 500,
  //   // left: 300,
  //   // backgroundColor: 'red',
  //   // width: 50,
  //   // height: 20,
  //   // borderRadius: 50,
  //   zIndex: 2
  // },
  addContact: {
      fontWeight: 'bold',
      textAlign:'center',
  }
});
