import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Button, Text, FlatList, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import React, { useState, useEffect } from 'react';
import { Chip, Divider } from "@react-native-material/core";
import { useNavigation, useRoute } from '@react-navigation/native';
import NavigationBar from "../components/NavigationBar";
import PostPreview from "../components/postPreview";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SetNotification() {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{marginLeft: 10}}>
          <Icon 
          name="arrow-left"
          color="#4469C0"
          size={30}
          onPress={() => navigation.navigate('Mypage')}
        />
        </View>
      ),
    });
  }, [navigation]);
  
  return(
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.buttonArea}
        onPress={() => navigation.navigate('SetNotification_category')}  
      >
        <Text style={styles.buttons}>카테고리 알림</Text>
      </TouchableOpacity>
      <Divider/>
      <TouchableOpacity 
        style={styles.buttonArea}
        onPress={() => navigation.navigate('SetNotification_keyword')}  
      >
        <Text style={styles.buttons}>키워드 알림</Text>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity 
        style={styles.buttonArea}
        onPress={() => navigation.navigate('SetNotification_tag')}  
      >
        <Text style={styles.buttons}>태그 알림</Text>
      </TouchableOpacity>
      <Divider/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  buttonArea: {
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  buttons: {
    fontSize: 20
  },
})