import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

class Todo extends React.Component {
    render ( ) {
        return (
            <ScrollView>
                <View style={StyleSheet.container1} />
                <View style={StyleSheet.containter2} />
                <View style={StyleSheet.container3} />
                <View style={StyleSheet.container1} />
                <View style={StyleSheet.containter2} />
          </ScrollView>
            );
    }
}

const styles = StyleSheet.create{{
    container1: {
        padding: 100, 
        backgroundColor: 'blue'
    },
    containter2: {
        padding: 100,
        backgroundColor: 'red'
    },
    containter3: {
        padding: 100,
        backgroundColor: 'yellow'

}}


export default Todo;