import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';


export default ({ title, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <View style={styles.border}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 150,
    width: 340,
    backgroundColor: '#14487c',
    borderRadius: 10,
    margin: 10,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center', 
  },

  border: {
    height: 120,
    width: 310,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },

  icon: {
    margin: 20,
  },

  text: {
    flex: 1,
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
    flexWrap: 'wrap',  
},
});
