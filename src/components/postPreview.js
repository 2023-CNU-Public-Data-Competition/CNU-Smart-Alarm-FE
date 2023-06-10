import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Divider } from "@react-native-material/core";

export default function PostPreview({ item }){
  const currentScreen = useRoute().name;
  const navigation = useNavigation();

  
  return(
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Post', {articleNo: item.articleNo})}>
        <Text style={styles.postTitle}>{item.articleTitle}</Text>
        <View style={styles.postSub}>
          <Text style={styles.postTag}>{currentScreen !=="PostList" ? item.alarmName : item.tag}</Text>
          <Text>{currentScreen !== "PostList" ? item.updateDate : "등록일: " + item.updateDt}</Text>
        </View>
      </TouchableOpacity>
      <Divider style={{ marginTop: 10, marginBottom: 10 }}></Divider>
    </View>
  )
}

const styles = StyleSheet.create({
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
})