import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Dashboard extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => <Icon name="home" size={30} />,
  };



  render() {


    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.headerText}>Faka <Text style={styles.userText}>Boi</Text></Text>

          <Text style={styles.promptText}>Wat kan ik voor je doen vandaag?</Text>
        </View>

        <View style={styles.bodyWrapper}>
          <View style={styles.card}>
            <Icon style={styles.cardIcon} name="euro-sign" size={45} />
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
            <Icon style={styles.cardIcon} name="utensils" size={45} />
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
  },
});
