import React from 'react';
import { View, Text, Image, TextInput, Button } from 'react-native';

export default class Login extends React.Component {

  render() {
    return (
      <View style={{flex:1, backgroundColor: '#007edf'}}>
        
        <View style={{flex:1}}>
          <Image 
                style={{flex:1, alignItems: 'center', justifyContent: 'center'}}
                source={require('../asset/images/logo.png')} /> 
        </View>

        <View style={{flex:2}}>
          <TextInput
                    style={{height: 40}}
                    placeholder="login Id"                   
                  />
          <TextInput
                    style={{height: 40}}
                    placeholder="login Id"                   
                  />
          <Button            
            title="Login"
          />        
        </View>

      </View>
    );
  }
}