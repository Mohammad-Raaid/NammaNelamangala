import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomBottomTab from './CustomBottomTab'
import { ScreenNames } from '../../global';
import HomeStack from '../BottomTabStacks/HomeStack';
import ComplaintsStack from '../BottomTabStacks/ComplaintsStack';
import ApplicationsStack from '../BottomTabStacks/ApplicationsStack';
import GalleryStack from '../BottomTabStacks/GalleryStack';
import ContactUsStack from '../BottomTabStacks/ContactUsStack';

const BottomTabs = ({ }) => {
	const Tab = createBottomTabNavigator();
	const renderCustomBottomTab = (props) => {
		return <CustomBottomTab {...props} />;
	};
	return (
		<>
			<Tab.Navigator tabBar={renderCustomBottomTab} screenOptions={{ headerShown: false }}>
				<Tab.Screen name={ScreenNames.HOME_STACK} component={HomeStack} />
				<Tab.Screen name={ScreenNames.COMPLAINTS_STACK} component={ComplaintsStack} />
				<Tab.Screen name={ScreenNames.APPLICATIONS_STACK} component={ApplicationsStack} />
				<Tab.Screen name={ScreenNames.GALLERY_STACK} component={GalleryStack} />
				<Tab.Screen name={ScreenNames.CONTACT_US_STACK} component={ContactUsStack} />
			</Tab.Navigator>
		</>
	)
}
export default BottomTabs