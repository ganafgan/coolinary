import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const BoxRating = ({rating, ulasan, price, title1, title2, title3}) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.menuUp}>
                <Text style={styles.textUp}>{title1}</Text>
                <Text style={styles.textUp}>{title2}</Text>
                <Text style={styles.textUp}>{title3}</Text>
            </View>
            <View style={styles.menuDown}>
                <Text style={styles.textDown}>{rating} </Text>
                <Text style={styles.textDown}> {ulasan} </Text>
                <Text style={styles.textDown}> {price} </Text>
            </View>
        </View>
    )
}

export default BoxRating

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        padding: 10
    },
    menuUp: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    menuDown: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingLeft: 7
    },
    textUp: {
        fontSize: 14,
        fontFamily: fonts.primary[600],
        color: colors.black
    },
    textDown: {
        fontSize: 14,
        fontFamily: fonts.primary[600],
        color: colors.white
    }
})
