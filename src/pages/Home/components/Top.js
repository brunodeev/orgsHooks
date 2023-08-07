import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import logo from '../../../assets/logo.png';

export default function Top(){
    return (
        <View style={styles.top}>
            <Image source={logo} style={styles.image}/>
            <Text style={styles.welcome}>Olá, Bruno!</Text>
            <Text style={styles.subtitle}>Encontre os melhores produtores</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    top: {
        backgroundColor: '#F6F6F6',
        padding: 16,
    },
    image: {
        height: 28,
        width: 70,
    },
    welcome: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        lineHeight: 26,
    },
});