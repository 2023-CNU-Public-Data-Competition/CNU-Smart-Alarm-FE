import { useNavigation, useRoute } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Chip, Divider } from "@react-native-material/core";
import NavigationBar from "../components/NavigationBar";
import { StatusBar } from "expo-status-bar";
import { request } from '../api';

export default function SignUp(){
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onChangeId = inputId => setId(inputId);
  const onChangePw = inputPw => setPw(inputPw);

  const navigation = useNavigation();
  
  const fetchSignUp = async (inputId, inputPw) => {
    const res = await request(`/auth/signup`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
          id: inputId,
          password: inputPw
      })
    });
    
    const token = res.token;
    console.log(`fetch 후 token: ${token}`)
    return token;
  };

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>CNU 똑똑이</Text>
      </View>
      <View style={styles.signUpForm}>
        <TextInput
          onChangeText={onChangeId}
          //onSubmitEditing={addTodo}
          value={id}
          placeholder={"아이디"} 
          style={styles.input}
        />
        <TextInput
          onChangeText={onChangePw}
          //onSubmitEditing={addTodo}
          value={pw}
          placeholder={"비밀번호"} 
          secureTextEntry={true}
          style={styles.input}
        />
        <Button 
          title="회원가입"
          onPress={() => {
            const token = fetchSignUp(id, pw);
            navigation.navigate("SelectCategory", {token: token})
          }}
        />
      </View>
      <View style={styles.goSignUp}>
        <Button 
          title="로그인"
          onPress={() => navigation.navigate("Login")}
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
  header: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  logo: {
    fontSize: 30
  },
  signUpForm: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor:"white",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    marginVertical: 20,
    fontSize: 18,
    borderWidth: 1,
    width: 350
  },
  goSignUp: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 50
  }
})