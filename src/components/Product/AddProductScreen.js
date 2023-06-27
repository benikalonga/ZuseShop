import React, {useState} from 'react';
import colors from '../../constants/colors';
import images from '../../constants/images';
import usePost from '../../hook/usePost';
const {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  ActivityIndicator,
  Alert,
  ScrollView,
} = require('react-native');
import * as RootNavigation from '../../RootNavigation';
import {styles} from './styles';

/**
 * The AddProductScreen (CreationProductScreen)
 * After populating all the field,
 * the user will be asked to either Add More, or to go back to the HomeScreen
 */
const AddProductScreen = ({navigation, route}) => {
  const [pTitle, setPTitle] = useState('');
  const [pBrand, setPBrand] = useState('');
  const [pDescription, setPDescription] = useState('');
  const [pCategory, setPCategory] = useState('');
  const [pPrice, setPPrice] = useState('');
  const [pQuantity, setPQuantity] = useState('');

  const [pError, setPError] = useState('');

  const {data, isLoading, setIsLoading, error, rePost: addProduct} = usePost();

  // First check if all the field are filled up, show an error if not
  // Create a product object (some fields are simulated)
  // Add the product by using a Post Method to the API, and listen to respon
  //if success, the product is automatically added to the list and shown on the HomeScreen
  const handleAddProduct = () => {
    if (!pTitle) {
      setPError('Enter a valid product name');
      return;
    }

    if (!pBrand) {
      setPError('Enter a valid brand');
      return;
    }
    if (!pDescription) {
      setPError('Enter a valid description');
      return;
    }
    if (!pCategory) {
      setPError('Enter a valid category');
      return;
    }
    if (!pPrice) {
      setPError('Enter a valid price');
      return;
    }
    if (!pQuantity) {
      setPError('Enter a valid quantity');
      return;
    }
    setPError('');

    const product = {
      id: 1,
      title: pTitle,
      description: pDescription,
      price: Number(pPrice),
      rating: 0,
      stock: Number(pQuantity),
      brand: pBrand,
      category: pCategory,
      thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      images: ['https://i.dummyjson.com/data/products/1/thumbnail.jpg'],
    };

    addProduct(product, {}, resp => {
      if (resp) {
        RootNavigation.product.set(curList => {
          const products = [product, ...curList.products];
          const newData = {...curList, products};

          console.log(products);

          return newData;
        });

        setPTitle('');
        setPDescription('');
        setPBrand('');
        setPCategory('');
        setPPrice('');
        setPQuantity('');

        Alert.alert(
          'Product added',
          'You can add more, or go back to the main list',
          [
            {
              text: 'Add more',
              onPress: () => {},
            },
            {
              text: 'Go back',
              onPress: () => {
                navigation.goBack();
              },
            },
          ],
        );
      } else {
        Alert.alert('Oups !!!', 'Something went wrong... ', [
          {text: 'Close', onPress: () => console.log('OK Pressed')},
        ]);
      }
    });
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <KeyboardAvoidingView enabled>
          <View style={styles.content}>
            <View style={styles.imageContainer}>
              <Image style={styles.avatar} source={images.logo} />
            </View>
            <Text style={styles.titleText}>Add a product</Text>
            <Text>You can add a new product and see the updated list</Text>
            {pError && <Text style={styles.inputError}>{pError}</Text>}
            <TextInput
              style={styles.inputStyle}
              value={pTitle}
              onChangeText={titleText => setPTitle(titleText)}
              placeholder="Enter a name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="words"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              color={colors.black}
            />
            <TextInput
              style={styles.inputStyle}
              value={pBrand}
              onChangeText={t => setPBrand(t)}
              placeholder="Enter a brand"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="words"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              color={colors.black}
            />

            <TextInput
              style={styles.inputStyle}
              value={pDescription}
              height={100}
              alignItems="flex-end"
              justifyContent=""
              onChangeText={t => setPDescription(t)}
              placeholder="Enter a description"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="words"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              color={colors.black}
            />

            <TextInput
              style={styles.inputStyle}
              value={pCategory}
              onChangeText={t => setPCategory(t)}
              placeholder="Enter the category"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="words"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              color={colors.black}
            />
            <View flexDirection="row" gap={5}>
              <TextInput
                style={styles.inputStyle}
                width="50%"
                value={pPrice}
                onChangeText={t => setPPrice(t)}
                placeholder="Enter the price"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="words"
                returnKeyType="next"
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
                color={colors.black}
              />
              <TextInput
                style={styles.inputStyle}
                value={pQuantity}
                width="50%"
                onChangeText={t => setPQuantity(t)}
                placeholder="Enter the quantity"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="words"
                returnKeyType="next"
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
                color={colors.black}
              />
            </View>

            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.btnTextContainer}
                onPress={handleAddProduct}>
                <Text style={styles.btnText}>Add new product</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnTextContainerOutline}
                onPress={handleCancel}>
                <Text style={styles.btnTextOutline}>Cancel</Text>
              </TouchableOpacity>
              {isLoading && <ActivityIndicator size="large" />}
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default AddProductScreen;
