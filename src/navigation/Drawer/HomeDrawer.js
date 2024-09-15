import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Constants, ScreenNames } from '../../global';
import ProfileDetailsDrawer from './ProfileDetailsDrawer';
import BottomTabs from '../BottomTabs/BottomTabs';
import CreateComplaintScreen from '../../screens/CreateComplaint/CreateComplaintScreen';
const drawer = createDrawerNavigator();

const HomeDrawer = (props, { navigation }) => {
  return (
    <drawer.Navigator
      drawerContent={props => {
        return <ProfileDetailsDrawer props={props} navigation={navigation} />;
      }}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
        drawerStyle: {
          width: Constants.SCREEN_WIDTH - Constants.CHANGE_BY_MOBILE_DPI(50),
        },
      }}
      drawerStyle={{ borderTopRightRadius: 10, borderBottomEndRadius: 10 }}>
      <drawer.Screen name={ScreenNames.BOTTOM_TABS} component={BottomTabs} />

    </drawer.Navigator>
  );
};

export default HomeDrawer;
