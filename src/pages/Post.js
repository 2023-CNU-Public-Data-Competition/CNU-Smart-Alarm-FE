import { useNavigation, useRoute } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { View, Text, Button, StyleSheet, useWindowDimensions } from 'react-native';
import { Chip, Divider } from "@react-native-material/core";
import NavigationBar from "../components/NavigationBar";
import { StatusBar } from "expo-status-bar";
import { request } from '../api';
import RenderHTML from 'react-native-render-html';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Post() {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route);
  //console.log(navigation.getCurrentRoute().name)
  const { articleNo } = route.params;

  const [post, setPost] = useState(null);
  const {width} = useWindowDimensions();

  const [bookmark, setBookmark] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const post = await request(`/contents?articleNo=${articleNo}`);
      setPost(post);
    }
    
    fetchPost();

    navigation.setOptions({
      headerLeft: () => (
        <View style={{marginLeft: 10}}>
          <Icon 
          name="arrow-left"
          color="#4469C0"
          size={30}
          onPress={() => navigation.navigate('PostList')}
        />
        </View>
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
                {bookmark ? 
                  <Icon
                    name="bookmark"
                    size={30}
                    onPress={()=>setBookmark(!bookmark)}
                  /> :
                  <Icon
                    name="bookmark-outline"
                    size={30}
                    onPress={()=>setBookmark(!bookmark)}
                  />
                }
              <Text style={styles.articleTitle}>{post.articleTitle}</Text>
            </View>
            <View style={styles.infoSub}>
              <View style={styles.tag}>
                <Text style={styles.postTag}>{post.tag}</Text>
              </View>
              <Text style={styles.details}>등록일: {post.updateDate} {'\n'} 글 작성자: {post.writerName} {'\n'} 조회수: {post.clickCnt}</Text>
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
  details: {
    textAlign: "right"
  },
  articleTitle: {
    fontSize: 18,
  },
  articleText: {
    flex: 10,
    margin: 10
  },
  postTag: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    opacity: 1
  },
  tag: {
    marginTop: 6,
    borderRadius: 8,
    height: 20,
    backgroundColor: "#C4F1E8",
    justifyContent: "center",
    alignItems: "center",
  }
})