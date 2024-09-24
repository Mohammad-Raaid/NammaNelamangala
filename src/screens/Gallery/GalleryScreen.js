import { FlatList, Text, View } from 'react-native'
import React from 'react'
import { styles } from './GalleryStyle'
import { GalleryHooks } from './GalleryHooks'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { Colors } from '../../global'
import { useSelector } from 'react-redux'
import MenuHeader from '../../components/MenuHeader/MenuHeader'
import i18n from '../../i18n'
const GalleryScreen = () => {
    const {
        renderGallery
    } = GalleryHooks();
    const userData = useSelector(state => state.user.userData)
    return (
        <View style={styles.mainContainer}>
            <FocusAwareStatusBar isTopSpace barColor={Colors.WHITE} />
            <MenuHeader />
            <Text style={styles.heading}>
                {i18n.t("GallerySection.Gallery")}
            </Text>
            <FlatList
                data={[1, 2, 3, 4]}
                renderItem={renderGallery}
                keyExtractor={(item) => JSON.stringify(item)}
            />
        </View>
    )
}

export default GalleryScreen
