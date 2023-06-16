import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Button, Text, FlatList, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import React, { useState, useEffect } from 'react';
import { Chip, Divider } from "@react-native-material/core";
import { useNavigation, useRoute } from '@react-navigation/native';
import NavigationBar from "../components/NavigationBar";
import PostPreview from "../components/postPreview";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { request } from '../api';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function PostList() {

  const route = useRoute();
  
  const loadUserData = async () => {
    const data = await AsyncStorage.getItem('userData');
    return data;
  }

  const navigation = useNavigation();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [items, setItems] = useState([]);

  const [selectedTag, setSelectedTag] = useState("전체");
  const [postData, setPostData] = useState(null);
  const [isCategoryAll, setIsCategoryAll] = useState(true);

  useEffect(() => {
    const fetchToken = async () => {
      const userData = await loadUserData();
      console.log(userData)
      const userCategoryList = JSON.parse(userData).likedCategoryList.categoryList.map(
        element => ({label: element.categoryName, value: element.categoryNo})
      );      
      setItems([{label: "전체", value: 0}, ...userCategoryList]);
    };

    fetchToken();

    const fetchPosts = async () => {
      const userData = await loadUserData();
      const token = JSON.parse(userData).token;
      const posts = await request('/posts?categoryNo=0&tag=전체', {
        headers: {
          Authorization: token
        },
      });

      if(posts) {
        setPostData(posts.postList)
      }
    }

    fetchPosts();

    navigation.setOptions({
      headerLeft: false,
      headerRight: () => (
        <View style={{ marginRight: 10 }}>
          <Icon
            name="bell-outline"
            size={30}
            color="#4469C0"
            onPress={()=> navigation.navigate('NotificationList')}
          />
        </View>
        
      ),
    });
    }, [navigation]);

    useEffect(() => {
      const fetchPosts = async () => {
        const userData = await loadUserData();
        const token = JSON.parse(userData).token;
        const posts = await request(`/posts?categoryNo=${value}&tag=${selectedTag}`, {
          headers: {
            Authorization: token
          },
        });
        
        if(posts) {
          console.log(posts)
          setPostData(posts.postList)
        }
      }
  
      fetchPosts();
    }, [selectedTag])

    useEffect(() => {
      const fetchPosts = async () => {
        const userData = await loadUserData();
        const token = JSON.parse(userData).token;
        const posts = await request(`/posts?categoryNo=${value}&tag=전체`, {
          headers: {
            Authorization: token
          },
        });
        
        if(value === 0){
          setIsCategoryAll(true);
        } else{
          setIsCategoryAll(false);
        }
        
        
        if(posts) {
          setPostData(posts.postList)
          setSelectedTag("전체")
        }
      }
  
      fetchPosts();
    }, [value])

  const renderItem = ({ item }) => {
    return <PostPreview item={item} isCategoryAll={isCategoryAll} />
  }

  const selectTag = (tag) => {
    setSelectedTag(tag)
  };

  const setVariant = tag => {
    if(selectedTag === tag) {
      return "filled"
    } else {
      return "outlined"
    }
  };

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
            placeholder="전체"
            modalProps={{
            animationType: 'fade',
            }}
            modalTitle="선택해주세요."
          />
        </View>

        <View style={styles.tags}>
          <Chip style={styles.tag} color="#4469C0" variant={setVariant("전체")} label="전체" onPress={() => selectTag("전체")}/>
          <Chip style={styles.tag} color="#4469C0" variant={setVariant("인턴/취업")} label="인턴/취업" onPress={() => selectTag("인턴/취업")} />
          <Chip style={styles.tag} color="#4469C0" variant={setVariant("장학")} label="장학" onPress={() => selectTag("장학")} />
          <Chip style={styles.tag} color="#4469C0" variant={setVariant("대회")} label="대회" onPress={() => selectTag("대회")} />
        </View>
        <View style={styles.tags}>
          <Chip style={styles.tag} color="#4469C0" variant={setVariant("학사일정")} label="학사일정" onPress={() => selectTag("학사일정")} />
          <Chip style={styles.tag} color="#4469C0" variant={setVariant("졸업")} label="졸업" onPress={() => selectTag("졸업")} />
          <Chip style={styles.tag} color="#4469C0" variant={setVariant("특강")} label="특강" onPress={() => selectTag("특강")} />
          <Chip style={styles.tag} color="#4469C0" variant={setVariant("기타 공지")} label="기타 공지" onPress={() => selectTag("기타 공지")} />
        </View>

        <View style={styles.postList}>
          <FlatList
            data={postData}
            renderItem={renderItem}
            keyExtractor={item => item.articleNo}
          />
        </View>
      </View>
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
    paddingVertical: 3
  },
  postList: {
    flex: 10,
    margin: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
  },
  tag: {
    width: 90, 
    height: 40,
    paddingHorizontal: 5, 
    justifyContent: "center",
    alignItems: "center",
  }
})