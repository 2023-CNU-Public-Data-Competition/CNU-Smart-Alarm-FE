import { useNavigation, useRoute } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import DropDownPicker from "react-native-dropdown-picker";
import { View, Text, Dimensions, FlatList, Button, StyleSheet } from 'react-native';
import { Chip, Divider } from "@react-native-material/core";
import NavigationBar from "../components/NavigationBar";
import { StatusBar } from "expo-status-bar";
import { request } from '../api';

const windowWidth = Dimensions.get('window').width;

export default function SelectCategory() {
  const navigation = useNavigation();
  const route = useRoute();
  const { token } = route.params;
  const realToken = token._z;
  
  const [openCategory, setOpenCategory] = useState(false);
  const [valueCategory, setValueCategory] = useState(null);
  const [itemsCategory, setItemsCategory] = useState([]);

  const [openInnerCategory, setOpenInnerCategory] = useState(false);
  const [valueInnerCategory, setValueInnerCategory] = useState(null);
  const [itemsInnerCategory, setItemsInnerCategory] = useState([]);
  
  const [categoryPairArray, setCategoryPairArray] = useState([]);

  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const categoryFetch = async () => {
      const res = await request('/category');
      const categories = res.result;

      const categoryArray = [];
      const categoryPairs = [];

      categories.forEach(element => {
        categoryArray.push({
          label: element.categoryType,
          value: element.categoryType
        });

        categoryPairs.push({
          category: element.categoryType,
          innerCategory: element.content
        })
      });

      setCategoryPairArray(categoryPairs);
      setItemsCategory(categoryArray);
    };

    categoryFetch();
  }, []);

  useEffect(() => {
    const innerCategoryArray = [];

    categoryPairArray.forEach(element => {
      if(element.category === valueCategory) {        
        element.innerCategory.forEach(innerElement => {
          innerCategoryArray.push({
            label: innerElement.categoryName,
            value: {
              categoryNo: innerElement.categoryNo,
              categoryName: innerElement.categoryName
            }
          })
        })
      } 
    });

    setItemsInnerCategory(innerCategoryArray);
    
  }, [valueCategory]);
  
  const selectCategory = () =>{
    /*
    const selectedCategory = {
      category: valueCategory,
      innerCategory: valueInnerCategory
    }
*/
    setSelectedCategories([...selectedCategories, valueInnerCategory]);
    console.log("select!")
    console.log(selectedCategories)
  }

  const cancelSelecting = (categoryNo) => {
    const newSelectedCategories = [];
    
    selectedCategories.forEach(element => {
      if(element.categoryNo !== categoryNo) {
        newSelectedCategories.push(element);
      }
    });
    
    setSelectedCategories(newSelectedCategories);
    console.log("cancel!")
    console.log(selectedCategories)
  }

  const renderItem = ({item}) => {
    const handleCancel = () => {
      cancelSelecting(item.categoryNo);
    };

    return(
      <View style={styles.selectedCategory} key={item.categoryNo}>
        <Button
          title="X"
          onPress={handleCancel}
        />
        <Text>{item.category} {item.categoryName}</Text>
      </View>
    );
  }

  const setUserCategories = async () => {
    console.log(`api 호출 후: ${realToken}`)
    const res = await request('/liked_category', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: realToken
      },
      body: JSON.stringify(selectedCategories)
    });
    console.log(res)
  }
  

  

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
          onPress={selectCategory}
        />
      </View>
      <View style={styles.selectedCategories}>
        <FlatList
          data={selectedCategories}
          renderItem={renderItem}
          keyExtractor={item => item.articleNo}
        />
      </View>
      <View style={styles.submitCategories}>
        <Button
          title="확인"
          onPress={setUserCategories}
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
    alignItems: "center",
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
  selectedCategory: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  submitCategories: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 20
  }
})