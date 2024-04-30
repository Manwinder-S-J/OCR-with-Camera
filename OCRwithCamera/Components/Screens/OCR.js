import React, { useState } from 'react';
import { Text, ScrollView, View, TouchableOpacity, ActivityIndicator, Alert, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import DropdownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../../styles/styles';

// Import Screens
import callGoogleVisionAsync from '../GoogleVision';
import { translateText } from '../TranslateText';

export default function OCR() {
    const navigation = useNavigation();
    const [language, setLanguage] = useState('en');
    const [subtitle, setSubtitle] = useState(null);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'English', value: 'en' },
        { label: 'Spanish', value: 'es' },
        { label: 'French', value: 'fr' },
        { label: 'German', value: 'de' },
        { label: 'Italian', value: 'it' },
        { label: 'Chinese', value: 'zh' },      
        { label: 'Portuguese', value: 'pt' },
        { label: 'Russian', value: 'ru' },
        { label: 'Japanese', value: 'ja' },
        { label: 'Hindi', value: 'hi' },
        { label: 'Arabic', value: 'ar' }
    ]);


    const getPermissionAsync = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    };

    const selectPhoto = async () => {
        setLoading(true);
        await getPermissionAsync();
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled && result.assets && result.assets[0].uri) {
            const base64 = await FileSystem.readAsStringAsync(result.assets[0].uri, {
                encoding: FileSystem.EncodingType.Base64
            });

            callGoogleVisionAsync(base64).then(data => {
                if (data.responses && data.responses.length > 0) {
                    const extractedText = data.responses[0].fullTextAnnotation.text;
                    translateText(extractedText, language).then(translatedText => {
                        setSubtitle(translatedText);
                        setLoading(false);
                    }).catch(translationError => {
                        console.error('Translation Failed:', translationError);
                        setLoading(false);
                    });
                } else {
                    Alert.alert('No Text Detected', 'No text could be found in the image.');
                    setLoading(false);
                }
            }).catch(error => {
                Alert.alert('Error', 'Failed to process image.');
                console.error(error);
                setLoading(false);
            });
        } else {
            Alert.alert('Image Picker', 'No image picked.');
            setLoading(false);
        }
    };

    const resetTranslation = () => {
        setSubtitle(null); 
    };

    
    return (
        <ScrollView contentContainerStyle={styles.screen}>
            <Text style={styles.title}>Optical Character Recognition</Text>
            <Text style={{fontWeight: '500', fontSize: 15,}}>Choose a language to extract the text in:</Text>
            <DropdownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="English"
                containerStyle={{height: 40, marginBottom: 20}}
                onChangeValue={(value) => {
                    setLanguage(value);
                }}
            />
            <View style={styles.row}>
            <TouchableOpacity style={styles.buttonOCR} onPress={selectPhoto}>
                <Icon name="folder-multiple-image" size={24} color="#FFFFFF" />
                <Text style={styles.buttonText}>Select Image</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonOCR} onPress={() => navigation.navigate('Camera')}>
                <Icon name="camera" size={24} color="#FFFFFF" />
                <Text style={styles.buttonText}>camera</Text>
            </TouchableOpacity>
            </View>
            {loading ? <ActivityIndicator size="large" /> : (
                <>
                    {subtitle && (
                        <>
                            <Text style={{fontWeight: '500', fontSize: 20, paddingTop: 25}}>OUTPUT:</Text>
                            <Text style={styles.subtitle} selectable={true}>{subtitle}</Text>
                            <View style={styles.row}>
                                <TouchableOpacity style={styles.buttonReset} onPress={resetTranslation}>
                                    <Text style={styles.buttonText}>Reset</Text>
                                </TouchableOpacity>
                        </View>
                        </>
                    )}
                </>
            )}
        </ScrollView>
    );
};
