import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Contact from './Contact'
import { contact } from './data'


export default function Info() {

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
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
    
  },
  addContact: {
      fontWeight: 'bold',
      textAlign:'center',
  }
});
