import { ScrollView, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { useState } from 'react'
import { commonStyles } from '../../styles/CommonStyles'

export default function NewPlayer({ navigation }) {

  const [nome, setNome] = useState('')
  const [cpf, setAge] = useState('16')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [phrase, setPhrase] = useState('')

  function navigateToPokemon() {
    if (!nome) {
      alert('Nickname é obrigatório')
    } else if (Number(cpf) < 16) {
      alert('Digite uma idade válida')
    } else if (!email) {
      alert('Email é obrigatório')
    } else if (!phone) {
      alert('Digite um telefone válido')
    } else if(password.length < 8 ) {
      alert('Digite uma senha maior que 7 caracteres')
    } else {
      navigation.navigate('ChoisePokemon', {
        player: {
          nome: nome,
          cpf: cpf,
          email: email,
          phone: phone,
          password: password,
          
        },
      })
    }
  }

  return (
    <ScrollView>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        placeholderTextColor="#0D4DA3"
        selectionColor="#0D4DA3"
        value={nickname}
        onChangeText={setNickname}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        placeholderTextColor="#0D4DA3"
        selectionColor="#0D4DA3"
        keyboardType='number-pad'
        maxLength={3}
        value={cpf}
        onChangeText={setAge}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        placeholderTextColor="#0D4DA3"
        selectionColor="#0D4DA3"
        keyboardType='email-address'
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite seu telefone"
        placeholderTextColor="#0D4DA3"
        selectionColor="#0D4DA3"
        keyboardType='phone-pad'
        value={phone}
        onChangeText={setPhone}
      />


      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        placeholderTextColor="#0D4DA3"
        selectionColor="#0D4DA3"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={{ ...styles.input, ...styles.inputTextarea }}
        placeholder="Digite sua frase de efeito"
        placeholderTextColor="#0D4DA3"
        selectionColor="#0D4DA3"
        multiline
        value={phrase}
        onChangeText={setPhrase}
      />

      <TouchableOpacity
        onPress={navigateToPokemon}
        style={{ ...commonStyles.button, alignSelf: 'center' }}>
        <Text style={commonStyles.buttonText}>Entrar</Text>
      </TouchableOpacity>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '80%',
    borderColor: '#0D4DA3',
    borderWidth: 2,
    alignSelf: 'center',
    marginVertical: 10,
    textAlign: 'center',
    borderRadius: 5,
    color: '#0D4DA3'
  },
  inputTextarea: {
    height: 80,
    textAlignVertical: 'top',
    textAlign: 'auto',
    padding: 5
  }
})