import React from 'react';
import { Image, StyleSheet, View, TextInput, Text, Button, Alert } from 'react-native';

const Home = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={{
        flex: 1,
        alignItems: "center",
      }}>
        <Image
          style={{ width: 130, height: 130 }}
          source={require('../../assets/icon.png')}
        /></View>
      <View style={[styles.cencont, {
        flex: 3
      }]}>
        <Text style={styles.centext}>"Enter Your YouTube Video Link"</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter URL..."
          onChangeText={onChangeText}
          value={text}
        />
        <View style={styles.btn}>
          <Button
            onPress={() => {
              navigator('detail')
            }}
            title="Download"
            color="red"
            accessibilityLabel="Download video"
          />
        </View>
      </View>
      <View style={{
        flex: 1,

      }}>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25
  },
  cencont: {
    paddingTop: 200
  },
  centext: {
    textAlign: 'center',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
  input: {
    height: 50,
    margin: 25,
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
  },
  btn: {
    marginLeft: 90,
    marginRight: 90,
  }
});

export default Home;