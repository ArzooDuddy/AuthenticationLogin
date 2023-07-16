import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import styles from '../screens/Auth/Login/Styles';
const Textinput = (props) => {
  return (
    <View style={styles.textinput_vw}>
      <View style={styles.label}>
        <Text style={styles.label_text}>{props.Title}</Text>
      </View>
      <View style={styles.textinput_style}>
        <TextInput
          label={props.label}
          value={props.value}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          secureTextEntry={props.secureTextEntry}
          style={styles.textinput}
          mode='outlined'
        />
      </View>
    </View>
  );
};

export default Textinput;