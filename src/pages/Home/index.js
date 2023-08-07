import React from 'react';
import { FlatList, View, Text } from 'react-native';
import Top from './components/Top';

import producers from '../../mocks/producers';

export default function Home(){
    return (
        <>
            <Top/>
            <View>
                <FlatList
                    data={producers}
                    renderItem={(...producers) => {
                        return (
                            <View>
                                <Text>{}</Text>
                            </View>
                        );
                        }
                    }
                />
            </View>
        </>
    );
}