import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import HeaderA from './src/components/Header/HeaderA';
import ImageSliderComponent from './src/components/utils/ImageSliderComponent';
import { images, icons, FONTS, COLORS, SIZES } from './src/constants';
import { productDetails, sliderData } from './src/components/utils/productDetailsData';

const App = () => {
  const [toogle, setToogle] = useState(false)
  const productData = productDetails;
  return (
    <View style={styles.page}>
      {/* FOR HEADER CAN BE REUSABLE */}
      <HeaderA title="Product details" />
      {/* IMAGE SLIDER */}
      <ScrollView>
        <ImageSliderComponent imgData={sliderData} />
        {/* DESCRIPTION AND OTHERS */}
        <View style={{ paddingHorizontal: SIZES.width * 0.04, paddingTop: SIZES.h1 }}>
          <View style={{ marginBottom: SIZES.h4 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: SIZES.base }}>
              <Text style={{ ...FONTS.body4b, fontFamily: "OpenSans-Medium", color: COLORS.chocolate }}>{productData?.title}</Text>
              <TouchableOpacity onPress={() => setToogle(!toogle)}>
                <Image source={toogle ? icons.bookmark : icons.bookmark2} style={{ height: SIZES.h1 * 0.9, width: SIZES.h1 * 0.9 }} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <Text style={{ ...FONTS.h3b, color: COLORS.black }}>₦{productData?.price}</Text>
              <Text style={{ ...FONTS.body5, color: COLORS.chocolate, marginLeft: SIZES.h5, marginBottom: SIZES.base * 0.5 }}>(234 View)</Text>
            </View>
            <Text style={{ ...FONTS.body6, color: COLORS.chocolate, marginTop: SIZES.base * 0.5 }}>{productData?.createdAt}</Text>
          </View>

          {/* BIO */}
          <View>
            <View style={{ height: 1, backgroundColor: COLORS.chocolateBackground }} />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: SIZES.base * 0.8 }}>
              <Image source={productData?.seller?.avatar || images.image1} style={{ height: SIZES.h1 * 1.4, width: SIZES.h1 * 1.4, borderRadius: 100 }} />
              <View style={{ marginLeft: SIZES.h4 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ ...FONTS.h4, color: COLORS.black }}>@{productData?.seller?.username}</Text>
                  <Image source={icons.badge} style={{ height: SIZES.h3, width: SIZES.h3, marginLeft: SIZES.base }} />
                </View>
                <Text style={{ ...FONTS.body6, color: COLORS.black }}>{productData?.seller?.location}</Text>
              </View>
            </View>
            <View style={{ height: 1, backgroundColor: COLORS.chocolateBackground }} />
          </View>

          {/* DESCRIPTION */}
          <View style={{ marginTop: SIZES.h4 }}>
            <Text style={{ ...FONTS.body4, color: COLORS.black }}>Description</Text>
            <Text style={{ ...FONTS.body5, color: COLORS.chocolate, marginTop: SIZES.base }}>{productData?.description}</Text>
          </View>
        </View>
      </ScrollView>
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

