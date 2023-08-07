import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import { loadTop } from '../../../services/loadData';
import logo from '../../../assets/logo.png';

class Top extends React.Component{

    state = {
        top: {
            welcome: '',
            subtitle: '',
        },
    };

    updateTop(){
        const response = loadTop();
        this.setState({top: response});
    };

    componentDidMount(){
        this.updateTop();
    };

    render() {
        return (
            <View style={styles.top}>
                <Image source={logo} style={styles.image}/>
                <Text style={styles.welcome}>{this.state.top.welcome}</Text>
                <Text style={styles.subtitle}>{this.state.top.subtitle}</Text>
            </View>
        );
    };
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
    },
    subtitle: {
        fontSize: 16,
        lineHeight: 26,
    },
});

export default Top;