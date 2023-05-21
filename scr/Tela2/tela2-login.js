import { TextInput, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

import FundoApp from '../../../assets/bg.jpg'

import {commonStyles} from '../../styles/CommonStyles'

export default function Login({ navigation }) {

  function navigateForHome() {
    navigation.navigate('Home')
  }

  function navigateForNewPlayer() {
    navigation.navigate('NewPlayer')
  }

  return (
    <ImageBackground
      source={FundoApp}
      style={styles.background}
      resizeMode="stretch"
    >
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        placeholderTextColor="#DC5F43"
        selectionColor="#DC5F43"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        placeholderTextColor="#DC5F43"
        selectionColor="#DC5F43"
        secureTextEntry
      />

      <TouchableOpacity style={commonStyles.button} onPress={navigateForHome}>
        <Text style={commonStyles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text
        style={styles.callToActionText}
        onPress={navigateForNewPlayer}
      >
        Ainda não tem cadastro ?
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    backgroundColor: '#FFF',
    height: 50,
    width: '70%',
    borderColor: '#DC5F43',
    borderWidth: 3,
    borderRadius: 10,
    textAlign: 'center',
    color: '#DC5F43',
    marginVertical: 10
  },
  callToActionText: {
    color: '#FFF',
    fontStyle: 'italic',
    fontSize: 16,
    marginTop: 40
  },
})