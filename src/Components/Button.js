import {Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../screens/Auth/Login/Styles';
const Button = (props) => {
  return (
    <View style={styles.button_vw}>
      <TouchableOpacity onPress={props.onpress}>
        <View style={styles.button}>
          <Text style={styles.button_text}>{props.Login}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
