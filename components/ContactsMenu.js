import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"

const contactsMenuButtons = [
    {
        type: "starred",
        name: "starred",
    },
    {
        type: "contact",
        name: "Sanjula",
        photo: require("../assets/car1.png"),
        
    },
    {
        type: "contact",
        name: "Dasun",
        photo: require("../assets/car2.png"),
        
    },
    {
        type: "contact",
        name: "Wathsala",
        photo: require("../assets/car3.png"),
        
    },
]

function ContactsMenu() {
    return (
        <View style={styles.container}>
            {contactsMenuButtons.map((caontact, index) => 
                <View style={styles.row} key={index}>
                    {caontact.type == "starred" ? (
                        <View style={styles.starredIcon}>
                            <AntDesign name="star" size={30} color="#efefef"/>
                        </View>
                        ) : <Image source={caontact.photo} style={styles.image}/>
                    }
                    <Text style={styles.text}>
                        {caontact.name}
                    </Text>
                </View>
            )}
        </View>
    )
}

export default ContactsMenu

const styles = StyleSheet.create({
    container: {

    },
    starredIcon: {
        backgroundColor: "#333333",
        width: 55,
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,

    },
    text: {
        color: "white",
        paddingLeft: 15,
        fontSize: 18,
    },
    row: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center",
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 20,

    },
})