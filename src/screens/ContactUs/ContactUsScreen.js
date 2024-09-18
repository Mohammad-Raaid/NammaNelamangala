import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import { styles } from './ContactUsStyle'
import { ContactUsHooks } from './ContactUsHooks'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { Colors, Constants } from '../../global'
import { useSelector } from 'react-redux'
import MenuHeader from '../../components/MenuHeader/MenuHeader'
import EmailSvg from '../../assets/svgs/email.svg'
import OfficeAddressSvg from '../../assets/svgs/officeAddress.svg'
import ContactNumberSvg from '../../assets/svgs/contactNumbers.svg'
import CopyIcon from '../../assets/svgs/copyIcon.svg'
const ContactUsScreen = () => {
    const {
    } = ContactUsHooks();
    const userData = useSelector(state => state.user.userData)
    return (
        <View style={styles.mainContainer}>
            <FocusAwareStatusBar isTopSpace barColor={Colors.WHITE} />
            <MenuHeader />
            <Text style={styles.heading}>
                Contact us
            </Text>
            <Text style={styles.description}>
                You can get in touch with us through below platforms.{`\n`}
                Our team will reach out to you as soon as it would be possible.
            </Text>
            <ScrollView>

                <View style={styles.container}>
                    <View style={styles.title}>
                        <EmailSvg />
                        <Text style={styles.titleText}>
                            Email ID
                        </Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailsText}>
                            xyzabc@gmail.com
                        </Text>
                        <CopyIcon />
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.title}>
                        <OfficeAddressSvg />
                        <Text style={styles.titleText}>
                            Office address
                        </Text>
                    </View>
                    <Text style={{ ...styles.detailsText, marginTop: Constants.CHANGE_BY_MOBILE_DPI(10) }}>
                        Xyz arena, xyz place
                    </Text>
                    <Text style={styles.detailsText}>
                        xyz circle
                    </Text>
                    <Text style={styles.detailsText}>
                        xyz cross
                    </Text>
                    <Text style={styles.detailsText}>
                        Bengaluru - pin code
                    </Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.title}>
                        <ContactNumberSvg />
                        <Text style={styles.titleText}>
                            Contact numbers
                        </Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailsText}>
                            +91-872*******
                        </Text>
                        <CopyIcon />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailsText}>
                            +91-872*******
                        </Text>
                        <CopyIcon />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailsText}>
                            +91-872*******
                        </Text>
                        <CopyIcon />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailsText}>
                            +91-872*******
                        </Text>
                        <CopyIcon />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailsText}>
                            +91-872*******
                        </Text>
                        <CopyIcon />
                    </View>
                </View>
            </ScrollView>
            <Text style={styles.footerText}>
                Ravikumar Foundation®
            </Text>
        </View>
    )
}

export default ContactUsScreen
