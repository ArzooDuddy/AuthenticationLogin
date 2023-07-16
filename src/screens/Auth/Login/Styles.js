import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../../Styles/Color';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: height * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title_text: {
    color: Color.black,
    fontSize: height / 20,
  },
  body: {
    height: height * 0.5,
  },
  des_body:{
    height: height * 0.6,
  },
  textinput_vw: {
    height: height * 0.15,
    width: width,
    justifyContent: 'center',
  },
  textinput_style: {
    height: height * 0.08,
    width: width * 0.8,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  label: {
    height: height * 0.03,
    width: width * 0.8,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  label_text: {
    fontSize: height / 60,
    color: Color.black,
  },
  textinput: {
    backgroundColor: '#fff',
  },
  bottom: {
    height: height * 0.35,
  },
  button_vw: {
    height: height * 0.1,
    width: width,
    justifyContent: 'center',
  },
  button: {
    height: height * 0.075,
    width: width * 0.8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.black,
    borderRadius: 10,
  },
  button_text: {
    fontSize: height / 45,
    color: Color.white,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  postsHeader: {
    height: height * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    height: height * 0.1,
    width: width * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile_img: {
    height: 80,
    width: 80,
  },
  greetings: {
    height: height * 0.07,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list_vw: {
    height: height * 0.8,
  },
  list_inside: {
    height: height * 0.25,
    width: width,
    justifyContent: 'center',
  },
  all_flexvw: {
    height: height * 0.23,
    width: width * 0.9,
    flexDirection: 'row',
    alignSelf: 'center',
    shadowColor: '#345678',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img_brand: {
    height: height * 0.14,
    width: width * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brand_title: {
    height: height * 0.05,
    width: width * 0.6,
  },
  about_product: {
    height: height * 0.23,
    width: width * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categories: {
    width: width * 0.6,
    height: height * 0.04,
  },
  description: {
    height: height * 0.1,
    width: width * 0.6,
  },
  flatlist_bottom: {
    marginBottom: height * 0.05,
  },
  seperator: {
    marginEnd: height * 0.02,
  },
  all_imgwrap: {
    height: height * 0.3,
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    alignItems: 'center',
  },
  title: {
    height: height * 0.1,
    width: width,
    alignItems: 'center',
  },
  category: {
    height: height * 0.08,
    width: width * 0.7,
    alignSelf: 'center',
    alignItems: 'center',
  },
  des_vw: {
    height: height * 0.1,
    width: width*0.8,
    alignItems: 'center',
    alignSelf:'center'
  },
  medium_text:{
    fontSize:height/45,
    color:Color.black
  }
});
export default styles;
