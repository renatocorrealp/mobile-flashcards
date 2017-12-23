import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { scheduleNotification } from '../utils/helpers';
import { gray, defaultColor, black} from '../styles/colors';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

export default class QuizResult extends Component {
  componentDidMount  = () => {
    scheduleNotification(1);
  }

  render(){
    const { totalScore, restartQuiz, navigation } = this.props;
    let message = null;

    if(totalScore === 1){
        message = `You have made ${totalScore} point!`
    }else if (totalScore === 0){
        message = `Oh no... You don't have made any point... too bad...`
    }else{
        message = `You have made ${totalScore} points!`
    }

    return (
      <View style={ styles.container }>
        <Text style={ styles.message }>{ message }</Text>
        <TouchableHighlight style={[styles.restartButton, styles.buttons]} underlayColor={ gray }
          onPress={()=> restartQuiz()}>
          <View style={styles.buttonsContainer} >
            <MaterialCommunityIcons name='restart' size={30} color={ black }
              style={{marginRight: 20}}/>
            <Text style={styles.buttonText}>Restart Quiz</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.backButton, styles.buttons]} underlayColor={ gray }
          onPress={()=> navigation.goBack()}>
          <View style={styles.buttonsContainer} >
            <MaterialIcons name='arrow-back' size={30} color={ defaultColor }
              style={{marginRight: 20}}/>
            <Text style={[styles.buttonText, {color: defaultColor}]}>Back To Deck</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  message: {
    fontSize: 25,
    margin:20,
    fontWeight: 'bold'
  },
  buttons:{
    height: 60,
    width: 220,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  restartButton: {
    marginTop: 30,
    backgroundColor: defaultColor,
  },
  backButton: {
    marginTop: 20,
    backgroundColor: black
  },
  buttonText:{
    fontSize: 20,
  }
});
