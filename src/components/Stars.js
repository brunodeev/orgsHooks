import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';


export default function Stars({ quantity: oldQuantity, edit = false, big = true }){

    const styles = functionStyles(big);

    return (
        <View style={styles.starsLine}>
            <Image source={estrela} style={styles.star}/>
            <Image source={estrela} style={styles.star}/>
        </View>
    );
}

const functionStyles = ( big ) => StyleSheet.create({
    starsLine: {
        flexDirection: 'row',
    },
    star: {
        width: big ? 36 : 12,
        height: big ? 36 : 12,
    },
});