import React from "react";
import { View, Text, KeyboardAvoidingView, Platform, Appearance, PermissionsAndroid } from "react-native";
import MainStack from './src/navigation/MainStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from "./src/redux/store/store";
import { StyleSheet } from "react-native";
import { AxiosInterceptor } from "./src/global/api-core";
const App = () => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS == "android" ? null :
      "padding"
    } style={styles.container}>
      <SafeAreaProvider>
        <Provider store={store}>
          <AxiosInterceptor>
            <MainStack />
          </AxiosInterceptor>
        </Provider>
      </SafeAreaProvider>
    </KeyboardAvoidingView>

  )
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

});
export default App;