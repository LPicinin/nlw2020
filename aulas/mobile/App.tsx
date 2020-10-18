import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -22.1483974,
          longitude: -51.1771001,
          latitudeDelta: 0.08,
          longitudeDelta: 0.08
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});

//39:09
//https://nextlevelweek.com/episodios/omnistack/5/edicao/3?utm_source=convertkit&utm_medium=email&utm_campaign=NLW3+Workshops&utm_term=Leads+OmniStack&utm_content=Workshop+5