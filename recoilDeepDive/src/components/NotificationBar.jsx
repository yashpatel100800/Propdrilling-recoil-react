import axios from 'axios';
import { useState,useEffect } from 'react'
import { useRecoilState } from 'recoil';
import notificationsState from '../store/atoms/notifications';

export default function NotificationBar() {
    const [home, setHome] = useState("")
    const [network, setNetwork] = useState("")
    const [message, setMessage] = useState("")
    const [profile, setProfile] = useState("")
    const [count, setCount] = useState(0)
    const [notifications, setNotifications] = useRecoilState(notificationsState)
    

    setTimeout(() => {
        setCount(count + 1)
    }, 5000)

    const arr = []
    useEffect(() => {
        axios.get('http://localhost:3000/api/api1')
            .then(response => {
                setHome(notifications.home + " + " + response.data.home)
                setNetwork(notifications.network + " + " + response.data.network)
                setMessage(notifications.message + " + " + response.data.message)
                setProfile(notifications.profile + " + " + response.data.profile)
                setNotifications({
                    home: notifications.home +response.data.home,
                    network: notifications.network + response.data.network,
                    message: notifications.message + response.data.message,
                    profile: notifications.profile + response.data.profile,
            })
    })},[count])

    return (
        <div>
            home : {home} = {notifications.home}<br/>
            network: {network} = {notifications.network}<br/>
            messages: {message} = {notifications.message}<br/>
            profile: {profile} = {notifications.profile}<br/>
        </div>
    )
}