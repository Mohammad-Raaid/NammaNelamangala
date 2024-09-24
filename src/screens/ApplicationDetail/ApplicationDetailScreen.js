import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { styles } from './ApplicationDetailStyle'
import Header from '../../components/Header/Header'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Detail from '../../components/Detail/Detail'
import AttachmentSvg from '../../assets/svgs/attachment.svg'
import { ApplicationDetailHooks } from './ApplicationDetailHooks'
import i18n from '../../i18n'
import { Constants } from '../../global'
const ApplicationDetailScreen = () => {

    const {
        showCompleteDetails,
        setShowCompleteDetails
    } = ApplicationDetailHooks();

    return (
        <View style={styles.mainContainer}>
            <FocusAwareStatusBar barColor={Colors.WHITE} isLightBar={false} isTopSpace={true} />
            <Header headerText={i18n.t("CreateApplication.ApplicationDetails")} rightActions desc={i18n.t("ApplicationSection.Desc")} idLabel={i18n.t("CreateApplication.ApplicationId")} id={'AAER22234D'} />
            <ScrollView contentContainerStyle={{ paddingBottom: Constants.CHANGE_BY_MOBILE_DPI(20) }}>
                <Detail label={i18n.t("AppiliationCardSection.AppiliationIdText")} value='AAER22234D' />
                <Detail label={i18n.t("ComplaintDetailsSection.Issuedon")} value='Aug 23, 2024' />
                {
                    showCompleteDetails
                    &&
                    <Text style={[styles.title, showCompleteDetails ? styles.highlightedTitle : {}]}>
                        {i18n.t("CreateApplication.Details")}
                    </Text>
                }
                {
                    !showCompleteDetails
                    &&
                    <Detail label={i18n.t("Common.MLAConstituency")} value='Jalahalli' />
                }
                <Detail label={i18n.t("CreateApplication.TypeOfApplication")} value='typr' />
                <Detail label={i18n.t("Common.BoothNumber")} value='02' />
                <Detail label={i18n.t("CreateApplication.PersonalDetails")} value='Jalahalli' />
                <Detail label={i18n.t("CreateApplication.Benefits")} value='Benefits' />
                <Detail label={i18n.t("CreateApplication.Description")} value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
                {
                    showCompleteDetails
                    &&
                    <>
                        <Text style={[styles.title, showCompleteDetails ? styles.highlightedTitle : {}]}>
                            {i18n.t("CreateApplication.ConstituencyDetails")}
                        </Text>
                        <Detail label={i18n.t("Common.MLAConstituency")} value='Jalahalli' />
                        <Detail label={i18n.t("CreateApplication.WardName")} value='Jalahalli village' />
                        <Detail label={i18n.t("CreateApplication.VillageName")} value='Jalahalli' />
                        <Detail label={i18n.t("Common.Booth")} value='Jalahalli' />
                        <Detail label={i18n.t("CreateApplication.DoorNumber")} value='Jalahalli' />
                        <Detail label={i18n.t("CreateApplication.Floor")} value='Jalahalli' />
                        <Detail label={i18n.t("CreateApplication.BuildingName")} value='Jalahalli' />
                        <Detail label={i18n.t("CreateApplication.OwnershipType")} value='Jalahalli' />
                        <Detail label={i18n.t("CreateApplication.Main")} value='Jalahalli' />
                        <Detail label={i18n.t("CreateApplication.Cross")} value='Jalahalli' />
                        <Detail label={i18n.t("CreateApplication.Locality")} value='Jalahalli' />
                        <Detail label={i18n.t("Common.PinCode")} value='Jalahalli' />
                        <Text style={[styles.title, showCompleteDetails ? styles.highlightedTitle : {}]}>
                            {i18n.t("CreateApplication.PersonalDetails")}
                        </Text>
                        <Detail label={i18n.t("Common.FullName")} value='Jalahalli' />
                        <Detail label={i18n.t("Common.Mobile")} value='Jalahalli' />
                        <Detail label={i18n.t("Common.Email")} value='Jalahalli village' />
                        <Detail label={i18n.t("Common.CheckVoterId")} value='Jalahalli' />
                        <Detail label={i18n.t("Common.AadharNo")} value='Jalahalli' />
                        <Detail label={i18n.t("Common.DOB")} value='Jalahalli' />
                        <Detail label={i18n.t("Common.Age")} value='Jalahalli' />
                        <Detail label={i18n.t("CreateApplication.Gender")} value='Jalahalli' />
                        <Detail label={i18n.t("CreateApplication.Relationtype")} value='Jalahalli' />
                        <Detail label={i18n.t("CreateApplication.Disabilities")} value='Jalahalli' />
                        <Detail label={i18n.t("AddDigitalSurveyMemberSection.WidowText")} value='Jalahalli' />
                        <Detail label={i18n.t("CreateApplication.Education")} value='Jalahalli' />
                        <Detail label={i18n.t("CreateApplication.Employment")} value='Jalahalli' />
                    </>
                }
                <Text style={[styles.title, showCompleteDetails ? styles.highlightedTitle : {}]}>
                    {i18n.t("ApplicationSection.UploadedDocuments")}
                </Text>
                {
                    ["1", "2", "3", "4"].map((e) => {
                        return (
                            <View key={e} style={styles.selectedImageContainer}>
                                <AttachmentSvg />
                                <View style={styles.detailsContainer}>
                                    <Text style={styles.fileName}>
                                        1234ndbhavh/sggdgh2ggsghahd.pdf
                                    </Text>
                                    <Text style={styles.sizeText}>
                                        237kB
                                    </Text>
                                </View>
                            </View>
                        )
                    })
                }
                {
                    !showCompleteDetails
                    &&
                    <Text onPress={() => setShowCompleteDetails(true)} style={styles.showCompleteDetails}>
                        {i18n.t("ApplicationSection.ShowCompleteDetails")}
                    </Text>
                }
            </ScrollView>
        </View>
    )
}
export default ApplicationDetailScreen;