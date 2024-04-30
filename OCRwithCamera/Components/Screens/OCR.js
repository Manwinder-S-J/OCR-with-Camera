import React from 'react'
import { Text, View, Button } from 'react-native';

export default function OCR({navigation}) {
  return (
    <View>
        <Text>OCR</Text>
        <Button
            title="Go to Camera"
            onPress={()=> navigation.navigate('Camera')}
        />
    </View>
  )
}
