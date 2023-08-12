import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';


export default function Stars({ quantity: oldQuantity, edit = false, big = false }){

    const styles = functionStyles(big);

    const RenderStars = () => {

        const [quantity, setQuantity] = useState(oldQuantity);

        const starsList = [];

        const getImage = (index) => {
            if(index < quantity){
                return estrela;
            };
            return estrelaCinza;
        };

        for(let i = 0; i < 5; i++){
            starsList.push(
                <TouchableOpacity key={i} onPress={() => setQuantity(i + 1)} disabled={!edit}>
                <Image source={getImage(i)} style={styles.star}/>
                </TouchableOpacity>
            );
        };

        return starsList;
    };

    return (
        <View style={styles.starsLine}>
            <RenderStars />
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