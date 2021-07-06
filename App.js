import * as React from 'react';
import {
  View,
} from 'react-native';
import HomeScreen from './components/HomeScreen';


export default class App extends React.Component {
  render() {
    return (
      <View>
        <HomeScreen /> 
      </View>
    );
  }
}
