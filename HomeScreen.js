import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import dictionary from '../database.js'


export default class App extends React.Component {
  

  constructor(){

    super();

    this.state = {

      text: '', 
      isSearchPressed: false, 
      isLoading: false,
      word: 'Loading...', 
      lexicalCategory: '', 
      definition: ''
      

    }

  }

   getWord = (text)=>{

        var text = this.state.text.toLowerCase();

      try{

        var word = dictionary[text]["word"]
        var lexicalCategory = dictionary[text]["lexicalCategory"]
        var definition = dictionary[text]["definition"]
        this.setState({
          word: word,
          lexicalCategory: lexicalCategory,
          definition: definition,
        });

      }

      catch(err){
        alert("Sorry, This word is not available for now");

        this.setState({

          'text': '', 
          'isSearchPressed': false,

        })

      }

    }

  render() {
    return (
      <View style={styles.container}>

        <View style = {styles.headerStyle}>

          <Text style = {styles.headerTxtStyle}> English Dictionary </Text>

        </View>
       
        <TextInput
            style = {styles.inputBox}
            onChangeText = {text => {

                this.setState({

                    text: text, 
                    isSearchPressed: false, 
                    word : "Loading...", 
                    lexicalCategory:'', 
                    examples: [],
                    definition: "", 

                })
            }}

            value = {this.state.text}
        />

        <TouchableOpacity
            style = {styles.goButton}
            onPress = {() =>{

                this.setState({isSearchPressed: true});
                this.getWord(this.state.word); 

            }}
        ><Text style = {styles.buttonText}> Search </Text></TouchableOpacity>

            <View  style = {styles.detailsContainer}>

                <Text style = {styles.detailTitle}>
                   Word: {" "}
                </Text>

                <Text style = {{fontSize: 18}}>
                   {this.state.word}
                </Text>


            </View>

             
            <View  style = {styles.detailsContainer}>

                <Text style = {styles.detailTitle}>
                   Type: {" "}
                </Text>

                <Text style = {{fontSize: 18}}>
                   {this.state.lexicalCategory}
                </Text>


            </View>

            <View  style = {{ flexDirection: 'row', flexWrap: 'wrap'}}>

                <Text style = {styles.detailTitle}>
                   Definition: {" "}
                </Text>
                
                <Text style = {{fontSize: 18}}>
                   {this.state.definition}
                </Text>


            </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: 'black', 
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  }, 
  detailContainer: {

    flex: 1,
    backgroundColor: '#b8b8b8',
    
  }, 
  detailsTitle: {
      
    alignSelf: 'center', 
    textAlign: 'center', 

  }, 

  headerStyle: {

      backgroundColor: 'blue', 
      height: 100,

  }, 
  headerTxtStyle: {

    color: 'white', 
    fontSize: 50, 
    textAlign: 'center', 
    justifyContent: 'center', 
    marginTop: '1%', 


  }
  
});
