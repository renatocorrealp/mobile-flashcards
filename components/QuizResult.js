import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default QuizResult = ({ totalScore }) => {
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
    </View>
  )
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
  }
});
