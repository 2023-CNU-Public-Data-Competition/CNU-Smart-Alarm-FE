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

  const [isEnabled, setIsEnabled] = useState(true);
  const [isEnabled_2, setIsEnabled_2] = useState(true);
  const [isEnabled_3, setIsEnabled_3] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled_2(previousState => !previousState);
  const toggleSwitch3 = () => setIsEnabled_3(previousState => !previousState);

  return(
    <View style={styles.container}>
      <View style={styles.categoryForm}>
        <Text style={{color: "grey"}}>알림 받을 태그를 선택해주세요.</Text>
        <View style={styles.categorySwitch}>
          <Text style={styles.category}>컴퓨터융합학부</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#4469C0' : '#99AFE3'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.categorySwitch}>
          <Text style={styles.category}>행정학부</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled_2 ? '#4469C0' : '#99AFE3'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled_2}
          />
        </View>
        <View style={styles.categorySwitch}>
          <Text style={styles.category}>정보화본부</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled_3 ? '#4469C0' : '#99AFE3'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch3}
            value={isEnabled_3}
          />
        </View>
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
  categorySwitch: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  category: {
    fontSize: 20
  },
  categoryForm: {
    flex: 1,
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
  button: {
    backgroundColor: "#4469C0",
    borderRadius: 5,
    width: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  submitForm: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: 'flex-start',
    marginRight: 30 
  }
})