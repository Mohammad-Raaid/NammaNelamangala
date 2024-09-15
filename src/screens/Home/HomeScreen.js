import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './HomeStyle'
import { HomeHooks } from './HomeHooks'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { Colors, Constants } from '../../global'
import { useSelector } from 'react-redux'
import MenuHeader from '../../components/MenuHeader/MenuHeader'
import Carousel from 'react-native-reanimated-carousel'

const HomeScreen = () => {
    const {
        renderBanner,
        renderIndicators,
        setIndex,
        actions,
        renderNewsAndEvents
    } = HomeHooks();
    return (
        <View style={styles.mainContainer}>
            <FocusAwareStatusBar isTopSpace barColor={Colors.WHITE} />
            <MenuHeader />
            <ScrollView>
                <Carousel
                    loop
                    width={Constants.SCREEN_WIDTH}
                    height={Constants.CHANGE_BY_MOBILE_DPI(450)}
                    autoPlay={true}
                    onSnapToItem={(index) => setIndex(index)}
                    data={[1, 2, 3, 4, 5]}
                    scrollAnimationDuration={3000}
                    renderItem={renderBanner}
                />
                <View style={styles.indicatorContainer}>
                    {[1, 2, 3, 4, 5].map(renderIndicators)}
                </View>
                <View style={styles.actionListContainer}>
                    {actions.map((item) => {
                        return (
                            <View key={item.name} style={styles.actionMainContainer}>
                                <View style={styles.actionContainer}>
                                    {item.icon}
                                </View>
                                <Text style={styles.actionText}>
                                    {item.name}
                                </Text>
                            </View>
                        )
                    })}
                </View>
                <View style={styles.newsAndEventsContainer}>
                    <View style={styles.headingContainer}>
                        <Text style={styles.headingText}>
                            News and Events
                        </Text>
                        <View style={styles.viewAllContainer}>
                            <Text style={styles.viewAllText}>
                                View all
                            </Text>
                        </View>
                    </View>
                    {
                        [6, 7, 8, 9].map(renderNewsAndEvents)
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen
