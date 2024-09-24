import React, { useState } from 'react';
import { View, PanResponder, Animated, TouchableOpacity, Text } from 'react-native';
import { styles } from './NotificationStyle'
import { useNavigation } from '@react-navigation/native'
import DeleteSvg from '../../assets/svgs/DeleteSvg.svg'
import { useDispatch } from 'react-redux'
import { Constants, Fonts } from '../../global';
const Notification = ({ item, index }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [rowTranslateX, setRowTranslateX] = useState(new Animated.Value(0));
    const [buttonOpacity, setButtonOpacity] = useState(new Animated.Value(0));
    const [buttonVisibility, setButtonVisibility] = useState(false);

    const toggleButtonVisibility = (visible) => {
        setButtonVisibility(visible);
    };
    const panResponder = useState(
        PanResponder.create({
            onMoveShouldSetPanResponder: (_, { dx, dy }) => Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10,
            onPanResponderMove: (_, { dx }) => {
                rowTranslateX.setValue(dx);
                buttonOpacity.setValue(dx < -50 ? 1 : 0);
                toggleButtonVisibility(dx < -50);
            },
            onPanResponderRelease: (_, { dx }) => {
                if (dx < -50) {
                    Animated.timing(rowTranslateX, {
                        toValue: -140,
                        duration: 200,
                        useNativeDriver: true,
                    }).start((_res) => {
                        toggleButtonVisibility(true);
                    });
                } else {
                    Animated.timing(rowTranslateX, {
                        toValue: 0,
                        duration: 200,
                        useNativeDriver: true,
                    }).start((_res) => {
                        toggleButtonVisibility(false);
                    });
                }
            },
        })
    )[0];
    const deleteNotification = async () => {
        try {
            setButtonVisibility(false);
            Animated.timing(rowTranslateX, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }).start();
        } catch (error) {
            console.log("getNotificationByUserId_error", error);
        }
    }
    const handleDelete = () => {
    };
    return (
        <View style={styles.lisitingMainContainer}>
            <View style={styles.flexAlignmentContainer}>

                <Animated.View style={[styles.flexDirectionContainer, {
                    transform: [
                        {
                            translateX: rowTranslateX.interpolate({
                                inputRange: [-500, 0],
                                outputRange: [-200, 0],
                                extrapolate: 'clamp',
                            }),
                        },
                    ],
                },
                ]}
                    {...panResponder.panHandlers}
                >
                    <View style={styles.flexContainer}>
                        <Text style={{ ...styles.notificationTextStyle }}>Title</Text>
                        <Text style={{ ...styles.notificationTextStyle, fontSize: Constants.CHANGE_BY_MOBILE_DPI(12), fontFamily: Fonts.REGULAR }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    </View>
                </Animated.View>
                {
                    buttonVisibility &&
                    <View style={styles.addFriendContainer}>
                        <TouchableOpacity hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }} onPress={handleDelete} style={styles.DeleteContainer}>
                            <DeleteSvg />
                        </TouchableOpacity>
                    </View>
                }
            </View >
            {< View style={styles.sectionLine} ></View >}
        </View >
    )
}

export default Notification
