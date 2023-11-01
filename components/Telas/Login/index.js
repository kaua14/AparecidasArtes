import React, { useState } from 'react';
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
        placeholder="Sua senha"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
