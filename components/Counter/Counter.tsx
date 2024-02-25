import React, { useState } from "react";
import { Button, Text, View} from 'react-native';



function Counter(){

    const [count, setCount]= useState(0)

    const addOne = () =>  setCount(prevState => prevState + 1)

    return (
       <View style={{ flex: 1 }}>
         <Button onPress={addOne}  title={"add one"}/>
         <Text testID="counter-value">{count}</Text>
       </View>
    )
}

export default Counter;