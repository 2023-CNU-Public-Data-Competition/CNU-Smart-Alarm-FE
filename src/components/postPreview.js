import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Divider } from "@react-native-material/core";

export default function PostPreview({ item, isCategoryAll }){
  const currentScreen = useRoute().name;
  const navigation = useNavigation();
  console.log(isCategoryAll)
  
  return(
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Post', {articleNo: item.articleNo})}>
        <Text style={styles.postTitle}>{item.articleTitle}</Text>
        <View style={styles.postSub}>
          <View style={styles.tags}>
            {isCategoryAll ? <Text style={styles.postTag}>{item.categoryName}</Text> : <Text />}
            <Text style={styles.postTag}>{currentScreen !=="PostList" ? item.alarmName : item.tag}</Text>
          </View>
          <Text>{currentScreen !== "PostList" ? item.updateDate : "등록일: " + item.updateDate}</Text>
        </View>
      </TouchableOpacity>
      <Divider style={{ marginTop: 10, marginBottom: 10 }}></Divider>
    </View>
  )
}

const styles = StyleSheet.create({
  postTitle: {
    fontSize: 17,
    paddingBottom: 5
  },
  postSub: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tags: {
    flexDirection: "row",
  },
  postTag: {
    borderWidth: 1,
    marginRight: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 8,
    alignItems: "center",
  },
})