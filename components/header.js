import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header(){
    return(
        <View style= {styles.header}>
            <Text style={ styles.title}>My Works</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        padding: 38,
        backgroundColor: '#000080',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});