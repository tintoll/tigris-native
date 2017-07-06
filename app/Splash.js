import React from 'react';
import { View, Image, Dimensions } from 'react-native';

export default class Splash extends React.Component {
  
  componentDidMount() {
    const { navigate } = this.props.navigation;
    setTimeout( ()=>{
      navigate("Login");
    } ,2000);    
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}} >        
          <Image 
                style={{flex:1, width:Dimensions.get('window').width, height:Dimensions.get('window').height}}
                source={require('../asset/images/splash.png')} />        
      </View>
    );
  }
}