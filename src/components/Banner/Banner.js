import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { styles } from "./BannerStyle";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "../../global";
import ShareIcon from '../../assets/svgs/shareIcon.svg'
const Banner = () => {
    return (
        <ImageBackground style={styles.image} source={require("../../assets/images/homeBanner.png")}>
            <LinearGradient colors={[Colors.BLACK + "00", Colors.BLACK + "54", Colors.BLACK + "F2"]} style={styles.gradient} />
            <Text style={styles.title}>
                Lorem Ipsum is simply dummy text of the printing.
            </Text>
            <View style={styles.container}>
                <Text style={styles.dateText}>
                    Aug 26, 2024
                </Text>
                <ShareIcon />
            </View>
        </ImageBackground>
    )
}
export default Banner;