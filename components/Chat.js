import React, { useState } from 'react'
import { View, StyleSheet, Text, Alert, SafeAreaView, TouchableOpacity, Modal, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import ChatHeader from './ChatHeader'

function Chat({setModalVisible}) {

    const [messageText, setMessageText] = useState()

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ height: "100%" }}>
                    <ChatHeader setModalVisible={setModalVisible} />
                    <View style={styles.chatMessages}>

                    </View>
                    <View style={styles.chatFormContainer}>
                        <Text style={{ color: "white" }}>Sent to every one</Text>
                        <View style={styles.chatForm}>
                            <TextInput 
                                value={messageText}
                                onChangeText={test => setMessageText(test)}
                                style={styles.textInput}
                                placeholder='Tap here to chat'
                                placeholderTextColor="#595859"
                            />
                            <TouchableOpacity
                                style={{
                                    ...styles.button,
                                    backgroundColor: messageText ? "#0B71EB" : "#595859"
                                }}
                            >
                                <FontAwesome name={"send"} size={18} color="#efefef"/>
                            </TouchableOpacity>
                        </View>
                    </View>
            </SafeAreaView>
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1c1c1c"
    }, 
    chatMessages: {
        flex: 1
    },
    chatFormContainer: {
        borderColor: "#2f2f2f",
        borderTopWidth: 1,
        padding: 12,
    },
    textInput: {
        height: 40,
        color: "#efefef",
        borderColor: "#595859",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 12,
        flex: 1
    },
    button: {
        height: 40,
        width: 40,
        marginTop: 12,
        marginLeft: 12,
        backgroundColor: "#373838",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    chatForm: {
        flexDirection: "row",
    }
})