import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../Auth/Login/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
const PostView = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const handlePostPress = postId => {
    props.navigation.navigate('Description', {postId});
  };

  // fetch api data
  const renderData = ({item}) => {
    console.log(item, 'item');
    return (
      <View style={styles.list_inside}>
        <TouchableOpacity
          onPress={() => {
            handlePostPress(item), console.log('item.item.id', item);
          }}>
          <View style={styles.all_flexvw}>
            <View style={styles.img_brand}>
              <Image
                style={styles.profile_img}
                source={{uri: item.images[0]}}
              />
            </View>
            <View style={styles.about_product}>
              <View style={styles.brand_title}>
                <Text style={[styles.button_text, {color: '#000'}]}>
                  {item.brand}
                </Text>
              </View>
              <View style={styles.categories}>
                <Text style={styles.label_text}>{item.category}</Text>
              </View>
              <View style={styles.description}>
                <Text style={styles.label_text}>{item.description}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  //api call
  const getapidata = () => {
    fetch('https://dummyjson.com/products', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.products);
        let Response = data.products;
        setData(Response);
        console.log('response', Response);
        setIsLoading(false);
      });
  };
  const getMyStringValue = async () => {
    try {
      const Name = await AsyncStorage.getItem('name');
      setName(Name);
      console.log('name', Name);
      const Image = await AsyncStorage.getItem('image');
      console.log('image', image);
      setImage(Image);
    } catch (e) {
      // read error
    }
    console.log('Done.');
  };

  useEffect(() => {
    getapidata();
    getMyStringValue();
  }, [name,image]);
  return (
    <SafeAreaView style={styles.main_container}>
      <View style={styles.main_container}>
        <View style={styles.postsHeader}>
          <View style={styles.profile}>
            <TouchableOpacity
              >
              <Image
                style={styles.profile_img}
                source={{uri : image}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.greetings}>
            <Text style={styles.label_text}>Hi ! {name} </Text>
          </View>
        </View>
        <View style={styles.list_vw}>
          {isLoading ? (
            <View style={styles.loader}>
              <ActivityIndicator size="large" color="#000" />
            </View>
          ) : (
            <FlatList
              data={data}
              renderItem={renderData}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id.toString()}
              ListFooterComponent={<View style={styles.flatlist_bottom}></View>}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PostView;
