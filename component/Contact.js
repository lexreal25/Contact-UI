import React from 'react'
import { StyleSheet,Text, View, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { SimpleLineIcons } from '@expo/vector-icons';


export default function contact({name, phone}) {
    return (
      <View style={styels.contactsContainer}>
        <Image style={styels.image} source={require("../assets/profile.jpg")} />

        <View style={styels.infoContainer}>
          <Text style={styels.name} numberOfLines={1}>
            {name}
          </Text>
          <Text>{phone}</Text>
        </View>

        <View style={styels.icon}>
          <MaterialIcons name="local-phone" size={25} color="#009cf5" />
        </View>

        <View style={styels.icon}>
          <MaterialCommunityIcons
            name="message-processing"
            size={25}
            color="#009cf5"
          />
        </View>

        <View style={styels.icon}>
          <SimpleLineIcons name="options-vertical" size={25} color="#a8a8a8" />
        </View>
      </View>
    );
}


const styels = StyleSheet.create({
    contactsContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
        marginVertical: 15,
    },
    image: {
        width: 50, 
        height: 50, 
        borderRadius: 50
    },
    infoContainer: {
        justifyContent: 'center',
        marginHorizontal: 15,
        flex: 4
    },
    name: {
        fontWeight: 'bold',
        fontSize: 17
    },
    icon: {
        flex: 1
    }
})