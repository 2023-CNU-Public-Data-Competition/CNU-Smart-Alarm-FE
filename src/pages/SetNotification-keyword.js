import { useNavigation, useRoute } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Chip, Divider } from "@react-native-material/core";
import NavigationBar from "../components/NavigationBar";
import { StatusBar } from "expo-status-bar";
import { request } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function SetNotification_keyword(){

  const navigation = useNavigation();

  const [keyword, setKeyword] = useState("");
  
  const onChangeKeyword = inputKeyword => setKeyword(inputKeyword);

  const [keywordList, setKeywordList] = useState([]);

  const addKeyword = () => {
    setKeywordList([...keywordList, keyword]);
    setKeyword("");
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          title="<<"
          onPress={() => navigation.navigate('SetNotification')}
        />
      ),
    });
  }, [navigation])
  return(
    <View style={styles.container}>
      <View style={styles.inputForm}>
        <TextInput
          onChangeText={onChangeKeyword}
          //onSubmitEditing={addTodo}
          value={keyword}
          placeholder={"키워드를 입력해주세요"} 
          style={styles.input}
        />
        <Button 
          style={styles.buttons}
          title="+"
          onPress={addKeyword}
        />
      </View>
      <Divider />
      <View style={styles.keywordList}>
        {keywordList.map(element => (
          <View style={styles.keyword}>
            <Text>{element}</Text>
            <Button 
              style={styles.buttons}
              title="X"
              //onPress={() => navigation.navigate("SignUp")}
            />
          </View>
        ))}
        
        
      </View>
      <View style={styles.submitForm}>
        <Button
          title="저장하기"
          onPress={()=>navigation.navigate('SetNotification')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  inputForm: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor:"white",
    padding: 10,
    margin: 10,
    marginVertical: 20,
    fontSize: 18,
    width: 350,
    height: 50
  },
  keywordList: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "flex-top",
    alignItems: "flex-top",
    padding: 20,
  },
  keyword: {
    backgroundColor: "lightgrey",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    marginRight: 5
  },
  buttons: {
    borderWidth: 1,
  },
  submitForm: {
    flex: 6
  }
})