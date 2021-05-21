import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, ProgressBar, Colors} from 'react-native-paper';
const QuestionsPage = ({navigation, route}) => {
  const {name} = route.params;

  return (
    <View>
      <View style={styles.Header}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}> Welcome {name}</Text>
        <Button
          mode="contained"
          color="#ff5555"
          onPress={() => navigation.navigate('LandingPage')}>
          Quite
        </Button>
      </View>
      <ProgressBar progress={0.5} color={'#6f6f6f'} />
      <View style={styles.Box}>
        <Text
          style={[
            {
              fontSize: 18,
              fontWeight: 'bold',
            },
          ]}>
          {' '}
          Question 0/10
        </Text>
      </View>

      <Text>Questions will apear here</Text>
      <Text>Questions will apear here</Text>
      <Text>Questions will apear here</Text>
      <Text>Questions will apear here</Text>
      <Text>Questions will apear here</Text>
      <Text>Questions will apear here</Text>
      <Text>Questions will apear here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  Box: {
    borderRadius: 25,
    borderColor: '#6f6f6f',
    borderWidth: 2,
    backgroundColor: '#9f9f9f',
    padding: 5,
    margin: 10,
    paddingRight: 10,
    alignItems: 'flex-start',
    color: '#4f4f4f',
    justifyContent: 'center',

    alignSelf: 'flex-start',
  },
});
export default QuestionsPage;
