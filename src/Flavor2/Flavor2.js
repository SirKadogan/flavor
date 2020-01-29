import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import randomNumber from '../SharedContent/SharedFunction';
import {getBundleId} from 'react-native-device-info';

class Flavor2 extends Component {
  state = {number: 0};

  componentDidMount() {
    let number = randomNumber();
    const bundleId = getBundleId();
    let conditionalText = null;
    if (bundleId == 'com.flavor.flavor1') {
      conditionalText = 'Render stack for Flavor 1';
    } else {
      conditionalText = 'Render stack for Flavor 2';
    }

    this.setState({
      number: number,
      bundleId: bundleId,
      conditionalText: conditionalText,
    });
  }

  render() {
    return (
      <View style={{margin: 20}}>
        <Text style={styles.title}>Which flavor is this:</Text>
        <Text style={styles.text}>{this.state.bundleId}</Text>
        <Text style={styles.title}>Shared function result:</Text>
        <Text style={styles.text}>{this.state.number}</Text>
        <Text style={styles.title}>Text rendered conditionally:</Text>
        <Text style={styles.text}>{this.state.conditionalText}</Text>
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

export default Flavor2;
