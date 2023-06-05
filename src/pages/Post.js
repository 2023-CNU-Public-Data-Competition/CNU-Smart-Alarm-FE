import { useNavigation, useRoute } from '@react-navigation/native';
import React, {useEffect} from 'react';
import { View, Text, Button } from 'react-native';

export default function Post() {
  const navigation = useNavigation();
  const route = useRoute();
  const { articleNo } = route.params;

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
    <View>
      <Text>{articleNo}</Text>
    </View>
  );
}