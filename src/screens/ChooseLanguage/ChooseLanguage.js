import React from 'react'
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  I18nManager as RNI18nManager,
  ToastAndroid,
} from 'react-native'
import { Colors, Constants, Fonts, ScreenNames, } from '../../global/index'
import Header from '../../components/Header/Header'
import CheckBoxSvg from '../../assets/svgs/CheckBoxSvg.svg'
import CustomButton from '../../components/CustomButton/CustomButton'
import { CommonActions, DrawerActions, useNavigation } from '@react-navigation/native'
import { connect } from 'react-redux'
import * as UserAction from '../../redux/actions/userAction'
import i18n from '../../i18n'
import { Server } from '../../global'
import axios from 'axios'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import AsyncStorage from '@react-native-async-storage/async-storage'
const ChooseLanguage = ({ }) => {
  const languageList = [
    {
      name: 'ಕನ್ನಡ',
      code: 'kn',
    },
    {
      name: 'తెలుగు',
      code: 'te',
    },
    {
      name: 'தமிழ்',
      code: 'ta',
    },
    {
      name: 'हिन्दी',
      code: 'hi',
    },
    {
      name: 'English',
      code: 'en',
    },
  ]
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false)
  const [selectedLanguage, setSelectLanguage] = React.useState({
    name: 'English',
    code: 'en',
  })

  const setLangugae = (language) => {
    i18n.init(() => {
      const RNDir = RNI18nManager.isRTL ? 'RTL' : 'LTR'
      if (i18n.dir !== RNDir) {
        const isLocaleRTL = i18n.dir === 'RTL'
        RNI18nManager.forceRTL(isLocaleRTL)
      }
    }, language)
  }
  const renderLanguages = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectLanguage(item)}
        style={{
          ...styles.languageContainer,
          backgroundColor:
            selectedLanguage.name == item.name ? Colors.PRIMARY : Colors.WHITE,
        }}
      >
        {selectedLanguage.name == item.name && (
          <View style={styles.checkBoxContainer}>
            <CheckBoxSvg
              height={Constants.CHANGE_BY_MOBILE_DPI(24)}
              width={Constants.CHANGE_BY_MOBILE_DPI(24)}
            />
          </View>
        )}
        <Text
          style={{
            ...styles.languageText,
            color:
              selectedLanguage.name == item.name
                ? Colors.WHITE
                : Colors.PRIMARY,
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    )
  }

  const resetStackAndGoToLogin = CommonActions.reset({
    index: 0,
    routes: [{ name: ScreenNames.SPLASH_SCREEN }],
  })
  const goToHomePage = async () => {
    setLoading(true)
    try {

      await AsyncStorage.setItem('language', selectedLanguage.code)
      setLangugae(selectedLanguage.code)
      setLoading(false)
      navigation.dispatch(resetStackAndGoToLogin)
    } catch (error) {
      setLoading(false)
      ToastAndroid.show(
        'Unable to perform the action. Please try again',
        ToastAndroid.SHORT
      )
      console.log('goToHomePage error', error.message)
    }
  }
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer())
  }

  const chooseLanguage = async () => {
    let getLanguageCodeStoreinAsync = await AsyncStorage.getItem("language")
    const resp = languageList.filter(
      (e) => e.code == getLanguageCodeStoreinAsync
    )
    if (resp.length > 0) {
      setSelectLanguage(resp[0])
    }
  }

  React.useEffect(() => {
    chooseLanguage()
  }, [])
  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar isTopSpace />
      <Header
        headerText='Change Language'
      />
      <View style={styles.languageListContainer}>
        <FlatList
          data={languageList}
          numColumns={2}
          renderItem={renderLanguages}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          buttonText={i18n.t("Common.Continue")}
          buttonPress={goToHomePage}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  languageListContainer: {
    flex: 1,
    marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(34),
    marginTop: Constants.CHANGE_BY_MOBILE_DPI(15),
  },
  languageContainer: {
    height: Constants.CHANGE_BY_MOBILE_DPI(84),
    width: Constants.CHANGE_BY_MOBILE_DPI(116),
    borderRadius: Constants.CHANGE_BY_MOBILE_DPI(15),
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    marginHorizontal: Constants.CHANGE_BY_MOBILE_DPI(15),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Constants.CHANGE_BY_MOBILE_DPI(15),
  },
  checkBoxContainer: {
    backgroundColor: Colors.PRIMARY,
    height: Constants.CHANGE_BY_MOBILE_DPI(24),
    width: Constants.CHANGE_BY_MOBILE_DPI(24),
    borderRadius: Constants.CHANGE_BY_MOBILE_DPI(12),
    position: 'absolute',
    right: -7,
    top: -7,
  },
  languageText: {
    fontFamily: Fonts.MEDIUM,
    fontSize: Constants.CHANGE_BY_MOBILE_DPI(14),
  },
  buttonContainer: {
    marginBottom: Constants.CHANGE_BY_MOBILE_DPI(20),
  },
})
const mapStateToProps = (state) => ({
  // token: state.user.token,
  // userDetailData: state.user.userDetailData
})

const mapDispatchToProps = (dispatch) => ({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(ChooseLanguage)
