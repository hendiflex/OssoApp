import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as firebase from "firebase";
import 'firebase/firestore';
import * as api from '../util/api.js';
import moment from 'moment';

export default class Dashboard extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => <Icon name="home" size={30} />,
  };

  state = {
    currentUser: null,
    db: null,
    dailyData: []
  }

  componentWillMount() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    this.setState({ currentUser, db });    
  }
  
  componentDidMount() {
    this.getDailyData();
  }

  getDailyData() {
    
    const db = firebase.firestore();
    
    let dailyData = [];

    db.collection("dailydata")
      .where("created_at", "==", moment().format("MMM Do YY"))
      .get().then((querySnapshot) => {
        querySnapshot.forEach(function(doc) {
          console.log(doc.id, " => ", doc.data().user);
          console.log(doc.data());
          dailyData.push(doc.data());
        });
        console.log('HALOOO', dailyData)
        this.setState({ dailyData })
      }).catch(function(error) {
          console.log("Error getting documents: ", error);
      });
  }

  addTodo() {

    const { db } = this.state;

    db.collection("dailydata").add({
      boodschappen: true,
      eet_thuis: true,
      koken: false,
      user: 'max',
      created_at: moment().format("MMM Do YY")
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    }).catch(function(error) {
        console.error("Error adding document: ", error);
    });

  }

  render() {

    const { currentUser } = this.state;

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.headerText}>Faka <Text style={styles.userText}>{currentUser && currentUser.email}</Text></Text>

          <Text style={styles.promptText}>Wat kan ik voor je doen vandaag?</Text>
        </View>



        <Button
          onPress={() => console.log(this.state.dailyData)}
          title="Test"
          color="#841584"
        />

        <View style={styles.bodyWrapper}>
          <View style={styles.card}>
            <Icon style={styles.cardIcon} name="euro" size={45} />
            <Text style={styles.cardText}>De dagelijkse kost</Text>
          </View>
          <View style={styles.card}>
            <Icon style={styles.cardIcon} name="shopping-cart" size={45} />
            <Text style={styles.cardText}>Boodschappen</Text>
          </View>
          <View style={styles.card}>
            <Icon style={styles.cardIcon} name="check" size={45} />
            <Text style={styles.cardText}>Osso To-Do's</Text>
          </View>
          <View style={styles.card}>
            <Icon style={styles.cardIcon} name="cutlery" size={45} />
            <Text style={styles.cardText}>Avondeten generator</Text>
          </View>
        </View>
      </View>
    );
  }
}

const fullWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: fullWidth,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#828282',
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    borderRadius: 50,
  },
  headerText: {
    fontSize: 25,
    color: '#919191',
    fontFamily: 'monospace',
  },
  userText: {
    fontSize: 28,
    color: '#464c56',
    fontFamily: 'monospace'
  },
  promptText: {
    marginTop: 13,
    color: '#828282',
    fontSize: 16,
    fontFamily: 'monospace'
  },
  bodyWrapper: {
    flex: 1,
    marginTop: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    width: fullWidth * 0.46,
    height: fullWidth * 0.46,
    backgroundColor: '#1c99b2',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardIcon: {
    color: '#cccccc',
  },
  cardText: {
    color: '#f9f9f9',
    fontSize: 16,
    fontFamily: 'monospace',
    padding: 10,
    textAlign: 'center',
  },
});
