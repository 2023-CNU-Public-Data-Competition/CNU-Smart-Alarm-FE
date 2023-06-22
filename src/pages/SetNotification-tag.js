import { useNavigation, useRoute } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { View, Switch, FlatList, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Chip, Divider } from "@react-native-material/core";
import NavigationBar from "../components/NavigationBar";
import { StatusBar } from "expo-status-bar";
import { request } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SetNotification_tag(){

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{marginLeft: 10}}>
          <Icon 
          name="arrow-left"
          color="#4469C0"
          size={30}
          onPress={() => navigation.navigate('SetNotification')}
        />
        </View>
      ),
    });
  }, [navigation])
  return(
    <View style={styles.container}>
      <View style={styles.tagForm}>
        <Text style={{color: "grey"}}>알림 받을 태그를 선택해주세요.</Text>
        <BouncyCheckbox 
          style={styles.tags}
          textStyle={{ textDecorationLine: "none", color: '#000000'}} 
          text="전체" 
          fillColor="#4469C0"
          //onPress={(isChecked: boolean) => {}} 
          />
        <BouncyCheckbox 
          style={styles.tags}
          textStyle={{ textDecorationLine: "none", color: '#000000'}} 
          text="대회" 
          isChecked={true}
          fillColor="#4469C0"
          //onPress={(isChecked: boolean) => {}} 
          />
        <BouncyCheckbox 
          style={styles.tags}
          textStyle={{ textDecorationLine: "none", color: '#000000'}} 
          text="인턴/취업" 
          isChecked={true}
          fillColor="#4469C0"
          //onPress={(isChecked: boolean) => {}} 
          />
        <BouncyCheckbox 
          style={styles.tags}
          textStyle={{ textDecorationLine: "none", color: '#000000'}} 
          text="장학" 
          fillColor="#4469C0"
          //onPress={(isChecked: boolean) => {}} 
          />
        <BouncyCheckbox 
          style={styles.tags}
          textStyle={{ textDecorationLine: "none", color: '#000000'}} 
          text="학사일정" 
          fillColor="#4469C0"
          //onPress={(isChecked: boolean) => {}} 
          />
        <BouncyCheckbox 
          style={styles.tags}
          textStyle={{ textDecorationLine: "none", color: '#000000'}} 
          text="졸업" 
          fillColor="#4469C0"
          //onPress={(isChecked: boolean) => {}} 
          />
        <BouncyCheckbox 
          style={styles.tags}
          textStyle={{ textDecorationLine: "none", color: '#000000'}} 
          text="특강" 
          fillColor="#4469C0"
          //onPress={(isChecked: boolean) => {}} 
          />
        <BouncyCheckbox 
          style={styles.tags}
          textStyle={{ textDecorationLine: "none", color: '#000000'}} 
          text="기타 공지" 
          fillColor="#4469C0"
          //onPress={(isChecked: boolean) => {}} 
          />
      </View>
      <View style={styles.submitForm}>
        <View style={styles.button}>
          <Button
            style={styles.buttonText}
            color={"white"}
            title="저장하기"
            onPress={()=>navigation.navigate('SetNotification')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  tagForm: {
    flex: 3,
    margin: 20,
  },
  tags: {
    paddingTop: 15,
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
  buttons: {
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#4469C0",
    borderRadius: 5,
    width: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  submitForm: {
    flex: 2,
    alignItems: "flex-end",
    justifyContent: 'flex-start',
    marginRight: 30 
  }
})