'use strict';
import React, { Component } from 'react';
import { Text, View, TouchableHighlight, TouchableOpacity, Button, buttonText } from 'react-native';
import FAB from 'react-native-fab';

export default class HomePageForm extends React.Component {

  render() {
   return (
      <View style={styles.loginButton}>


         <TouchableHighlight>
         <TouchableOpacity>
            <Text style={styles.loginButtonTextFirst}> ANALYSIS </Text>
            </TouchableOpacity>
         </TouchableHighlight>

         <TouchableHighlight>
         <TouchableOpacity>
             <Text style={styles.loginButtonTextSecond}> EXPENSES </Text>
             </TouchableOpacity>
          </TouchableHighlight>


          <TouchableHighlight>
          <TouchableOpacity>
              <Text style={styles.loginButtonTextThird}> BUDGET </Text>
              </TouchableOpacity>
           </TouchableHighlight>

           <TouchableHighlight style={styles.addButton} >
           <TouchableOpacity>
             <Text style={styles.buttonText}>Submit</Text>
             </TouchableOpacity>
           </TouchableHighlight>


      </View>


   );
}
}
const styles = {
  loginButton: {
     position: 'absolute',
     bottom: 0,
     height: 40,
     width: 400,
     backgroundColor: 'white',
     flex: 1,
     flexDirection: 'row',
   },
   addButton: {
       backgroundColor: '#ff5722',
       borderColor: '#ff5722',
       borderWidth: 1,
       height: 70,
       width: 70,
       borderRadius: 50,
       marginRight: 160,
       marginBottom: 60,
       alignItems: 'center',
       justifyContent: 'center',
       position: 'absolute',
       bottom: 20,
       right:20,
       shadowColor: '#000000',
       shadowOpacity: 0.8,
       shadowRadius: 1,
       shadowOffset: {
         height: 1,
         width: 0
       }
     },
   loginButtonTextFirst: {
      position: 'absolute',
      bottom: 0,
      height: 40,
      backgroundColor: 'orange',
      width: 124,
      borderColor: 'black',
      borderWidth: 2,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      padding: 10

    },
    loginButtonTextSecond: {
       position: 'absolute',
       bottom: 0,
       height: 40,
       backgroundColor: 'orange',
       width: 124,
       borderColor: 'black',
       borderWidth: 2,
       flex: 1,
       justifyContent: 'flex-end',
       flexDirection: 'row',
       alignItems: 'center',
       marginLeft: 124,
       padding: 10
     },
     loginButtonTextThird: {
        position: 'absolute',
        bottom: 0,
        height: 40,
        backgroundColor: 'orange',
        width: 128,
        borderColor: 'black',
        borderWidth: 2,
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginLeft: 248,
        padding: 10
      }
 };
