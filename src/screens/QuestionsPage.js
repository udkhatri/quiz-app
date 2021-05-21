import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, ProgressBar, Colors, RadioButton} from 'react-native-paper';
import {questions} from '../components/questions.js';
const Questions = props => {
  const [value, setValue] = React.useState('');
  console.log(props);
  const que = props.question;
  const id = props.id;
  const ans = props.answers;
  const correct = props.correctIndex;
  const img = props.image;
  console.log(id);
  return (
    <View>
      <View style={styles.Box}>
        <Text
          style={[
            {
              fontSize: 18,
              fontWeight: 'bold',
              color: Colors.blueGrey900,
            },
          ]}>
          Question {id}/10
        </Text>
      </View>
      <View style={styles.QuesionBox}>
        <Text
          style={{fontSize: 20, fontWeight: 'bold', color: Colors.blueGrey800}}>
          {id}:{que}
        </Text>
        {/* <Image source={require('../components/1.jpg')} /> */}
        <Image style={styles.image} source={img} />
        <RadioButton.Group
          onValueChange={newValue => setValue(newValue)}
          value={value}>
          {ans.map((data, key) => {
            return (
              <View
                key={key}
                style={[
                  styles.AnsBox,
                  {
                    flexDirection: 'row',
                    alignItems: 'center',
                  },
                ]}>
                <RadioButton value={key} color={Colors.blueGrey700} />
                <Text>{data}</Text>
              </View>
            );
          })}
        </RadioButton.Group>
      </View>
    </View>
  );
};
const QuestionsPage = ({navigation, route}) => {
  const {name} = route.params;
  const [counter, setCounter] = React.useState(0);

  const next = () => {
    if (counter < 0 || counter >= 9) {
      setCounter(counter);
    } else {
      setCounter(counter + 1);
    }
    console.log(counter);
  };
  const pre = () => {
    if (counter <= 0 || counter > 9) {
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }
    console.log(counter);
  };
  console.log(questions);
  return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <View style={styles.Header}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: Colors.blueGrey800,
            elevation: 5,
          }}>
          Welcome {name}
        </Text>
        <Button
          dark={true}
          mode="contained"
          color={Colors.redA200}
          onPress={() => navigation.navigate('LandingPage')}>
          Quit
        </Button>
      </View>
      <ProgressBar progress={(counter + 1) / 10} color={Colors.blueGrey400} />

      <Questions {...questions.questions[counter]} />
      <View style={styles.bottomContainer}>
        {counter == 9 ? (
          <Button
            style={{
              marginHorizontal: 15,
              marginTop: 20,
              borderRadius: 26,
            }}
            dark={true}
            mode="contained"
            color={Colors.red400}
            //onPress={next}
          >
            Submit
          </Button>
        ) : (
          <Button
            style={styles.bottom}
            dark={true}
            mode="contained"
            color={Colors.blue400}
            onPress={next}>
            Next
          </Button>
        )}
        {!counter == 0 ? (
          <Button
            style={styles.bottom}
            dark={true}
            mode="contained"
            color={Colors.blue400}
            onPress={pre}>
            Previous
          </Button>
        ) : null}
      </View>
      {/* <Text>{questions.questions[0].image}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  bottom: {
    marginHorizontal: 15,
    marginTop: 20,
    borderRadius: 26,
    backgroundColor: Colors.blueGrey800,
    // flex: 1,
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  Box: {
    borderRadius: 25,
    borderColor: Colors.blueGrey400,
    borderWidth: 2,
    backgroundColor: Colors.blueGrey200,
    padding: 5,
    margin: 10,
    paddingRight: 10,
    alignItems: 'flex-start',
    color: Colors.blueGrey800,
    justifyContent: 'center',
    elevation: 5,
    alignSelf: 'flex-start',
  },
  AnsBox: {
    borderRadius: 25,
    borderColor: Colors.blueGrey400,
    borderWidth: 2,
    backgroundColor: Colors.blueGrey200,
    paddingRight: 10,
    marginBottom: 7,
    color: Colors.blueGrey800,
    justifyContent: 'flex-start',
    elevation: 5,
    //alignSelf: 'flex-start',
  },
  QuesionBox: {
    marginHorizontal: 10,
  },
  image: {
    height: 200,
    width: 300,
    borderRadius: 15,
    alignSelf: 'center',
    borderColor: Colors.blueGrey400,
    borderWidth: 3,
    marginVertical: 10,
  },
  bottomContainer: {},
});
export default QuestionsPage;
