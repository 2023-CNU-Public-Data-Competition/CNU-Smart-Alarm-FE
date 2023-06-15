import { useNavigation, useRoute } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { View, Text, Button, StyleSheet, useWindowDimensions } from 'react-native';
import { Chip, Divider } from "@react-native-material/core";
import NavigationBar from "../components/NavigationBar";
import { StatusBar } from "expo-status-bar";
import { request } from '../api';
import RenderHTML from 'react-native-render-html';
import { ScrollView } from 'react-native-gesture-handler';

export default function Post() {
  const navigation = useNavigation();
  const route = useRoute();
  const { articleNo } = route.params;

  const [post, setPost] = useState(null);
  const {width} = useWindowDimensions();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await request(`/contents?articleNo=${articleNo}`);
      setPost(post);
    }
    
    fetchPost();

    navigation.setOptions({
      headerLeft: () => (
        <Button
          title="<<"
          onPress={() => navigation.navigate('PostList')}
        />
      ),
    });
  }, [navigation]);

  
  if(post) {
    const source = {
      html: post.articleText
    };

    const titleLen = post.articleTitle.length;
    let dynamicStyle;

    if(titleLen <= 20) {
      dynamicStyle = {flex: 1}
    } else if(titleLen <= 40) {
      dynamicStyle = {flex: 1.5}
    } else {
      dynamicStyle = {flex: 2}
    }
    

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.article}>
          <View style={[styles.articleInfo, dynamicStyle]}>
            <View style={styles.infoMain}>
              <Button
                title="ㅁ"
              />
              <Text style={styles.articleTitle}>{post.articleTitle}</Text>
            </View>
            <View style={styles.infoSub}>
              <Chip style={styles.postTag} label={post.tag} />
              <Text>등록일: {post.updateDate} {'\n'} 글 작성자: {post.writerName}</Text>
            </View>
          </View>
          <Divider></Divider>
          <View style={styles.articleText}>
            <ScrollView>
              <RenderHTML
                contentWidth={width}
                source={source}
              />
            </ScrollView>
          </View>
        </View>
        
        {NavigationBar}
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  article: {
    flex: 1,
    backgroundColor: "white",
    margin: 20,
    borderWidth: 1,
    borderRadius: 10
  },
  articleInfo: {
    flex: 1,
    margin: 5,
    marginBottom: 15
  },
  infoMain:{
    flexDirection: "row",
    width: '90%'
  },
  infoSub: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 30,
    marginRight: 10
  },
  articleTitle: {
    fontSize: 18,
  },
  articleText: {
    flex: 10,
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