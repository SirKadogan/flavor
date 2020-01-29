import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import randomNumber from '../SharedContent/SharedFunction';
import {getBundleId} from 'react-native-device-info';

class Flavor1 extends Component {
  state = {number: 0};

  componentDidMount() {
    let number = randomNumber();
    const bundleId = getBundleId();
    this.setState({
      number: number,
      bundleId: bundleId,
    });
  }

  render() {
    return (
      <View style={{margin: 20}}>
        <Text style={styles.title}>Which flavor is this:</Text>
        <Text style={styles.text}>{this.state.bundleId}</Text>
        <Text style={styles.title}>Shared function result:</Text>
        <Text style={styles.text}>{this.state.number}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#404040',
  },
  text: {
    color: '#404040',
    marginBottom: 10,
  },
});

export default Flavor1;
