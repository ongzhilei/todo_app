import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Avatar } from 'react-native-elements'
import { Icon } from 'react-native-elements'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.heartLogo}>
      <Icon
      raised
      name='heartbeat'
      type='font-awesome'
      color='#f50'
      onPress={() => console.log('hello')} />
      </View>

      <Avatar
        large
        rounded
        source={{uri: "https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/42263366_10155872941825773_2488973989444059136_n.jpg?_nc_cat=105&_nc_ht=scontent-sin6-1.xx&oh=1458f89aa9f08d06fb15d7d288342c49&oe=5CA07D06"}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
      />
        
          <Button style={{ flex: 1, }} title={'Hello!'} onPress={( )=> { console.log('hello'); }} ></Button>
      <Text style={styles.bigblue}>WASSUP FRENSSSS</Text>
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
    flex: 1,
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  heartLogo: {
    flex: 1,
  }
});
