import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Stars from '../../../components/Stars';

export default function Producer({ name, image, distance, stars }){
    return (
        <View style={styles.container}>
            <Image source={image} accessibilityLabel={name} style={styles.image}/>
            <View style={styles.horizontal}>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Stars quantity={stars}/>
                </View>
                <Text style={styles.distance}>{distance}</Text>
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

        // android
        elevation: 4,

        //ios
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .3,
        shadowRadius: 2.5,
    },
    image: {
        height: 55,
        width: 55,
    },
    horizontal: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 14,
        paddingRight: 10,
    },
    name: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    distance: {
        fontSize: 12,
        lineHeight: 19,
    },
});