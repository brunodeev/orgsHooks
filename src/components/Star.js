import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

export default function Star({ onPress, disable = true, fill, big = false }){

    const styles = functionStyles(big);

    const getImage = () => {
        if(fill){
            return estrela;
        };
        return estrelaCinza;
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disable}
            >
            <Image source={getImage()} style={styles.star}/>
        </TouchableOpacity>
    );
};

const functionStyles = ( big ) => StyleSheet.create({
    star: {
        width: big ? 36 : 12,
        height: big ? 36 : 12,
    },
});