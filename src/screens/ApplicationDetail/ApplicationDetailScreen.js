import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { styles } from './ApplicationDetailStyle'
import Header from '../../components/Header/Header'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Detail from '../../components/Detail/Detail'
const ApplicationDetailScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <FocusAwareStatusBar barColor={Colors.WHITE} isLightBar={false} isTopSpace={true} />
            <Header headerText='Application details' />
            <Detail label='Application ID' value='AAER22234D' />
            <Detail label='Issued on' value='Aug 23, 2024' />
            <Detail label='MLA Constituency' value='Jalahalli' />
            <Detail label='Application type' value='typr' />
            <Detail label='Ward name' value='Jalahalli' />
            <Detail label='Village name' value='Jalahalli village' />
            <Detail label='Booth number' value='02' />
            <Detail label='Benefits / Schemes' value='Benefits' />
            <Detail label='Description' value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
        </View>
    )
}
export default ApplicationDetailScreen;