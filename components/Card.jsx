import { StyleSheet, View, Text, Platform, Image } from 'react-native'
import React from 'react'

export default function Card(props) {
    return (
        <View style={styles.card}>
            <View style={styles.imageWrapper}>
                <Image
                    source={{
                        uri: 'https://driveteslacanada.ca/wp-content/uploads/2022/02/polestar-ad-678x381.jpg',
                    }}
                    style={styles.image}
                />
            </View>
            <View style={styles.titleWrapper}>
                <Text>Dummy Title</Text>
            </View>
            <View style={styles.textWrapper}>
                <Text>Super Silly dummy description describe the thing</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fbfbfc',
        height: 300,
        margin: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 20 },
        shadowRadius: 20,
        elevation: 30

    },
    imageWrapper: {
        width: '100%',
        height: '60%',

    },
    image: {
        width: '100%',
        height: '100%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    titleWrapper: {
        height: '10%',
        paddingHorizontal: 15,

    },
    textWrapper: {
        height: '30%',
        paddingHorizontal: 15,

    }

})