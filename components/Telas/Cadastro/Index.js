import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import firebase from 'firebase';
import { db } from '../../../firebaseConfig';
import { styles } from '../../Styles/styles';

const Cadastro = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Desculpe, você precisa autorizar o acesso à câmera e à galeria para selecionar a foto');
      }
    })();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (result.canceled) {
        return;
      }

      if (result.uri) {
        setProfileImage(result.uri);
      } else {
        console.error('URI da imagem está indefinido.');
      }
    } catch (error) {
      console.error('Erro ao escolher uma imagem: ', error);
    }
  };

  const handleSignUp = () => {
    if (displayName.trim() === '' || !profileImage) {
      setError('Nome de usuário e imagem de perfil são obrigatórios.');
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;

        db.collection('users')
          .doc(user.uid)
          .set({
            email: email,
            nomeUsuario: displayName,
            imagemPerfilURL: profileImage,
          })
          .then(() => {
            console.log('Usuário salvo no Firebase');
            navigation.navigate('Login'); // Redireciona de volta para a tela de login após o cadastro bem-sucedido
          })
          .catch(error => {
            setError('Erro ao salvar o usuário: ' + error.message);
          });
      })
      .catch(error => {
        setError('Erro de cadastro: ' + error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        onChangeText={text => setDisplayName(text)}
        value={displayName}
      />
      <TouchableOpacity style={styles.imagePicker} onPress={selectImage}>
        <Text>Selecione uma imagem de perfil</Text>
      </TouchableOpacity>
      {profileImage && <Image source={{ uri: profileImage }} style={styles.profileImage} />}
      {error && <Text style={styles.errorText}>{error}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cadastro;
