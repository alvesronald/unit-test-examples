import React from "react";
import { Text, View } from 'react-native';


interface PersonProps {
    name: string
}

function Person({ name }: PersonProps){
    return (
        <View testID="person-component">
            <Text>My name is {name}</Text>
        </View>
    )
}

export default Person;