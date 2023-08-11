import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Producer({ name, image, distance, stars }){
    return (
        <View style={styles.container}>
            <Image source={image} accessibilityLabel={name} style={styles.image}/>
            <View style={styles.vertical}>
                <View style={styles.horizontal}>
                    <Text>{name}</Text>
                    <Text>{distance}</Text>
                </View>
                <Text>{stars}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#f6f6f6',
        marginHorizontal: 14,
        marginVertical: 8,
        padding: 14,
    },
    image: {
        height: 55,
        width: 55,
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});