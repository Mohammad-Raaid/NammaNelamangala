import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { styles } from './CustomCheckBoxStyles'
import { Colors, Constants, ScreenNames } from '../../global'
import CheckIcon from '../../assets/svgs/checkIcon.svg'
const CustomCheckBox = ({ label, onChange = () => { } }) => {
    const navigation = useNavigation()
    const [checked, setChecked] = React.useState(false)
    const onpress = () => {
        navigation.goBack()
    }
    const onChangeCheckbox = () => {
        setChecked(!checked)
        onChange(!checked)
    }
    return (
        <TouchableOpacity onPress={onChangeCheckbox} style={styles.checkboxConatiner}>
            <View style={{ ...styles.checkbox, backgroundColor: checked ? "#0A7AFF" : Colors.WHITE }}>
                {
                    checked
                    &&
                    <CheckIcon />
                }
            </View>
            <Text style={styles.checkboxLabel}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomCheckBox

