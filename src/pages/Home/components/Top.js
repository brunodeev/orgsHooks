import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import { loadTop } from '../../../services/loadData';
import logo from '../../../assets/logo.png';

export default function Top() {

    const [top, setTop] = useState({
        top: {
            welcome: '',
            subtitle: '',
        }
    });
    
    function updateTop(){
        setTop(loadTop);
    }

    useEffect(() => {
        updateTop();
    }, []);

    return (
        <View style={styles.top}>
            <Image source={logo} style={styles.image}/>
            <Text style={styles.welcome}>{top.welcome}</Text>
            <Text style={styles.subtitle}>{top.subtitle}</Text>
        </View>
    );
};

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
        color: '#464646',
    },
    subtitle: {
        fontSize: 16,
        lineHeight: 26,
        color: '#A3A3A3',
    },
});