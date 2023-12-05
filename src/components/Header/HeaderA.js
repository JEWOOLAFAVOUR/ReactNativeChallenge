import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import icons from '../../constants/icons';

const HeaderA = ({ title }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={{ marginRight: SIZES.h3 }}>
                    <Image source={icons.arrowleft} style={{ height: SIZES.h1 * 0.9, width: SIZES.h1 * 0.9 }} />
                </TouchableOpacity>
                <Text style={{ ...FONTS.h3, fontFamily: "OpenSans-Medium", color: COLORS.black, }}>{title}</Text>
            </View>
            <TouchableOpacity>
                <Image source={icons.verticalmenu} style={{ height: SIZES.h3, width: SIZES.h3 * 1.1 }} />
            </TouchableOpacity>
        </View>
    );
}

export default HeaderA

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.width * 0.04,
        paddingBottom: SIZES.h3,
        paddingTop: SIZES.base,
    },
})