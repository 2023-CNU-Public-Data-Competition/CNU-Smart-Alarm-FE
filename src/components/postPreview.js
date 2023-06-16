import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Divider } from "@react-native-material/core";

export default function PostPreview({ item, isCategoryAll }){
  const currentScreen = useRoute().name;
  const navigation = useNavigation();

  
  const setTagColor = (alarmType) => {
    console.log(alarmType)
    if(alarmType ==="KEYWORD") {
      return styles.keywordTag;
    } else if(alarmType === "CATEGORY") {
      return styles.categoryTag;
    } else{
      return styles.tagTag;
    }
  }
  return(
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Post', {articleNo: item.articleNo})}>
        <Text style={styles.postTitle}>{item.articleTitle}</Text>
        <View style={styles.postSub}>
          <View style={styles.tags}>
            <View style={isCategoryAll ? styles.categoryTag : styles.none}>
              {isCategoryAll ? <Text style={styles.postTag}>{item.categoryName}</Text> : <Text />}
            </View>
            {
              currentScreen !== "PostList" ? 
              <View style={setTagColor(item.alarmType)}>
                <Text style={styles.postTag}>{item.alarmName}</Text>
              </View> :
              <View style={styles.tagTag}>
                <Text style={styles.postTag}>{item.tag}</Text>
              </View>
            }
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
    paddingHorizontal: 5,
    paddingVertical: 2,
    alignItems: "center",
    opacity: 1
  },
  categoryTag: {
    marginRight: 5,
    borderRadius: 8,
    backgroundColor: "#ADD3FF"
  },
  none: {

  },
  keywordTag: {
    borderRadius: 8,
    backgroundColor: "#FFF7AC",
  },
  tagTag: {
    borderRadius: 8,
    backgroundColor: "#C4F1E8",
  },
})