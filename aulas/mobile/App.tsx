import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello NLW!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//https://nextlevelweek.com/episodios/omnistack/5/edicao/3?utm_source=convertkit&utm_medium=email&utm_campaign=NLW3+Workshops&utm_term=Leads+OmniStack&utm_content=Workshop+5