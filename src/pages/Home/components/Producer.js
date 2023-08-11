import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Producer({ name, image, distance, stars }){
    return (
        <View>
            <Image source={image} accessibilityLabel={name}/>
            <View>
                <View>
                    <Text>{name}</Text>
                    <Text>{distance}</Text>
                </View>
                <Text>{stars}</Text>
            </View>
        </View>
    );
};