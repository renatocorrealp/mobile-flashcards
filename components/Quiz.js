import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { ice, defaultColor, red, green, black } from '../styles/colors';
import QuizResult from './QuizResult';
import { FontAwesome } from '@expo/vector-icons';

class Quiz extends Component {
  state = {
    currentQuestion: null,
    currentQuestionNumber: 1,
    currentScore: 0,
    cardsTotal: 0,
    showAnswer: false,
    showResults: false
  }

  componentDidMount = () => {
    this.initQuiz();
  }

  saveAnswerPoint = (answer) => {
    const { deck } = this.props;
    let { currentScore, currentQuestionNumber, currentQuestion, showResults, cardsTotal } = this.state;

    if(answer){
      currentScore++;
    }

    if(currentQuestionNumber < cardsTotal){
      // Get next question
      currentQuestion = deck.questions[currentQuestionNumber];
      currentQuestionNumber++;
    }else{
      showResults = true;
    }

    this.setState(
      {
        currentQuestionNumber,
        currentQuestion,
        showAnswer: false,
        showResults,
        currentScore
      }
    );
  }

  turnCard = () => {
    this.setState({showAnswer: true});
  }

  initQuiz = () => {
    const { deck } = this.props;
    this.setState(
      {
        currentQuestion: deck.questions[0],
        cardsTotal: deck.questions.length,
        currentQuestionNumber: 1,
        currentScore: 0,
        showAnswer: false,
        showResults: false
      }
    );
  }

  render(){
    const { navigation } = this.props;
    const { currentQuestion, currentScore, cardsTotal, currentQuestionNumber, showAnswer, showResults } = this.state;

    if(showResults){
      return (<QuizResult totalScore={ currentScore } restartQuiz={ this.initQuiz } navigation= { navigation }/>)
    }

    if(!currentQuestion){
      return (
        <View style={[styles.quizContainer, { justifyContent: 'center' }]}>
          <ActivityIndicator size='large' color={ black }/>
        </View>
      );
    }

    return(
      <View style={ styles.quizContainer }>
        <Text style={ styles.header }>{currentQuestionNumber} / { cardsTotal }</Text>
        <Text style={ styles.question }>{ currentQuestion.question }</Text>
        {!showAnswer && (
          <TouchableHighlight style={ [styles.buttons, styles.turnCardButton] }
            onPress={() => this.turnCard()}
            underlayColor={ ice }>
            <Text style={ styles.buttonText }>Show Answer</Text>
          </TouchableHighlight>
          )
        }
        {showAnswer && (
          <View>
            <Text style={ styles.answer }>{ currentQuestion.answer }</Text>
            <TouchableHighlight style={ [styles.buttons, styles.correctButton] }
              onPress={ () => this.saveAnswerPoint(true) }
              underlayColor={ ice }>
              <View style={styles.buttonsContainer} >
                <FontAwesome name='check' size={30} color={ black }
                style={{marginRight: 20}}/>
                <Text style={ styles.buttonText }>Correct</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={ [styles.buttons, styles.incorrectButton] }
              onPress={ () => this.saveAnswerPoint(false) }
              underlayColor={ ice }>
              <View style={styles.buttonsContainer} >
                <FontAwesome name='close' size={30} color={ black }
                style={{marginRight: 20}}/>
                <Text style={ styles.buttonText }>Incorrect</Text>
              </View>
            </TouchableHighlight>
          </View>
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  quizContainer:{
    flex: 1,
    alignItems: 'center'
  },
  header:{
    fontSize: 15,
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 10,
    fontWeight: 'bold'
  },
  question: {
    fontSize: 25,
    marginTop: 80,
    fontWeight: 'bold',
  },
  answer: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: red,
    fontSize: 17,
    marginTop: 20
  },
  buttons:{
    height: 60,
    width: 220,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'

  },
  buttonsContainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  turnCardButton:{
    marginTop: 80,
    borderColor: black,
    backgroundColor: defaultColor,
  },
  correctButton: {
    marginTop: 50,
    backgroundColor: green
  },
  incorrectButton: {
    marginTop: 20,
    backgroundColor: red
  },
  buttonText:{
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10
  }

});

const mapStateToProps = ({ selectedDeck }) =>{
  return { deck: selectedDeck };
}

export default connect(mapStateToProps)(Quiz);
