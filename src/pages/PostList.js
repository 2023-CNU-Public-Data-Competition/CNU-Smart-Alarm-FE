import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Button, Text, FlatList, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import React, { useState, useEffect } from 'react';
import { Chip, Divider } from "@react-native-material/core";
import { useNavigation, useRoute } from '@react-navigation/native';
import NavigationBar from "../components/NavigationBar";
import PostPreview from "../components/postPreview";

export default function PostList() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="notice"
          onPress={() => navigation.navigate('NotificationList')}
        />
      ),
    });
  }, [navigation]);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
      {label: '보기1', value: '1'},
      {label: '보기2', value: '2'},
      {label: '보기1', value: '3'},
      {label: '보기2', value: '4'},
  ]);

  const post_data = [
    {
        "articleNo": 1,
        "categoryNo": 1,
        "categoryName": "컴퓨터공학과",
        "articleTitle": "test title",
        "updateDt": "2023-05-22",
        "tag": "NOTICE"
    },
    {
      "articleNo": 2,
      "categoryNo": 2,
      "categoryName": "컴퓨터공학과",
      "articleTitle": "test title 2",
      "updateDt": "2023-05-23",
      "tag": "NOTICE"
    }
  ];

  const renderItem = ({ item }) => {
    return <PostPreview item={item} />
  }

  return(
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.body}>
        <View style={styles.selectedCategory}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="카테고리"
            modalProps={{
            animationType: 'fade',
            }}
            modalTitle="선택해주세요."
          />
        </View>

        <View style={styles.tags}>
          <Chip style={styles.tag} variant="outlined" label="전체" />
          <Chip style={styles.tag} variant="outlined" label="대회" />
          <Chip style={styles.tag} variant="outlined" label="인턴/취업" />
          <Chip style={styles.tag} variant="outlined" label="장학" />
        </View>
        <View style={styles.tags}>
          <Chip style={styles.tag} variant="outlined" label="학사일정" />
          <Chip style={styles.tag} variant="outlined" label="졸업" />
          <Chip style={styles.tag} variant="outlined" label="특강" />
          <Chip style={styles.tag} variant="outlined" label="기타 공지" />
        </View>

        <View style={styles.postList}>
          <FlatList
            data={post_data}
            renderItem={renderItem}
            keyExtractor={item => item.articleNo}
          />
        </View>
      </View>
      {NavigationBar}
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 0
  },
  body: {
    flex: 10,
  },
  selectedCategory: {
    flex: 1,
    padding: 20,
    zIndex: 1
  },
  tags: {
    flex: 0.7,    
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20, 
  },
  postList: {
    flex: 10,
    margin: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
  },
  postTitle: {
    fontSize: 23,
    paddingBottom: 5
  },
  postSub: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postTag: {
    borderWidth: 1,
    width: 100,
    borderRadius: 10,
    alignItems: "center",
  },
  tag: {
    width: 90, 
    height: 40,
    paddingHorizontal: 5, 
    justifyContent: "center",
    alignItems: "center",
  }
})