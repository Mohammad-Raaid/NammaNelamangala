import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './CustomButtonStyle'
import { Colors } from '../../global'
import LinearGradient from 'react-native-linear-gradient'

const CustomButton = ({ buttonText = '', buttonPress = () => { }, externalButtonContainerStyle,
    loader = false }) => {

    const load = () => loader ? <ActivityIndicator size={'small'} color={Colors.WARNING} /> : <Text style={styles.buttonFontStyle}>{buttonText}</Text>
    return (
        <TouchableOpacity
            disabled={loader}
            onPress={buttonPress}
        >
            <LinearGradient colors={[Colors.PRIMARY, Colors.SECONDARY]} style={[styles.buttonMainContainer, externalButtonContainerStyle]}>
                {load()}
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default CustomButton
