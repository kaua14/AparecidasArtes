import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles, colors } from '../../Styles/styles'; // Certifique-se de ajustar o caminho para o seu arquivo de estilos

const Agradecemos = () => {
  return (
    <View style={styles.container}>
     
      <Text style={[styles.text, { marginBottom: 20 }]}>Obrigado por sua compra!</Text>
      <Text style={styles.text}>
        Agradecemos por escolher nosso produto. Esperamos que você tenha uma ótima experiência!
      </Text>
    </View>
  );
};

export default Agradecemos;
