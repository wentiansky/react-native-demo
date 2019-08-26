import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Text,
  Image,
} from 'react-native';

import { Menu } from 'antd-mobile';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Button>按钮</Button> */}
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7'
  }
})

export default App;