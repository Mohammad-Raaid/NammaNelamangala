import React from 'react';
import { Animated, Platform, Text, TouchableOpacity, View, } from 'react-native';

//insets
import { useSafeAreaInsets } from 'react-native-safe-area-context';

//styles
import { styles } from './styles';
//svgs
import Home from '../../assets/svgs/bottomTabIcons/home.svg';
import Complaints from '../../assets/svgs/bottomTabIcons/complaints.svg';
import Applications from '../../assets/svgs/bottomTabIcons/applications.svg';
import Gallery from '../../assets/svgs/bottomTabIcons/gallery.svg';
import ContactUs from '../../assets/svgs/bottomTabIcons/contactus.svg';
import HomeSelected from '../../assets/svgs/bottomTabIcons/homeSelected.svg';
import ComplaintsSelected from '../../assets/svgs/bottomTabIcons/complaintsSelected.svg';
import ApplicationsSelected from '../../assets/svgs/bottomTabIcons/applicationsSelected.svg';
import GallerySelected from '../../assets/svgs/bottomTabIcons/gallerySelected.svg';
import ContactUsSelected from '../../assets/svgs/bottomTabIcons/contactusSelected.svg';

import { Colors, Constants, Fonts } from '../../global';
import i18n from '../../i18n';
//components


const CustomBottomTab = ({ state, navigation }) => {

    const insets = useSafeAreaInsets();
    const isIOS = Platform.OS === 'ios';
    const names = [i18n.t("BottomTabSection.Home"), i18n.t("BottomTabSection.Complaints"), i18n.t("BottomTabSection.Applications"), i18n.t("BottomTabSection.Gallery"), i18n.t("BottomTabSection.ContactUs")];
    const svgs = [
        <HomeSelected height={Constants.CHANGE_BY_MOBILE_DPI(28)} width={Constants.CHANGE_BY_MOBILE_DPI(28)} />,
        <ComplaintsSelected height={Constants.CHANGE_BY_MOBILE_DPI(28)} width={Constants.CHANGE_BY_MOBILE_DPI(28)} />,
        <ApplicationsSelected height={Constants.CHANGE_BY_MOBILE_DPI(28)} width={Constants.CHANGE_BY_MOBILE_DPI(28)} />,
        <GallerySelected height={Constants.CHANGE_BY_MOBILE_DPI(28)} width={Constants.CHANGE_BY_MOBILE_DPI(28)} />,
        <ContactUsSelected height={Constants.CHANGE_BY_MOBILE_DPI(28)} width={Constants.CHANGE_BY_MOBILE_DPI(28)} />
    ];
    const blurredSvg = [
        <Home height={Constants.CHANGE_BY_MOBILE_DPI(28)} width={Constants.CHANGE_BY_MOBILE_DPI(28)} />,
        <Complaints height={Constants.CHANGE_BY_MOBILE_DPI(28)} width={Constants.CHANGE_BY_MOBILE_DPI(28)} />,
        <Applications height={Constants.CHANGE_BY_MOBILE_DPI(28)} width={Constants.CHANGE_BY_MOBILE_DPI(28)} />,
        <Gallery height={Constants.CHANGE_BY_MOBILE_DPI(28)} width={Constants.CHANGE_BY_MOBILE_DPI(28)} />,
        <ContactUs height={Constants.CHANGE_BY_MOBILE_DPI(28)} width={Constants.CHANGE_BY_MOBILE_DPI(28)} />
    ]

    const stylesToBeApplied = [styles.home, styles.cancerTab, styles.chatTab, styles.chatTab];

    return (
        <View style={[styles.con]}>
            <View style={styles.tabBarCon}>
                {
                    state.routes.map((route, index) => {
                        const isFocused = state.index === index;
                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        };

                        return (
                            <TouchableOpacity
                                key={`bottomtabs-${index}`} activeOpacity={1} onPress={onPress} style={styles.tab}>
                                <Animated.View>
                                    {
                                        isFocused
                                            ?
                                            svgs[index]
                                            :
                                            blurredSvg[index]
                                    }
                                </Animated.View>
                                {
                                    <Text style={{ ...styles.names, color: isFocused ? Colors.PRIMARY : "#111111", fontFamily: isFocused ? Fonts.BOLD : Fonts.REGULAR }}>
                                        {names[index]}
                                    </Text>
                                }
                            </TouchableOpacity>
                        );
                    })
                }

            </View>
        </View>
    );
};

export default CustomBottomTab;