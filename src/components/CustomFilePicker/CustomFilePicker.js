import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './CustomFilePickerStyle'
import { Colors, Constants } from '../../global'
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant'
import i18n from '../../i18n'
import AddSvg from '../../assets/svgs/imageAdd.svg'
import ImagePickerModal from '../ImagePickerModal/ImagePickerModal'
import CrossSvg from '../../assets/svgs/cross.svg'
import UploadFile from '../../assets/svgs/uploadFile.svg'
import { pick, types } from 'react-native-document-picker'
import AttachmentSvg from '../../assets/svgs/attachment.svg'
const CustomFilePicker = ({
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
    const [files, setFiles] = React.useState([])
    const [selectImageModalVisibility, setSelectImageModalVisibility] = React.useState(false)
    const toggleSelectImageModalVisibility = () => setSelectImageModalVisibility(!selectImageModalVisibility);
    const onSelectImage = (image) => {
        setFiles([...files, image])
    }
    console.log(files);
    function bytesToSize(bytes) {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
        if (bytes === 0) return 'n/a'
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
        if (i === 0) return `${bytes} ${sizes[i]})`
        return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
    }
    const removeImage = (index) => {
        setFiles(files.filter((e, i) => i != index))
    }

    const pickDocument = () => {
        pick({
            allowMultiSelection: false,
            type: [types.pdf, types.images]
        }).then((res) => {
            const allFilesArePdfOrDocx = res.every((file) => file.hasRequestedType)
            console.log(res);
            if (res.length > 0) {
                setFiles([...files, res[0]])
            }

        })
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
                files.length < maxLength
                &&
                <>
                    <TouchableOpacity onPress={pickDocument} style={[styles.inputMainContainer, externalStyle, multiline ? { height: Constants.CHANGE_BY_MOBILE_DPI(90) } : {}, error ? styles.error : {}]}>
                        <UploadFile />
                        <Text style={styles.internalPlaceholder}>
                            {i18n.t("CreateApplication.Uploadimagepdf")}
                        </Text>
                    </TouchableOpacity>
                    {
                        maxLength
                        &&
                        <Text style={styles.lengthText}>
                            {i18n.t("CreateApplication.MaximumFiles", { count: maxLength })}
                        </Text>
                    }
                </>
            }
            {
                files.map((e, i) => {
                    const name = e.uri.split("/")
                    return (
                        <View key={JSON.stringify(e) + i} style={styles.selectedImageContainer}>
                            <AttachmentSvg />
                            <View style={styles.detailsContainer}>
                                <Text style={styles.fileName}>
                                    {e.name}
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

export default CustomFilePicker;
