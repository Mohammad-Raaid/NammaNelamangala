import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Colors, Constants, Fonts, ScreenNames } from '../../global';
import { connect, useSelector } from 'react-redux';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
import { CommonActions, DrawerActions, useNavigation } from '@react-navigation/native';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import HomeIcon from '../../assets/svgs/home'
import DescriptionIcon from '../../assets/svgs/description'
import ArticleIcon from '../../assets/svgs/article'
import CallIcon from '../../assets/svgs/call'
import NotificationIcon from '../../assets/svgs/menuNotifications'
import GalleryIcon from '../../assets/svgs/gallery'
import SettingIcon from '../../assets/svgs/settings'
import FrameIcon from '../../assets/svgs/Frame'
const ProfileDetailsDrawer = ({ }) => {
	const navigation = useNavigation()
	const userDetails = useSelector(state => state.user.userData);
	const pcashCount = useSelector(state => state.user.pcashCount);
	const resetStackAndGoToHome = CommonActions.reset({
		index: 0,
		routes: [{ name: ScreenNames.HOME_DRAWER, params: { screen: ScreenNames.HOME_SCREEN } }],
	});
	const [menus, setMenus] = React.useState([
		{
			icon: <HomeIcon />,
			name: "Home",

		},
		{
			icon: <DescriptionIcon />,
			name: "Complaints",
		},
		{
			icon: < ArticleIcon />,
			name: "Applications",

		},
		{
			icon: <CallIcon />,
			name: "Contact us",

		},
		{
			icon: <GalleryIcon />,
			name: "Gallery",

		},
		{
			icon: <NotificationIcon />,
			name: "Notifications",

		}
	])
	const renderMenus = (item, index) => {
		return (
			<TouchableOpacity onPress={item.onPress} key={item.name} style={styles.menuContainer}>
				{item.icon}
				<Text style={styles.menuText}>
					{item.name}
				</Text>
				<View style={styles.notificationCountContainer}>
					{
						index == 5 ? <View style={styles.notificationCount}><Text style={styles.countColor}>1</Text></View> : null
					}
				</View>
			</TouchableOpacity>)
	}
	return (
		<View style={{ flex: 1, backgroundColor: Colors.OFF_WHITE }}>
			<FocusAwareStatusBar barColor={Colors.BACKGROUND} isTopSpace />
			<View style={styles.profileContainer}>
				<View style={styles.imageBorder}>
					<Image
						resizeMode="cover"
						style={styles.bottomImage}
						source={require('../../assets/images/logo-2.png')}
					/>
				</View>
				<View style={styles.iconText}>
					<Text style={styles.iconTextColor}>
						ನಮ್ಮ ನೆಲಮಂಗಲ
					</Text>
					<Text style={styles.textContainer}>
						Ravikumar Foundation®
					</Text>
				</View>
			</View>
			<View style={styles.menusContainer}>
				{
					menus.map(renderMenus)
				}
			</View>
			<View style={styles.flexContainer}>
				<View style={styles.settingSvgContainer}>
					<View style={styles.settingContainer}>
						<SettingIcon />
						<Text style={styles.settingText}>
							Settings
						</Text>
					</View>
				</View>
				<View style={styles.profileContainer}>
					<View style={styles.image}>
						<Image
							resizeMode="cover"
							style={styles.bottomImage}
							source={require('../../assets/images/profile.png')}
						/>
					</View>
					<View style={styles.iconText}>
						<Text style={styles.TextColor}>
							NAme
						</Text>
						<Text style={styles.textContainer}>
							name@gmail.com
						</Text>
					</View>
					<View style={styles.frameContainer}>
						<FrameIcon />
					</View>
				</View>
			</View>
		</View>
	);
}


const mapStateToProps = state => ({
	userData: state.user.userData,
});

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetailsDrawer);

const styles = StyleSheet.create({
	profileContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: Constants.CHANGE_BY_MOBILE_DPI(20),
		marginLeft: Constants.CHANGE_BY_MOBILE_DPI(24)
	},
	imageBorder: {
		borderWidth: Constants.CHANGE_BY_MOBILE_DPI(2.5),
		borderRadius: Constants.CHANGE_BY_MOBILE_DPI(25),
		height: Constants.CHANGE_BY_MOBILE_DPI(50),
		width: Constants.CHANGE_BY_MOBILE_DPI(50),
		justifyContent: "center",
		alignItems: "center",
		borderColor: Colors.GRAY_85,
		overflow: "hidden"
	},
	iconText: {
		marginLeft: Constants.CHANGE_BY_MOBILE_DPI(12)
	},
	iconTextColor: {
		color: Colors.PRIMARY,
		fontFamily: Fonts.EXTRA_BOLD
	},
	textContainer: {
		fontFamily: Fonts.REGULAR,
		color: Colors.GRAY_85,
	},
	frameContainer: {
		flex: 1,
		alignItems: "flex-end",
		marginRight: Constants.CHANGE_BY_MOBILE_DPI(24)
	},
	settingSvgContainer: {
		justifyContent: "flex-end",
		marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(25),
		borderBottomWidth: 1,
		borderBottomColor: Colors.GRAY_85,
		flex: 1
	},
	settingContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: Constants.CHANGE_BY_MOBILE_DPI(13),

	},
	settingText: {
		marginLeft: Constants.CHANGE_BY_MOBILE_DPI(10),
		fontFamily: Fonts.BOLD
	},
	flexContainer: {
		flex: 1,
		justifyContent: "flex-end",
		marginBottom: Constants.CHANGE_BY_MOBILE_DPI(50)
	},
	TextColor: {
		fontFamily: Fonts.BOLD,
		color: Colors.BLACK
	},
	image: {
		borderRadius: Constants.CHANGE_BY_MOBILE_DPI(25),
		height: Constants.CHANGE_BY_MOBILE_DPI(50),
		width: Constants.CHANGE_BY_MOBILE_DPI(50),
		justifyContent: "center",
		alignItems: "center",
		borderColor: Colors.GRAY_85,
		overflow: "hidden"
	},
	bottomImage: {
		height: "100%",
		width: "100%"
	},
	menusContainer: {
		marginTop: CHANGE_BY_MOBILE_DPI(16),
		marginLeft: CHANGE_BY_MOBILE_DPI(16)
	},
	menuContainer: {
		flexDirection: "row",
		paddingLeft: CHANGE_BY_MOBILE_DPI(10),
		paddingVertical: CHANGE_BY_MOBILE_DPI(10),
		alignItems: "center",
	},
	menuText: {
		marginLeft: CHANGE_BY_MOBILE_DPI(10),
		fontSize: CHANGE_BY_MOBILE_DPI(16),
		fontFamily: Fonts.REGULAR,
		color: Colors.TEXT_COLOR
	},
	notificationCountContainer: {
		flex: 1,
		alignItems: "flex-end",
		marginRight: Constants.CHANGE_BY_MOBILE_DPI(25)
	},
	notificationCount: {
		borderRadius: Constants.CHANGE_BY_MOBILE_DPI(25),
		backgroundColor: Colors.RED,
		height: Constants.CHANGE_BY_MOBILE_DPI(18),
		width: Constants.CHANGE_BY_MOBILE_DPI(18),
		alignItems: "center",
		justifyContent: "center"
	},
	countColor: {
		color: Colors.WHITE
	}
})