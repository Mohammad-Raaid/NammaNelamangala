import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './CustomImagePickerStyle'
import { Colors, Constants } from '../../global'
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant'
import i18n from '../../i18n'
import AddSvg from '../../assets/svgs/imageAdd.svg'
import ImagePickerModal from '../ImagePickerModal/ImagePickerModal'
import CrossSvg from '../../assets/svgs/cross.svg'
const CustomImagePicker = ({
    onChangeText,
    externalStyle,
    placeholderText = '',
    multiline = false,
    keyboardType = 'default',
    maxLength = null,
    onFocus = () => { },
    onBlur = () => { },
    editable = true,
    defaultValue = '',
    error = null,
    placeholderStyle = {},
    Prefix = null
}) => {
    const [images, setImages] = React.useState([])
    const [selectImageModalVisibility, setSelectImageModalVisibility] = React.useState(false)
    const toggleSelectImageModalVisibility = () => setSelectImageModalVisibility(!selectImageModalVisibility);
    const onSelectImage = (image) => {
        setImages([...images, image])
    }
    console.log(images);
    function bytesToSize(bytes) {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
        if (bytes === 0) return 'n/a'
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
        if (i === 0) return `${bytes} ${sizes[i]})`
        return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
    }
    const removeImage = (index) => {
        setImages(images.filter((e, i) => i != index))
    }

    return (
        <View style={styles.mainContainer}>
            {
                placeholderText != ""
                &&
                <Text style={[styles.textContainer, placeholderStyle]}>
                    {placeholderText}
                </Text>
            }
            {
                images.length < maxLength
                &&
                <>
                    <TouchableOpacity onPress={toggleSelectImageModalVisibility} style={[styles.inputMainContainer, externalStyle, multiline ? { height: Constants.CHANGE_BY_MOBILE_DPI(90) } : {}, error ? styles.error : {}]}>
                        <AddSvg />
                        <Text style={styles.internalPlaceholder}>
                            {i18n.t("LodgedComplaintSection.InsertImages")}
                        </Text>
                    </TouchableOpacity>
                    {
                        maxLength
                        &&
                        <Text style={styles.lengthText}>
                            {i18n.t("LodgedComplaintSection.MaximumImages", { count: maxLength })}
                        </Text>
                    }
                </>
            }
            {
                images.map((e, i) => {
                    const name = e.path.split("/")
                    return (
                        <View key={JSON.stringify(e) + i} style={styles.selectedImageContainer}>
                            <Image source={{ uri: e.path }} style={styles.selectedImage} />
                            <View style={styles.detailsContainer}>
                                <Text style={styles.fileName}>
                                    {name[name.length - 1]}
                                </Text>
                                <Text style={styles.sizeText}>
                                    {bytesToSize(e.size)}
                                </Text>
                            </View>
                            <TouchableOpacity onPress={() => removeImage(i)} style={styles.crossContainer}>
                                <CrossSvg />
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
            {
                error
                &&
                <Text style={styles.errorText}>
                    {error.errorMessage}
                </Text>
            }
            <ImagePickerModal visibility={selectImageModalVisibility} toggleVisibility={toggleSelectImageModalVisibility} setState={onSelectImage} />
        </View>
    )
}

export default CustomImagePicker;
