import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./NewsAndEventsCardStyle";
import ShareIcon from '../../assets/svgs/newsShareIcon.svg'
import { useNavigation } from "@react-navigation/native";
const NewsAndEventsCard = ({ item }) => {

    return (
        <TouchableOpacity style={styles.container}>
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
        </TouchableOpacity>
    )
}
export default NewsAndEventsCard;