import React from 'react'
import { useFocusEffect } from '@react-navigation/native'
const ApplicationDetailHooks = () => {

    const [showCompleteDetails, setShowCompleteDetails] = React.useState(false)
    useFocusEffect(
        React.useCallback(() => {
            return () => {
            };
        }, [])
    );
    return {
        showCompleteDetails,
        setShowCompleteDetails
    }
}

export { ApplicationDetailHooks }
