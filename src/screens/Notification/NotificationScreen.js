import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './NotificationStyle'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { Colors, Constant } from '../../global/index.js'
import { NotificationHooks } from './NotificationHooks'
import Header from '../../components/Header/Header'

const NotificationScreen = () => {
    const {
        notification,
        renderNotification,
        refreshing,
        onRefresh
    } = NotificationHooks()
    return (
        <View style={styles.mainConatiner}>
            <FocusAwareStatusBar barColor={Colors.WHITE} isLightBar={false} isTopSpace={true} />
            <Header headerText='Notification' />
            <View style={styles.subContainer}>
                <FlatList
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                    data={[1, 2, 3, 4, 5]}
                    renderItem={renderNotification}
                />
            </View>
        </View>
    )
}
export default NotificationScreen
