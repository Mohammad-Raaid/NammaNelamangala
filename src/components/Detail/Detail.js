import {
    ActivityIndicator,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import { styles } from './DetailStyle';
import { Constants } from '../../global';
const Detail = ({ label = '', value = '' }) => {
    const [contentLines, setContentLines] = React.useState(1)
    return (
        value != ""
            ?
            <View style={{ ...styles.mainContainer, flexDirection: contentLines > 1 ? "column" : "row", width: contentLines > 1 ? Constants.SCREEN_WIDTH - Constants.CHANGE_BY_MOBILE_DPI(48) : Constants.CHANGE_BY_MOBILE_DPI(183) }} >
                {
                    contentLines == 1 ? <>

                        <View style={styles.labelIdContainer}>
                            <Text style={styles.label}>{label}</Text>
                        </View>
                        <Text style={{ marginHorizontal: 12 }}>
                            :
                        </Text>
                    </>
                        :
                        <View>
                            <Text style={styles.label}>{label} :</Text>
                        </View>
                }
                <View style={[contentLines == 2 ? styles.labelIdContainer : styles.marginContainer]} >

                    <Text style={styles.value}
                        onTextLayout={({ nativeEvent: { lines } }) => {
                            console.log(lines.length);
                            setContentLines(lines.length)
                        }
                        }
                    >{value}</Text>
                </View>
            </View>
            :
            null

    )
}
export default Detail;