import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'


const BoxFoods = ({nama, img, category, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <ImageBackground source={img} style={styles.img}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.title}>{nama}</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>{category}</Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}
export default BoxFoods

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'rgba(0,0,0, 0.5)',
        justifyContent: 'space-between',
        padding: 20
    },
    img: {
        height: 350,
        width: 200,
        marginRight: 10,
        borderRadius: 20,
        overflow: 'hidden',
        opacity: 0.8
    },
    title: {
        fontFamily: fonts.primary[600],
        fontSize: 16,
        color:  colors.white
    },
})
