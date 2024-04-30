import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Screens
import Camera from './Components/Screens/Camera';
import OCR from './Components/Screens/OCR';

const Stack  = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='OCR' component={OCR}></Stack.Screen>
        <Stack.Screen name='Camera' component={Camera}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
