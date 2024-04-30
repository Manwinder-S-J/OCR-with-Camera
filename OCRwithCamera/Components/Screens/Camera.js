import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Camera, CameraType, FlashMode } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from '../../styles/styles';


export default function CameraScreen() {
    const { width } = Dimensions.get('window');
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null);
    const [zoom, setZoom] = useState(0);

    const cameraHeight = width * (4 / 3); 

    const handleZoomIn = () => {
        setZoom(prevZoom => Math.min(prevZoom + 0.1, 1)); // Increment zoom but max out at 1
    };
    
    const handleZoomOut = () => {
        setZoom(prevZoom => Math.max(prevZoom - 0.1, 0)); // Decrement zoom but no less than 0
    };

    useEffect(() => {
        (async () => {
        MediaLibrary.requestPermissionsAsync();
        const cameraStatus = await Camera.requestCameraPermissionsAsync();
        setHasCameraPermission(cameraStatus.status === 'granted');
        })();
    }, []);

    const takePicture = async () => {
        if (cameraRef) {
        try {
            const data = await cameraRef.current.takePictureAsync();
            console.log(data);
            setImage(data.uri);
        } catch (error) {
            console.log(error);
        }
        }
    };

    const savePicture = async () => {
        if (image) {
        try {
            const asset = await MediaLibrary.createAssetAsync(image);
            alert('Picture successfully saved in the gallery!');
            setImage(null);
            console.log('saved successfully');
        } catch (error) {
            console.log(error);
        }
        }
    };

    if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
    <View style={styles.container}>
        <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 30,
                    marginTop: -70,
                }}>
                    <TouchableOpacity onPress={() => {
                        setType(type === CameraType.back ? CameraType.front : CameraType.back);
                    }}>
                        <Icon name="camera-flip-outline" size={40} color="#FFFFFF"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setFlash(flash === FlashMode.torch ? FlashMode.off : FlashMode.torch);
                    }}>
                        <Icon name="flash" size={40} color={flash === FlashMode.torch ? 'yellow' : 'white'}/>
                    </TouchableOpacity>
        </View>
        {! image ?
            <Camera
                style={{ width: '100%', height: cameraHeight,  }}
                type={type}
                flashMode={flash} 
                ref={cameraRef}
                zoom={zoom}
            >
                
            </Camera>
            :
            <Image source={{uri:image}} style={{ width: '100%', height: cameraHeight,  }}/>
            }
            <View>
                {image ?
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 50,
                }}>
                    <TouchableOpacity onPress={() => setImage(null)} style={{paddingTop: 20,}}>
                        <Icon name="close-outline" size={40}  color="#FFFFFF"></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={savePicture} style={{paddingTop: 20,}}>
                        <Icon name="check-outline" size={40}  color="#FFFFFF"></Icon>
                    </TouchableOpacity>
                </View>
                :
                <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 70}}>
                    <TouchableOpacity onPress={handleZoomOut} style={{paddingTop: 30,}}>
                        <Icon name="minus" size={40} color="#FFFFFF"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectImageButton1} onPress={takePicture}>
                        <Icon name="camera-iris" size={65} color="#FFFFFF" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleZoomIn} style={{paddingTop: 30,}}>
                        <Icon name="plus" size={40} color="#FFFFFF"/>
                    </TouchableOpacity>
                </View>
                }
            </View>
    </View>
  );
}

