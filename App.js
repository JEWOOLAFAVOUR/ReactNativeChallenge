import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import HeaderA from './src/components/Header/HeaderA';
import ImageSliderComponent from './src/components/utils/ImageSliderComponent';
import { images, icons, FONTS, COLORS, SIZES } from './src/constants';

const App = () => {
  const [toogle, setToogle] = useState(false)
  const data = [
    { img: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { img: 'https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { img: 'https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ];
  return (
    <View style={styles.page}>
      {/* FOR HEADER CAN BE REUSABLE */}
      <HeaderA title="Product details" />
      {/* IMAGE SLIDER */}
      <ImageSliderComponent imgData={data} />
      {/* DESCRIPTION AND OTHERS */}
      <View style={{ paddingHorizontal: SIZES.width * 0.04, paddingTop: SIZES.h1 }}>
        <View style={{ marginBottom: SIZES.h4 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: SIZES.base }}>
            <Text style={{ ...FONTS.body4b, fontFamily: "OpenSans-Medium", color: COLORS.chocolate }}>Clean handbag for your simple walk.</Text>
            <TouchableOpacity onPress={() => setToogle(!toogle)}>
              <Image source={toogle ? icons.bookmark : icons.bookmark2} style={{ height: SIZES.h1 * 0.9, width: SIZES.h1 * 0.9 }} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Text style={{ ...FONTS.h3b, color: COLORS.black }}>₦200,000</Text>
            <Text style={{ ...FONTS.body5, color: COLORS.chocolate, marginLeft: SIZES.h5, marginBottom: SIZES.base * 0.5 }}>(234 View)</Text>
          </View>
          <Text style={{ ...FONTS.body6, color: COLORS.chocolate, marginTop: SIZES.base * 0.5 }}>2hrs ago</Text>
        </View>

        {/* BIO */}
        <View>
          <View style={{ height: 1, backgroundColor: COLORS.chocolateBackground }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: SIZES.base * 0.8 }}>
            <Image source={images.image1} style={{ height: SIZES.h1 * 1.4, width: SIZES.h1 * 1.4, borderRadius: 100 }} />
            <View style={{ marginLeft: SIZES.h4 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ ...FONTS.h4, color: COLORS.black }}>@username</Text>
                <Image source={icons.badge} style={{ height: SIZES.h3, width: SIZES.h3, marginLeft: SIZES.base }} />
              </View>
              <Text style={{ ...FONTS.body6, color: COLORS.black }}>Federal University of Technology Minna</Text>
            </View>
          </View>
          <View style={{ height: 1, backgroundColor: COLORS.chocolateBackground }} />
        </View>

        {/* DESCRIPTION */}
        <View style={{ marginTop: SIZES.h4 }}>
          <Text style={{ ...FONTS.body4, color: COLORS.black }}>Description</Text>
          <Text style={{ ...FONTS.body5, color: COLORS.chocolate, marginTop: SIZES.base }}>The BasicWidget 2000 is a product that's, well, basic. If you're looking for exictement, innovation, or any form of satisfaction, you might want to look elsewhere. But if you're into square, gray things with buttons that may or may not function, then the BasiciWidget 2000 could be the underwhelming choice you've been waiting for. Or not</Text>
        </View>
      </View>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: SIZES.base,
    backgroundColor: COLORS.white,

  },
})

