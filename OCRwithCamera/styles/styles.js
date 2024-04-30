import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
    // OCR styling
    screen: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        flexGrow: 1,
    },
      title: {
        fontSize: 30,
        marginVertical: 40,
        fontWeight: '400',
        marginTop:30,
    },
      subtitle: {
        fontSize: 20,
        marginVertical: 15,
        textAlign: 'center'
    },
      languagetitle: {
        fontSize: 30,
        marginVertical: 10,
        textAlign: 'center'
    },
      buttonOCR: {
        backgroundColor: 'darkblue',
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 18,
        paddingHorizontal: 40,
        borderRadius: 10,
        marginTop: 20,
        
    },
    buttonReset: {
          backgroundColor: '#E3242B',
          color: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 20,
          paddingHorizontal: 40,
          borderRadius: 10,
          marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    row: {
          flexDirection: 'row',
          justifyContent: 'space-around', 
          width: '100%', 
          marginTop: 5,
    },

    // Camera Styling
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#000',
        paddingBottom: 8,
    },
    controls: {
        flex: 0.5,
    },
    button: {
        height: 40,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#E9730F',
        marginLeft: 10,
    },
    camera: {
        flex: 5,
        borderRadius: 20,
    },
    topControls: {
        flex: 1,
    },
    selectImageButton1: {
        backgroundColor: 'black', 
        paddingTop: 40,
        borderRadius: 10, 
        alignItems: 'center',
        justifyContent: 'center',
        width: '72%',
    },
})