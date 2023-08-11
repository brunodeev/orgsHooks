import React, { useState, useEffect } from 'react';

import { FlatList, StyleSheet, Text, View } from 'react-native';

import { loadProducers } from '../../../services/loadData';

import Producer from './Producer';

export default function Producers({ top: Top }){

    const [title, setTitle] = useState('');
    const [list, setList] = useState([]);

    useEffect(() => {
        const response = loadProducers();
        setTitle(response.title);
        setList(response.list);
    }, []);

    const TopList = () => {
        return (
            <View>
                <Top/>
                <Text style={styles.title}>{title}</Text>
            </View>
        );
    }

    return (
            <FlatList
                data={list}
                renderItem={({item}) => <Producer {...item} />}
                ListHeaderComponent={TopList}
            />
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646',
    },

});