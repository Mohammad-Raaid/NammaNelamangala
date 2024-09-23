import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { styles } from './ComplaintDetailStyle'
import Header from '../../components/Header/Header'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Detail from '../../components/Detail/Detail'
import { Constants } from '../../global'
import i18n from '../../i18n'
const ComplaintDetailScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <FocusAwareStatusBar barColor={Colors.WHITE} isLightBar={false} isTopSpace={true} />
            <Header headerText={i18n.t("ComplaintDetailsSection.HeaderText")} rightActions />
            <Detail label={i18n.t("ComplaintCardSection.ComplaintIdText")} value='AAER22234D' />
            <Detail label={i18n.t("ComplaintDetailsSection.Issuedon")} value='Aug 23, 2024' />
            <Detail label={i18n.t("Common.Ward")} value='Jalahalli' />
            <Detail label={i18n.t("Common.VillageName")} value='Jalahalli' />
            <Detail label={i18n.t("Common.Booth")} value='Jalahalli' />
            <Detail label={i18n.t("Common.Complainttype")} value='Jalahalli' />
            <Detail label={i18n.t("Common.Location")} value='Jalahalli' />
            <Detail label='Complaint description' value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
            <Text style={styles.title}>
                Images
            </Text>
            <View style={styles.imagesContainer}>
                <Image source={require("../../assets/images/gallarySampleImage1.png")} style={styles.largeImage} />
                <View>
                    <View style={styles.smallImageContainer}>
                        <Image source={require("../../assets/images/gallarySampleImage2.png")} style={styles.smallImage} />
                        <Image source={require("../../assets/images/gallarySampleImage1.png")} style={{ ...styles.smallImage, marginLeft: Constants.CHANGE_BY_MOBILE_DPI(6) }} />
                    </View>
                    <Text style={styles.moreText}>
                        +1 more
                    </Text>
                </View>
            </View>
        </View>
    )
}
export default ComplaintDetailScreen;