import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './GlobalButtonStyle'
import { Colors } from '../../global'

const GlobalButton = ({ buttonText = '', buttonPress = () => { }, externalButtonContainerStyle,
    loader = false }) => {

    const load = () => loader ? <ActivityIndicator size={'small'} color={Colors.WARNING} /> : <Text style={styles.buttonFontStyle}>{buttonText}</Text>
    return (
        <TouchableOpacity
            disabled={loader}
            onPress={buttonPress}
            style={[styles.buttonMainContainer, externalButtonContainerStyle]}>
            {load()}
        </TouchableOpacity>
    )
}

export default GlobalButton
