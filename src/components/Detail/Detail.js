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
            <View style={{ ...styles.mainContainer, flexDirection: contentLines > 1 ? "column" : "row" }} >
                {
                    contentLines == 1 ? <>
                        <View style={styles.labelIdContainer}>
                            <Text style={styles.label}>{label}</Text>
                        </View>
                        <Text style={styles.col}>
                            :
                        </Text>
                    </>
                        :
                        <View>
                            <Text style={styles.label}>{label} :</Text>
                        </View>
                }
                <View style={[contentLines > 1 ? {} : styles.marginContainer]} >
                    <Text style={styles.value}
                        onTextLayout={({ nativeEvent: { lines } }) => {
                            setContentLines(lines.length)
                        }}
                    >{value}</Text>
                </View>
            </View>
            :
            null

    )
}
export default Detail;