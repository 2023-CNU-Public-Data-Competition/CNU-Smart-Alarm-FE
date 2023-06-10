import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Button, Text, FlatList, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import React, { useState, useEffect } from 'react';
import { Chip, Divider } from "@react-native-material/core";
import { useNavigation, useRoute } from '@react-navigation/native';
import NavigationBar from "../components/NavigationBar";
import PostPreview from "../components/postPreview";

export default function Mypage() {

  const navigation = useNavigation();
/*
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          title="<<"
          onPress={() => navigation.navigate('PostList')}
        />
      ),
    });
  }, [navigation]);
  */
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonArea}>
        <Text style={styles.buttons}>카테고리 선택</Text>
      </TouchableOpacity>
      <Divider/>
      <TouchableOpacity 
        style={styles.buttonArea}
        onPress={() => navigation.navigate('SetNotification')}  
      >
        <Text style={styles.buttons}>알림 편집</Text>
      </TouchableOpacity>
      <Divider />
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