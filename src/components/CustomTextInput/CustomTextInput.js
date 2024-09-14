import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './CustomTextInputStyle'
import { Colors, Constants } from '../../global'
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant'
const CustomTextInput = ({
    setValue,
    externalStyle,
    placeholderText = '',
    multiline = false,
    keyboardType = 'default',
    maxLength = null,
    onFocus = () => { },
    onBlur = () => { },
    editable = true,
    defaultValue = '',
    error = null,
    placeholderStyle = {},
    Prefix = null
}) => {

    const [inputValue, setInputValue] = React.useState(defaultValue)
    const onChangeText = (text) => {
        setInputValue(text)
        setValue(text)
    }
    return (
        <View style={styles.mainContainer}>
            {
                placeholderText != ""
                &&
                <Text style={[styles.textContainer, placeholderStyle]}>
                    {placeholderText}
                </Text>
            }
            <View style={[styles.inputMainContainer, externalStyle, multiline ? { height: Constants.CHANGE_BY_MOBILE_DPI(90) } : {}, error ? styles.error : {}]}>
                {
                    Prefix
                    &&
                    <Prefix />
                }
                <View style={styles.flexContainer}>
                    <TextInput
                        onFocus={onFocus}
                        onBlur={onBlur}
                        selectionColor={Colors.PRIMARY}
                        editable={editable}
                        multiline={multiline}
                        style={styles.inputStyle}
                        onChangeText={onChangeText}
                        keyboardType={keyboardType}
                        maxLength={maxLength}
                    >{inputValue}</TextInput>
                </View>
            </View>
            {
                error
                &&
                <Text style={styles.errorText}>
                    {error.errorMessage}
                </Text>
            }
        </View>
    )
}

export default CustomTextInput;
