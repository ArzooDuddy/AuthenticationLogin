import {SafeAreaView, Image, Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from '../Auth/Login/Styles';
const Description = ({route}) => {
  var {postId} = route.params;
  console.log('postid : ', postId);
  const [post, setPost] = useState(null);
  return (
    <SafeAreaView style={styles.main_container}>
      <View style={styles.main_container}>
        <View style={styles.main_container}>
            <View style={styles.all_imgwrap}>
              <View style={styles.images}>
                <Image
                  style={styles.profile_img}
                  source={{uri: postId.images[0]}}
                />
              </View>
              <View style={styles.images}>
                <Image
                  style={styles.profile_img}
                  source={{uri: postId.images[1]}}
                />
              </View>
              <View style={styles.images}>
                <Image
                  style={styles.profile_img}
                  source={{uri: postId.images[2]}}
                />
              </View>
            </View>
            <View style={styles.des_body}>
            <View style={styles.title}>
              <Text style={styles.medium_text}>Brand : {postId.brand}</Text>
            </View>
            <View style={styles.category}>
              <Text style={styles.label_text}>Category : {postId.category}</Text>
            </View>
            <View style={styles.des_vw}>
              <Text style={styles.label_text}>Description : {'\n'} {'\n'}{postId.description}</Text>
            </View>
            <View style={styles.category}>
              <Text style={styles.label_text}>Price : {postId.Price}</Text>
            </View>
            <View style={styles.category}>
              <Text style={styles.label_text}>Rating : {postId.rating}</Text>
            </View>
            <View style={styles.category}>
              <Text style={styles.label_text}>Title : {postId.title}</Text>
            </View>
            <View style={styles.category}>
              <Text style={styles.label_text}>No. of Stock Available : {postId.stock}</Text>
            </View>
            </View>
          </View>
        </View>
    </SafeAreaView>
  );
};

export default Description;
