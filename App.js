import React from 'react';
import StackNavigator from './src/Navigation/StackNavigator';
import {Provider} from 'react-redux';
import store from './src/Libraries/Redux/Store';
const App = () => {
  return (
    // <Provider store ={store}>
      <StackNavigator />
  //  </Provider>
  );
};

export default App;
