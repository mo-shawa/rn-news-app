import { StyleSheet, View, Text, Platform } from 'react-native'
import React from 'react'

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Header</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Platform.OS === "ios" ? '#fbfbfc' : "#4a67a2",
        padding: 15,
    },
    title: {
        fontSize: 25,
        color: Platform.OS === "ios" ? "#42403f" : '#fbfbfc'
    }
})