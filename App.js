import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import Header from './components/headerss';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Todo from './Screens/Todo'
import Flexbox from './Screens/Flexbox'

class App extends React.Component {


  static navigationOptions = {
    title: 'Home',
  };

  render() {
    
    return (
      <ScrollView contentStyle={styles.container}>
      <View style={{ margin: 20 }}>
      <Header textIwant={'hjbjb'} />
      </View>
      <Header textIwant={'goodbyeeee'} />
      <View style={{ padding: 20 }}/>
      <Avatar
        large
        rounded
        source={{uri: "https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/42263366_10155872941825773_2488973989444059136_n.jpg?_nc_cat=105&_nc_ht=scontent-sin6-1.xx&oh=1458f89aa9f08d06fb15d7d288342c49&oe=5CA07D06"}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
      />
        
          <Button style={{ flex: 1, }} title={'Hello!'} onPress={( )=> { console.log('hello'); }} ></Button>
      <Text style={styles.bigblue}>zhilei</Text>

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
          title="Learn More2"
          color="coral"
          accessibilityLabel="Learn more about this purple button"
        /> 

          <Button
          title="Go to Todo"
          onPress={() => this.props.navigation.navigate('TodoScreen')}
        />

        <Button
          title="Go to Flexbox"
          onPress={() => this.props.navigation.navigate('FlexboxScreen')}
        />
      </ScrollView>
    );
  }
}

const AppNavigator = createStackNavigator({
    Home: App,
    TodoScreen: Todo,
    FlexboxScreen: Flexbox,
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigblue: {
    height: 500,
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
