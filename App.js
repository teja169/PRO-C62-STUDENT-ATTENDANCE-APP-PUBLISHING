import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import AssetExample from './components/AssetExample';

import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.head}>STUDENT ATTENDANCE</Text>
      <View style={styles.name}>
        <Text style={styles.name}>1. Shreyas</Text>
        <View>
          <TouchableOpacity>
            <Text style={styles.present}>P</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.absent}>A</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>2. Sathvik</Text>
        <View>
          <TouchableOpacity>
            <Text style={styles.present}>P</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.absent}>A</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>3. Sonia</Text>
        <View>
          <TouchableOpacity>
            <Text style={styles.present}>P</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.absent}>A</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>4. Ashray Gupta</Text>
        <View>
          <TouchableOpacity>
            <Text style={styles.present}>P</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.absent}>A</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>5. Kulkarni Anurag</Text>
        <View>
          <TouchableOpacity>
            <Text style={styles.present}>P</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.absent}>A</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>6. Sujay</Text>
        <View>
          <TouchableOpacity>
            <Text style={styles.present}>P</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.absent}>A</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>7. Leonard</Text>
        <View>
          <TouchableOpacity>
            <Text style={styles.present}>P</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.absent}>A</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>8. Pasikanti Tejwardhan</Text>
        <View>
          <TouchableOpacity>
            <Text style={styles.present}>P</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.absent}>A</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>9. Tejchowdary</Text>
        <View>
          <TouchableOpacity>
            <Text style={styles.present}>P</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.absent}>A</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity>
      <View style={styles.btn}>
          <Text style={styles.btn}>SUBMIT</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    backgroundColor: 'blue',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
    borderColor: 'blue',
    borderWidth: 10,
  },
  name: {
    textAlign: 'left',
    padding: 15,
    fontWeight: 'bold',
    fontSize: 16,
  },
  present: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 15,
    textAlign: 'right',
    marginTop: -50,
    marginRight: 60,
    borderWidth: 5,
    marginLeft: 180,
    backgroundColor : 'cyan'
  },
  absent: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 15,
    textAlign: 'left' ,
    marginTop: -60,
    marginRight: 0,
    borderWidth: 5,
    marginLeft: 240,
    backgroundColor : '#ff0000'
  },
  btn : {
    backgroundColor: 'cyan',
    borderColor: 'black',
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center',
    borderTopWidth: 5,
    borderBottomWidth: 5,
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 15
  }
});
