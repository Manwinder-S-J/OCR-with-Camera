import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
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