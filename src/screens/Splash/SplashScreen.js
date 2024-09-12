import React from 'react'
import { Image, Text, View } from 'react-native';
import { Colors, ScreenNames } from '../../global/index';
import { styles } from './SplashStyles';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { SplashHook } from './SplashHook';


const SplashScreen = () => {
    const { onLoad } = SplashHook()
    return (
        <View style={styles.mainContainer}>
            <FocusAwareStatusBar barColor={Colors.PRIMARY} isLightBar={true} isTopSpace={true} />
            {/* <Image
                style={styles.imagesContainer}
                source={require('../../assets/images/nammanelamangala-01.png')} resizeMode='contain' /> */}
        </View>
    )
}

export default SplashScreen

