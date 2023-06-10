import { useNavigation, useRoute } from '@react-navigation/native';
import React, {useEffect} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Chip, Divider } from "@react-native-material/core";
import NavigationBar from "../components/NavigationBar";
import { StatusBar } from "expo-status-bar";

export default function Post() {
  const navigation = useNavigation();
  const route = useRoute();
  const { articleNo } = route.params;

  const dummy = {
    "articleNo": 1,
    "categoryDto": {
        "categoryNo": 1,
        "categoryType": "공과대학",
        "categoryName": "컴퓨터공학과"
    },
    "articleTitle": "test title",
    "articleText": "test용 게시글 입니다.",
    "writerName": "익명",
    "clickCnt": 0,
    "updateDate": "5월 22, 2023",
    "tag": "기타 공지",
    "attachmentDtoList": []
  }

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

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.articleInfo}>
        <View style={styles.infoMain}>
          <Button
            title="ㅁ"
          />
          <Text style={styles.articleTitle}>{dummy.articleTitle}</Text>
        </View>
        <View style={styles.infoSub}>
          <Chip style={styles.postTag} label={dummy.tag} />
          <Text>등록일: {dummy.updateDate} {'\n'} 글 작성자: {dummy.writerName}</Text>
        </View>
      </View>
      <Divider></Divider>
      <View style={styles.articleText}>
        <Text>{dummy.articleText}</Text>
      </View>
      {NavigationBar}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 20,
    borderWidth: 1,
    borderRadius: 10
  },
  articleInfo: {
    flex: 1,
    margin: 5
  },
  infoMain:{
    flexDirection: "row"
  },
  infoSub: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 30,
    marginRight: 10
  },
  articleTitle: {
    fontSize: 18
  },
  articleText: {
    flex: 8,
    margin: 10
  },
  postTag: {
    borderWidth: 1,
    width: 80,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  }
})