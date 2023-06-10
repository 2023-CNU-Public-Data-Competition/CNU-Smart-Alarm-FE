import { View, StyleSheet, Text } from "react-native";
import React from 'react';

export default function NavigationBar() {
  return (
    <View style={styles.navigationBar}>
      <View style={styles.navigationOption}>
        <Text>search</Text>
      </View>
      <View style={styles.navigationOption}>
        <Text>scrap</Text>
      </View>
      <View style={styles.navigationOption}>
        <Text>home</Text>
      </View>
      <View style={styles.navigationOption}>
        <Text>mypage</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  navigationBar: {
    flex: 1,
    backgroundColor: "#EEF5FE", 
    paddingHorizontal: 0,
    flexDirection: "row" 
  },
  navigationOption: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
})