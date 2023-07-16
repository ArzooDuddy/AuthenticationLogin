import {SafeAreaView, Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import Textinput from '../../../Components/TextInput';
import Button from '../../../Components/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORE_DATA } from '../../../Libraries/Redux/Constants';
// import { useDispatch } from 'react-redux';
const LoginScreen = props => {
  // const dispatch = useDispatch();
  // const storeData =(item) => {
  //   dispatch(STORE_DATA(item))
  // }
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const getLoginData = () => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: 'kminchelle',
        password: '0lelplR',
        // expiresInMins: 60, // optional
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        // Set the console data to state variables
        setName(data.name)
      })
      .catch(error => {
        console.error(error);
      });
  };
  const Submit = () => {
    if (name === 'kminchelle' || password === '0lelplR') {
      props.navigation.navigate('PostView');
    } else {
      alert('Invalid credentials');
    }
  };
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('name', name);
      console.log(name,'name')
      await AsyncStorage.setItem('token', token);
      console.log(token,'token')
    } catch (e) {
      // saving error
      console.log(e)
    }
  };
  return (
    <SafeAreaView style={styles.main_container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        style={{
          flex: 1,
        }}
        enableOnAndroid={true}>
        <View style={styles.main_container}>
          <View style={styles.header}>
            <Text style={styles.title_text}>Login</Text>
          </View>
          <View style={styles.body}>
            <Textinput
              Title={'Name :'}
              label={'Name'}
              value={name}
              placeholder={'Enter your Name'}
              onChangeText={text => setName(text)}
            />
            {/* <Textinput
              Title={'Email :'}
              label={'Email'}
              value={email}
              placeholder={'Enter your email'}
              onChangeText={text => setEmail(text)}
            /> */}
            <Textinput
              Title={'Password :'}
              label={'Password'}
              value={password}
              placeholder={'Enter Password'}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.bottom}>
            <Button
              Login={'Login'}
              onpress={() => {
                Submit();
                getLoginData();
                storeData()
                // props.navigation.navigate('PostView');
              }}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
