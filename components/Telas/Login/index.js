import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';
import { auth } from '../../../firebaseConfig';
import { styles } from '../../Styles/styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation(); // Usando o hook useNavigation para acessar a navegação

 const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Login successful, handle user data or navigation here
        console.log('User logged in successfully!', userCredential.user);
        navigation.navigate(); // Navigate to WelcomePage after successful login
      })
      .catch(error => {
        // Handle errors here (e.g., display an error message)
        Alert.alert('Error', error.message);
      });
  };

  const handleCadastroRedirect = () => {
    // Redireciona para a tela de cadastro quando o link é clicado
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.container}>
      <Text>Email:</Text>
      <TextInput
        style={styles.input}
=======
import { View, Text, TextInput, Button } from 'react-native';
import firebase from 'firebase';
import { auth } from '../../../firebaseConfig';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      // Login bem-sucedido, redirecione para a próxima tela
    } catch (error) {
      console.error('Erro de login:', error);
      // Lide com o erro de login (por exemplo, exiba uma mensagem de erro)
    }
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput

        placeholder="Seu email"
        onChangeText={setEmail}
        value={email}
      />
      <Text>Senha:</Text>
      <TextInput

        style={styles.input}

        placeholder="Sua senha"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity onPress={handleCadastroRedirect}>
        <Text style={styles.linkText}>Não tem cadastro ainda? Cadastre-se aqui</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Button title="Login" onPress={handleLogin} />

    </View>
  );
}
