import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Colors, Constants, Fonts, ScreenNames } from '../../global';
import { connect, useSelector } from 'react-redux';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
import { CommonActions, DrawerActions, useNavigation } from '@react-navigation/native';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ProfileDetailsDrawer = ({ }) => {
	const navigation = useNavigation()
	const userDetails = useSelector(state => state.user.userData);
	const pcashCount = useSelector(state => state.user.pcashCount);
	const resetStackAndGoToHome = CommonActions.reset({
		index: 0,
		routes: [{ name: ScreenNames.HOME_DRAWER, params: { screen: ScreenNames.HOME_SCREEN } }],
	});
	// const [menus, setMenus] = React.useState([
	// 	{
	// 		icon: <ProductsSvg height={CHANGE_BY_MOBILE_DPI(20)} width={CHANGE_BY_MOBILE_DPI(20)} />,
	// 		name: "Products",
	// 		onPress: () => {
	// 			navigation.dispatch(DrawerActions.closeDrawer());
	// 			navigation.dispatch(resetStackAndGoToHome)
	// 		}
	// 	},
	// 	{
	// 		icon: <ProfileSvg height={CHANGE_BY_MOBILE_DPI(20)} width={CHANGE_BY_MOBILE_DPI(20)} />,
	// 		name: "Profile",
	// 		onPress: () => {
	// 			navigation.dispatch(DrawerActions.closeDrawer());
	// 			navigation.navigate(ScreenNames.PROFILE_SCREEN)
	// 		}
	// 	},
	// 	{
	// 		icon: <CalculatorSvg height={CHANGE_BY_MOBILE_DPI(20)} width={CHANGE_BY_MOBILE_DPI(20)} />,
	// 		name: "Price Calculator",
	// 		onPress: () => {
	// 			navigation.dispatch(DrawerActions.closeDrawer());
	// 			navigation.navigate(ScreenNames.PRICE_CALCULATOR_SCREEN)
	// 		}
	// 	},
	// 	{
	// 		icon: <TrackOrderSvg height={CHANGE_BY_MOBILE_DPI(20)} width={CHANGE_BY_MOBILE_DPI(20)} />,
	// 		name: "Track Order",
	// 		onPress: () => {
	// 			navigation.dispatch(DrawerActions.closeDrawer());
	// 			navigation.navigate(ScreenNames.ORDERS_SCREEN)
	// 		}
	// 	},
	// 	{
	// 		icon: <HowItWorksSvg height={CHANGE_BY_MOBILE_DPI(20)} width={CHANGE_BY_MOBILE_DPI(20)} />,
	// 		name: "How's it Works",
	// 		onPress: () => {
	// 			navigation.dispatch(DrawerActions.closeDrawer());
	// 			navigation.navigate(ScreenNames.HOW_IT_WORKS_SCREEN)
	// 		}
	// 	},
	// 	{
	// 		icon: <FaqSvg height={CHANGE_BY_MOBILE_DPI(20)} width={CHANGE_BY_MOBILE_DPI(20)} />,
	// 		name: "FAQs",
	// 		onPress: () => {
	// 			navigation.dispatch(DrawerActions.closeDrawer());
	// 			navigation.navigate(ScreenNames.FAQ_SCREEN)
	// 		}
	// 	},
	// 	{
	// 		icon: <OfferSvg height={CHANGE_BY_MOBILE_DPI(20)} width={CHANGE_BY_MOBILE_DPI(20)} />,
	// 		name: "Offers",
	// 		onPress: () => {
	// 			navigation.dispatch(DrawerActions.closeDrawer());
	// 			navigation.navigate(ScreenNames.ORDERS_SCREEN)
	// 		}
	// 	},
	// 	{
	// 		icon: <ContactUsSvg height={CHANGE_BY_MOBILE_DPI(20)} width={CHANGE_BY_MOBILE_DPI(20)} />,
	// 		name: "Contact Us",
	// 		onPress: () => {
	// 			navigation.dispatch(DrawerActions.closeDrawer());
	// 			navigation.navigate(ScreenNames.ORDERS_SCREEN)
	// 		}
	// 	},
	// 	{
	// 		icon: <LogoutSvg height={CHANGE_BY_MOBILE_DPI(20)} width={CHANGE_BY_MOBILE_DPI(20)} />,
	// 		name: "Logout",
	// 		onPress: () => {
	// 			logout()
	// 		}
	// 	},

	// ])
	// const resetStackAndGoToWelcome = CommonActions.reset({
	// 	index: 0,
	// 	routes: [{ name: ScreenNames.LOGIN_SCREEN }],
	// });
	// const logout = async () => {
	// 	await AsyncStorage.clear()
	// 	navigation.dispatch(DrawerActions.closeDrawer());
	// 	navigation.dispatch(resetStackAndGoToWelcome);
	// }
	// const renderMenus = (item) => {
	// 	return (
	// 		<TouchableOpacity onPress={item.onPress} key={item.name} style={styles.menuContainer}>
	// 			{item.icon}
	// 			<Text style={styles.menuText}>
	// 				{item.name}
	// 			</Text>
	// 		</TouchableOpacity>
	// 	)
	// }
	return (
		<View style={{ flex: 1, backgroundColor: Colors.OFF_WHITE }}>
			<FocusAwareStatusBar barColor={Colors.BACKGROUND} isTopSpace />
			{/* <Image
				source={require('../../assets/images/AppLogoRect.png')}
				resizeMode="contain"
				style={styles.appIcon}
			/>
			<Text style={styles.userNameText}>
				Welcome! {userDetails.username}
			</Text>
			<Text style={styles.pcashText}>
				Pcash: {pcashCount}
			</Text> */}
			{/* <View style={styles.headerContainer}>
				<TouchableOpacity hitSlop={{ left: 20, top: 20, bottom: 20, right: 20 }} style={styles.backIcon} onPress={closeDrawer}>
					<BackIcon />
				</TouchableOpacity>
				<Image source={{ uri: `${IMAGE_URL}/${userDetails?.assetsDir}/${userDetails?.profileImage}` }} style={styles.profileImage} />
				<Text style={styles.userTypeText}>
					Coachee
				</Text>
			</View>*/}
			{/* <View style={styles.menusContainer}>
				{
					menus.map(renderMenus)
				}
			</View> */}

		</View>
	);
}


const mapStateToProps = state => ({
	userData: state.user.userData,
});

const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetailsDrawer);

const styles = StyleSheet.create({
	headerContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.PRIMARY,
		paddingTop: CHANGE_BY_MOBILE_DPI(52),
		paddingBottom: CHANGE_BY_MOBILE_DPI(20),
		borderBottomRightRadius: CHANGE_BY_MOBILE_DPI(8),
		borderBottomLeftRadius: CHANGE_BY_MOBILE_DPI(8),
	},
	appIcon: {
		height: CHANGE_BY_MOBILE_DPI(100),
		width: CHANGE_BY_MOBILE_DPI(200),
		alignSelf: "center"
	},
	userNameText: {
		fontSize: CHANGE_BY_MOBILE_DPI(18),
		color: Colors.TEXT_COLOR,
		fontFamily: Fonts.MEDIUM,
		textAlign: "center"
	},
	pcashText: {
		fontSize: CHANGE_BY_MOBILE_DPI(16),
		color: Colors.TEXT_COLOR,
		fontFamily: Fonts.MEDIUM,
		textAlign: "center"
	},
	menusContainer: {
		marginTop: CHANGE_BY_MOBILE_DPI(16),
		marginLeft: CHANGE_BY_MOBILE_DPI(16)
	},
	menuContainer: {
		flexDirection: "row",
		paddingLeft: CHANGE_BY_MOBILE_DPI(10),
		paddingVertical: CHANGE_BY_MOBILE_DPI(10),
		alignItems: "center"
	},
	menuText: {
		marginLeft: CHANGE_BY_MOBILE_DPI(10),
		fontSize: CHANGE_BY_MOBILE_DPI(16),
		fontFamily: Fonts.REGULAR,
		color: Colors.TEXT_COLOR
	},
	logoutContainer: {
		marginLeft: CHANGE_BY_MOBILE_DPI(16),
		flex: 1,
		justifyContent: "flex-end",
		marginBottom: CHANGE_BY_MOBILE_DPI(8)
	}
})