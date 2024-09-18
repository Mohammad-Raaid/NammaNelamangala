import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./GalleryCardStyle";
import { Constants, ScreenNames } from "../../global";
import ShareIcon from '../../assets/svgs/shareIcon.svg'
import { useNavigation } from "@react-navigation/native";
const GalleryCard = ({ item }) => {
    const navigation = useNavigation()
    let images = [
        require('../../assets/images/gallarySampleImage1.png'),
        require('../../assets/images/gallarySampleImage2.png'),
        require('../../assets/images/gallarySampleImage1.png'),
        require('../../assets/images/gallarySampleImage2.png'),
    ]
    const goToGalleryDetails = () => {
        navigation.navigate(ScreenNames.GALLERY_DETAILS_SCREEN)
    }
    return (
        <TouchableOpacity onPress={goToGalleryDetails} style={styles.container}>
            <Text style={styles.title}>
                Lorem Ipsum is simply dummy text of printing.
            </Text>
            <Text style={styles.description} numberOfLines={2}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. LLorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </Text>
            <View style={styles.galleryImages}>
                <Image source={images[0]} style={styles.largeImage} />
                <View>
                    <Image source={images[1]} style={styles.smallImage} />
                    <View style={styles.thirdImage}>
                        <View style={styles.extraImageLayer}>
                            <Text style={styles.countText}>
                                +{images.length - 3} more
                            </Text>
                        </View>
                        <Image source={images[2]} style={styles.smallImage} />
                    </View>
                </View>
            </View>
            <View style={styles.shareIcon}>
                <Text style={styles.dateText}>
                    Aug 23, 2024
                </Text>
                <ShareIcon height={Constants.CHANGE_BY_MOBILE_DPI(22)} width={Constants.CHANGE_BY_MOBILE_DPI(22)} />
            </View>
        </TouchableOpacity>
    )
}
export default GalleryCard;