import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Avatar } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import Header from './components/headerss';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Header textIwant={'hellooooo'} />
      <Header textIwant={'goodbyeeee'} />

      <Avatar
        large
        rounded
        source={{uri: "https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/42263366_10155872941825773_2488973989444059136_n.jpg?_nc_cat=105&_nc_ht=scontent-sin6-1.xx&oh=1458f89aa9f08d06fb15d7d288342c49&oe=5CA07D06"}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
      />
        
          <Button style={{ flex: 1, }} title={'Hello!'} onPress={( )=> { console.log('hello'); }} ></Button>
      <Text style={styles.bigblue}>zhilei</Text>
      <Text style={styles.red}>Hearts</Text>

      <View style={styles.heartLogo}>
          <Icon
          name='heartbeat'
          type='font-awesome'
          color='#f50'
         onPress={() => console.log('hello')} />
         </View>

          <Icon
          raised
          name='sc-telegram'
          type='evilicon'
          color='#517fa4'
          /> 

          <Icon
          raised
          name='sc-facebook'
          type='evilicon'
          color='#517fa4'
          /> 


        <Button
          onPress={( )=> { console.log('hello'); }}
          title="Learn More"
          color="coral"
          accessibilityLabel="Learn more about this purple button"
        /> 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigblue: {
    height: 300,
    color: 'blue',
    fontWeight: 'normal',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  Header: {
    flex: 1, 
    backgroundColor: 'coral',
    alignItems: 'center', 
    justifyContent:'center',
  },
});
