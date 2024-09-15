import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import ComplaintCard from '../../components/ComplaintCard/ComplaintCard'
import { ScreenNames } from '../../global'
const ComplaintsHooks = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const userData = useSelector(state => state.user.userData);
    const [selectedTab, setSelectedTab] = React.useState('Active')
    const renderComplaints = ({ item }) => {
        return <ComplaintCard item={item} />
    }
    const goToCreateComplaint = () => {
        navigation.navigate(ScreenNames.CREATE_COMPLAINTS_SCREEN)
    }
    useFocusEffect(
        React.useCallback(() => {
            return () => {
            };
        }, [])
    );
    return {
        selectedTab,
        setSelectedTab,
        renderComplaints,
        goToCreateComplaint
    }
}

export { ComplaintsHooks }
