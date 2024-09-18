import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './GalleryDetailsStyle'
import { GalleryDetailsHooks } from './GalleryDetailsHooks'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { Colors, Constants } from '../../global'
import { useSelector } from 'react-redux'
import MenuHeader from '../../components/MenuHeader/MenuHeader'
import BackIcon from '../../assets/svgs/BackIcon.svg'
import ShareIcon from '../../assets/svgs/shareIcon.svg'
import Carousel from 'react-native-reanimated-carousel'
const GalleryDetailsScreen = () => {
    const {
        setIndex,
        renderBanner,
        renderIndicators,
        goBack
    } = GalleryDetailsHooks();
    const userData = useSelector(state => state.user.userData)
    return (
        <View style={styles.mainContainer}>
            <FocusAwareStatusBar isTopSpace barColor={Colors.WHITE} />
            <View>
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
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={goBack}>
                        <BackIcon height={Constants.CHANGE_BY_MOBILE_DPI(24)} width={Constants.CHANGE_BY_MOBILE_DPI(24)} />
                    </TouchableOpacity>
                    <View style={styles.headerContainer}>
                        <Text style={styles.heading}>
                            Bengaluru Urban
                        </Text>
                        <View style={styles.dot} />
                        <Text style={styles.heading}>
                            Aug 23 2024
                        </Text>
                    </View>
                    <ShareIcon />
                </View>
                <Text style={styles.title}>
                    Lorem Ipsum is simply dummy text of
                    printing.
                </Text>
                <Text style={styles.description}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. LLorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </Text>
            </View>
        </View>
    )
}

export default GalleryDetailsScreen
