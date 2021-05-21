import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, TextInput, Caption} from 'react-native-paper';
const landingPage = ({navigation}) => {
  const [text, setText] = React.useState('');
  return (
    <View style={styles.MainContainer}>
      <Text style={{fontSize: 20, marginBottom: 10}}>
        To Enter in a quiz please enter your Name
      </Text>
      <TextInput
        label="Name"
        value={text}
        onChangeText={text => setText(text)}
        mode="outlined"
        style={{paddingBottom: 20}}
      />
      <Button
        mode="contained"
        onPress={() => navigation.navigate('QuestionPage', {name: text})}>
        Continue
      </Button>
      <Caption>
        There will be toal 10 questions. You will get result after completing
        all the questions only
      </Caption>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 15,
  },
});
export default landingPage;
