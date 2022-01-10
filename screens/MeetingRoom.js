import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Alert, SafeAreaView, TouchableOpacity } from 'react-native'
import StartMeeting from '../components/StartMeeting'
import { io } from "socket.io-client"
import { Camera } from 'expo-camera'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

function MeetingRoom() {

    const [name, setName] = useState()
    const [roomId, setRoomId] = useState()
    const [activeUsers, setActiveUsers] = useState([])
    const [startCamera, setStartCamera] = useState(false)

    // useEffect(() => {
    //     return setActiveUsers([])
    //   }, []); 

    const menuIcons = [
        {
            id: 1,
            name: "microphone",
            title: "Mute",
            customColor: "#efefef",
        },
        {
            id: 2,
            name: "video-camera",
            title: "Stop Video",
            customColor: "#efefef",
        },
        {
            id: 3,
            name: "upload",
            title: "Share Content",
            customColor: "#efefef",
        },
        {
            id: 4,
            name: "group",
            title: "Participants",
            customColor: "#efefef",
        },
    ]

    const socket = io('http://bf62-112-135-82-115.ngrok.io')

    socket.on("connect", () => {
        console.log(socket.connected); // true
        console.log(socket.id); 
    });

    socket.on('all-users', users => {
        console.log("Active users", users)
        setActiveUsers(users)
    })

    const __startCamera = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync()
        if(status == 'granted') {
            setStartCamera(true)
        } else {
            Alert.alert('Access denied')
        }
    }
    const joinRoom = () => {
        __startCamera()
        socket.emit("join-room", { roomId, userName: name})
    }

    return (
        <View style={styles.container}>
            {startCamera ? (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.activeUsersContainer}>
                    <View style={styles.cameraContainer}>
                        <Camera type='front' style={{ 
                            width: activeUsers.length == 0 ?  "100%" : 200, 
                            height:activeUsers.length == 0 ?  600 : 200 
                            }}>
                        </Camera>
                        {activeUsers.map((user, index) => (
                            <View style={styles.activeUserContainer} key={index}>
                                <Text style={{ color: "white" }}>{user?.userName}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={styles.menu}>
                        {menuIcons.map((icon, index) => (
                            <TouchableOpacity style={styles.tile} key={index}>
                                <FontAwesome name={icon.name} size={24} color="#efefef" />
                                <Text style={styles.textTile}>{icon.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>    
            </SafeAreaView>
            )
            : <StartMeeting name={name} setName={setName} roomId={roomId} setRoomId={setRoomId} joinRoom={joinRoom}/>}
        </View>
    )
}

export default MeetingRoom

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#1c1c1c",
        flex: 1,
    },
    menu: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    textTile: {
        color: "white",
        marginTop: 1,
    },
    tile: {
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        marginTop: 10
    },
    activeUserContainer: {
        borderColor: "gray",
        borderWidth: 1,
        width: 200,
        height: 200,
        justifyContent: "center",
        alignItems: "center"
    },
    cameraContainer: {
        backgroundColor: "black",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center"
    },
    activeUsersContainer: {
        flex: 1,
        justifyContent: "center"
    },
})