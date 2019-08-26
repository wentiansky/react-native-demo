import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Text,
  Image,
  TextInput,
  Alert,
  Button,
  FlatList,
  SectionList
} from 'react-native';

export default class App extends Component {
  state = {
    list: [
      {
        title: 'A',
        data: ['A1', 'A2', 'A3']
      },
      {
        title: 'B',
        data: ['B1', 'B2', 'B3', 'B4']
      },
    ]
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.list}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center'
    paddingTop: 60
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 80
  },
  sectionHeader: {
    padding: 10,
    // paddingTop: 2,
    // paddingLeft: 10,
    // paddingRight: 10,
    // paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
})