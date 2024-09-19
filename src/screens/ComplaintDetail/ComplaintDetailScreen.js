import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { styles } from './ComplaintDetailStyle'
import Header from '../../components/Header/Header'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Detail from '../../components/Detail/Detail'
const ComplaintDetailScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <FocusAwareStatusBar barColor={Colors.WHITE} isLightBar={false} isTopSpace={true} />
            <Header headerText='Complaint details' />


            <Detail label='Complaint ID' value='AAER22234D' />
            <Detail label='Issued on' value='Aug 23, 2024' />
            <Detail label='Ward' value='Jalahalli' />
            <Detail label='Village' value='Jalahalli' />
            <Detail label='Village' value='Jalahalli' />
            <Detail label='Village' value='Jalahalli' />
            <Detail label='Complaint description' value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />

        </View>
    )
}
export default ComplaintDetailScreen;