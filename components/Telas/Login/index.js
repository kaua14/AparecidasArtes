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
        navigation.navigate('Agradecimento'); // Navigate to WelcomePage after successful login
      })
        .catch(error => {
        // Handle errors here (e.g., display an error message)
        setError('Usuário ou senha inválidos'); // Set custom error message
        console.error('Error:', error.message); // Log the actual error for debugging
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
    </View>
  );
}
