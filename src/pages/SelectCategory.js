import { useNavigation, useRoute } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import DropDownPicker from "react-native-dropdown-picker";
import { View, Text, Dimensions, TextInput, Button, StyleSheet } from 'react-native';
import { Chip, Divider } from "@react-native-material/core";
import NavigationBar from "../components/NavigationBar";
import { StatusBar } from "expo-status-bar";
import { request } from '../api';

const windowWidth = Dimensions.get('window').width;

export default function SelectCategory() {


  const navigation = useNavigation();
  const route = useRoute();
  //const { token } = route.params;
  //console.log(token)

  const [openCategory, setOpenCategory] = useState(false);
  const [valueCategory, setValueCategory] = useState(null);
  const [itemsCategory, setItemsCategory] = useState([
    {label: '보기1', value: '1'},
    {label: '보기2', value: '2'},
    {label: '보기1', value: '3'},
    {label: '보기2', value: '4'},
  ]);

  const [openInnerCategory, setOpenInnerCategory] = useState(false);
  const [valueInnerCategory, setValueInnerCategory] = useState(null);
  const [itemsInnerCategory, setItemsInnerCategory] = useState([
    {label: '보기1', value: '5'},
    {label: '보기2', value: '6'},
    {label: '보기1', value: '7'},
    {label: '보기2', value: '8'},
  ]);

  return(
    <View style={styles.container}>
      <View style={styles.guide}>
        <Text>메인 메뉴에서 바로{"\n"}확인하고 싶은 카테고리를{"\n"}최대 5개 선택해 주세요.</Text>
      </View>
      <View style={styles.selectForm}>
        <DropDownPicker
          containerStyle={styles.category}
          open={openCategory}
          value={valueCategory}
          items={itemsCategory}
          setOpen={setOpenCategory}
          setValue={setValueCategory}
          setItems={setItemsCategory}
          placeholder="카테고리"
          modalProps={{
            animationType: 'fade',
          }}
          modalTitle="선택해주세요."
        />
        <DropDownPicker
          containerStyle={styles.category}
          open={openInnerCategory}
          value={valueInnerCategory}
          items={itemsInnerCategory}
          setOpen={setOpenInnerCategory}
          setValue={setValueInnerCategory}
          setItems={setItemsInnerCategory}
          placeholder="세부 카테고리"
          modalProps={{
          animationType: 'fade',
          }}
          modalTitle="선택해주세요."
        />
        <Button
          title="추가"
        />
      </View>
      <View style={styles.selectedCategories}>
          <Text>selectedCategories</Text>
      </View>
      <View style={styles.submitCategories}>
        <Button
          title="확인"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  guide: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  selectForm: {
    flex: 1,
    zIndex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  category: {
    width: windowWidth * 0.4
  },
  selectedCategories: {
    flex: 5,
    alignItems: "center"
  },
  submitCategories: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 20
  }
})