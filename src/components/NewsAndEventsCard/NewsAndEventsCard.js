import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { styles } from "./NewsAndEventsCardStyle";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "../../global";
import ShareIcon from '../../assets/svgs/newsShareIcon.svg'
const NewsAndEventsCard = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/newImage.png')} style={styles.image} />
            <View style={styles.detailsConatiner}>
                <Text style={styles.title}>
                    Lorem Ipsum is simply dummy
                    text of the printing.
                </Text>
                <Text style={styles.dateText}>
                    Aug 23, 2024
                </Text>
                <View style={styles.shareIcon}>
                    <ShareIcon />
                </View>
            </View>
        </View>
    )
}
export default NewsAndEventsCard;