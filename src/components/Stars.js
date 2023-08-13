import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Star from './Star';


export default function Stars({ quantity: oldQuantity, edit = false, big = false }){

    const [quantity, setQuantity] = useState(oldQuantity);

    const RenderStars = () => {
        const starsList = [];

        for(let i = 0; i < 5; i++){
            starsList.push(
                <Star
                    key={i}
                    onPress={() => setQuantity(i + 1)}
                    disable={!edit}
                    big={big}
                    fill={i < quantity}
                />
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

const styles = StyleSheet.create({
    starsLine: {
        flexDirection: 'row',
    },
});