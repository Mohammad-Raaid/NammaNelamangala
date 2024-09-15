import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import ComplaintCard from '../../components/ComplaintCard/ComplaintCard'
const ComplaintsHooks = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const userData = useSelector(state => state.user.userData);
    const [selectedTab, setSelectedTab] = React.useState('Active')
    const renderComplaints = ({ item }) => {
        return <ComplaintCard item={item} />
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
        renderComplaints
    }
}

export { ComplaintsHooks }
