import React from 'react'
import Notification from '../../components/Notification/Notification'

const NotificationHooks = () => {
    const [notification, setNotification] = React.useState(null)
    const [refreshing, setRefreshing] = React.useState(false);

    const renderNotification = ({ item, index }) => {
        return (
            <Notification item={item} index={index} />
        )
    }

    const wait = timeout => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const onRefresh = React.useCallback(() => {
        wait(1000).then(() => setRefreshing(false));
    }, []);

    React.useEffect(() => {
    }, [])
    return {
        refreshing,
        onRefresh,
        notification,
        renderNotification,
    }
}

export { NotificationHooks }
