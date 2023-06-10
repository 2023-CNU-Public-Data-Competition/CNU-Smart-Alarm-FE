import { StatusBar } from "expo-status-bar";
import { View, Button, StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import React, { useState, useEffect } from 'react';
import { Chip, Divider } from "@react-native-material/core";
import { useNavigation, useRoute } from '@react-navigation/native';
import NavigationBar from "../components/NavigationBar";
import PostPreview from "../components/postPreview";


export default function NotificationList() {
  const navigation = useNavigation();
  const route = useRoute();

  const dummy = [
    {
        "articleNo": 1,
        "articleTitle": "title1",
        "alarmType": "CATEGORY",
        "alarmName": "컴퓨터융합학부",
        "updateDate": "6월 7, 2023"
    },
    {
        "articleNo": 2,
        "articleTitle": "title2",
        "alarmType": "KEYWORD",
        "alarmName": "해커톤",
        "updateDate": "6월 7, 2023"
    }
  ];

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          title="<<"
          onPress={() => navigation.navigate('PostList')}
        />
      ),
      headerTitle: () => (
        <View >
          <Text style={styles.header}>알림</Text>
        </View>
      ),
      headerStyle: {
        backgroundColor: '#EEF5FE', // 원하는 배경 색상으로 변경
        color: "4469C0" 
      },
      headerRight: () => (
        <Button
          title="편집"
          //onPress={() => navigation.navigate('PostList')}
        />
      ),
    });
  }, [navigation]);

  const renderItem = ({ item }) => {
    return <PostPreview item={item} />
  }

  return (
    <View style={styles.container}>
      <View>
          <FlatList
            data={dummy}
            renderItem={renderItem}
            keyExtractor={item => item.articleNo}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    color: "4469C0" 
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10 
  },
  
})