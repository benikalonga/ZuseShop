import React, {useState} from 'react';
import colors from '../../constants/colors';
import images from '../../constants/images';
import useFetch from '../../hook/useFetch';
import {Rating} from 'react-native-ratings';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

const ProductDetailScreen = ({navigation, route}) => {
  const product = route.params;
  const [imageUri, setImageUri] = useState(product.images[0]);

  const {data, isLoading, error} = useFetch(`/${product.id}`);

  return (
    <View style={styles.container}>
      {/* Button Back */}
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => navigation.goBack()}>
        <Image
          source={images.back}
          resizeMode="cover"
          style={styles.btnImg(24)}
        />
      </TouchableOpacity>
      {/* Main Container */}
      <View style={styles.bottomContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: imageUri}} />
        </View>
        <View>
          <ImageProductList
            images={product.images}
            onClickImage={setImageUri}
          />
          <View paddingLeft={12} paddingRight={12}>
            <Text>{data.category}</Text>
            <View style={styles.textContainer}>
              <Text style={styles.textName}>{product.title}</Text>
              <View style={styles.ratingContainer}>
                <Text>{data.brand}</Text>
                <Text style={styles.textPrice}>R{data.price}</Text>
                <Rating
                  ratingCount={5}
                  imageSize={14}
                  startingValue={data.rating}
                  readonly
                  ratingBackgroundColor={colors.grey}
                  backgroundColor={colors.grey}
                />
                <View flexDirection="row" gap={5}>
                  <Text>In stock:</Text>
                  <Text style={styles.textPrice}>{data.stock}</Text>
                </View>
              </View>
            </View>
            <Text color={colors.black}>{data.description}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const ImageProductList = ({images, onClickImage}) => {
  return (
    <FlatList
      data={images}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            style={styles.btnList}
            onPress={() => {
              onClickImage(item);
            }}>
            <Image style={styles.imageList} source={{uri: item}} />
          </TouchableOpacity>
        );
      }}
      keyExtractor={item => item}
      contentContainerStyle={{columnGap: 12}}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      horizontal
    />
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  bottomContainer: {
    backgroundColor: colors.grey,
    flex: 1,
  },
  textContainer: {
    flexDirection: 'row',
    backgroundColor: colors.grey,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
  },
  btnContainer: {
    width: 36,
    height: 36,
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 999,
  },
  btnImg: dimension => ({
    width: dimension,
    height: dimension,
  }),
  imageContainer: {
    width: '100%',
    height: '180',
    backgroundColor: '#f0f',
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 360,
    resizeMode: 'cover',
  },
  btnList: {
    height: 90,
    marginTop: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  imageList: {
    width: 90,
    height: 90,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  ratingContainer: {
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    gap: 5,
  },
  textName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.primary,
  },

  textPrice: {
    fontWeight: 'bold',
    fontSize: 14,
    color: colors.black,
  },
});
