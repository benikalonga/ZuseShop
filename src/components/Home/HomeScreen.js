/* eslint-disable prettier/prettier */

import React, {useState, useCallback} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  FlatList,
  Text,
  View,
  Dimensions,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import useFetch from '../../hook/useFetch';
import colors from '../../constants/colors';
import {ErrorView} from '../error/ErrorView';
import {Rating} from 'react-native-ratings';
import * as RootNavigation from '../../RootNavigation';

const {width} = Dimensions.get('window');

const ProductItem = ({product, navigation, handleClick}) => {
  const [color, setColor] = useState('#ddd');

  return (
    <TouchableOpacity style={styles.item} onPress={() => handleClick(product)}>
      <View style={styles.imageContainer} backgroundColor={color}>
        <Image style={styles.image} source={{uri: product.images[0]}} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{product.title}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.text}>R{product.price}</Text>
          <Rating
            ratingCount={5}
            imageSize={14}
            startingValue={product.rating}
            readonly
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ProductList = ({
  data,
  navigation,
  refreshing,
  onRefresh,
  handleClick,
}) => {
  return (
    <FlatList
      data={data}
      numColumns={2}
      renderItem={({item}) => (
        <ProductItem
          product={item}
          navigation={navigation}
          handleClick={handleClick}
        />
      )}
      style={{paddingVertical: 10}}
      keyExtractor={(item, i) => item.id + i.toString()}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

const HomeScreen = ({navigation, route}) => {
  const {data, setData, isLoading, error, reFetch} = useFetch(
    '?select=id,title,price,images,rating',
  );

  RootNavigation.product.set = setData;

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    reFetch();
  });
  const handleAddProduct = () => {
    if (RootNavigation.user.user?.isLoggedIn)
      RootNavigation.navigate('AddProductScreen');
    else RootNavigation.navigate('LoginScreen');
  };
  const handleClick = productClicked => {
    if (RootNavigation.user.user?.isLoggedIn)
      RootNavigation.navigate('ProductDetailScreen', productClicked);
    else RootNavigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" />}
      {error && <ErrorView onRefresh={reFetch} />}
      {data && (
        <ProductList
          data={data.products}
          navigation={navigation}
          refreshing={refreshing}
          onRefresh={onRefresh}
          handleClick={handleClick}
        />
      )}
      <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  item: {
    width: width / 2 - 24,
    marginLeft: 16,
    marginBottom: 16,
    backgroundColor: colors.white,
  },
  imageContainer: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 14,
  },
  textContainer: {
    marginVertical: 4,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 5,
  },
  addButton: {
    width: 56,
    height: 56,
    borderRadius: 100,
    backgroundColor: colors.primary,
    position: 'absolute',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.3,
    bottom: 16,
    right: 16,
  },
  addText: {
    fontSize: 32,
    color: colors.white,
  },
});
